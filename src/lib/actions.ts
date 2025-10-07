"use server";

import React from "react";
import z from "zod";
import { ContactFormSchema } from "./schemas";
import { Resend } from "resend";
import ContactFormEmail from "@/emails/contact-form-email";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function sendEmail(data: ContactFormInputs) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const result = ContactFormSchema.safeParse(data);
  if (result.error) {
    return { error: z.treeifyError(result.error) };
  }

  try {
    const { name, email, message } = result.data;
    const { data, error } = await resend.emails.send({
      from: "Aliaksandr <hello@bykouski.cloud>",
      to: ["developweb34@gmail.com"],
      replyTo: email,
      subject: `Вам пришло сообщение от ${name}`,
      text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
      react: await ContactFormEmail({ name, email, message }),
    });
    if (!data || error) {
      throw new Error(error?.message || "Failed to send email");
    }
    return { success: true };
  } catch (error: any) {
    return { error: error.message || "Unknown error" };
  }
}
