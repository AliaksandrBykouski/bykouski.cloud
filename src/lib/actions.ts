"use server";

import { Resend } from "resend";
import z from "zod";
import ContactFormEmail, { ConfirmationEmail } from "@/emails/contact-form-email";
import { ContactFormSchema } from "./schemas";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function sendEmail(data: ContactFormInputs, locale?: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const result = ContactFormSchema.safeParse(data);
  if (result.error) {
    return { error: z.treeifyError(result.error) };
  }

  try {
    const { name, email, message } = result.data;

    // Send email to admin
    const { data, error } = await resend.emails.send({
      from: "Aliaksandr <hello@bykouskidigital.cz>",
      to: ["post@bykouskidigital.cz"],
      replyTo: email,
      subject: `Вам пришло сообщение от ${name}`,
      text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
      react: await ContactFormEmail({ name, email, message }),
    });
    if (!data || error) {
      throw new Error(error?.message || "Failed to send email");
    }

    // Send confirmation email to sender
    const { data: confirmationData, error: confirmationError } = await resend.emails.send({
      from: "Aliaksandr <hello@bykouskidigital.cz>",
      to: [email],
      subject: locale === "cz" ? "Vaše zpráva byla doručena" : "Ваше сообщение доставлено",
      text:
        locale === "cz"
          ? `Dobrý den, ${name}!\n\nObdrželi jsme vaši zprávu a brzy vás budeme kontaktovat.\n\nS pozdravem,\nTým Aliaksandr Bykouski`
          : `Здравствуйте, ${name}!\n\nМы получили ваше сообщение и свяжемся с вами в ближайшее время.\n\nС уважением,\nКоманда Aliaksandr Bykouski`,
      react: await ConfirmationEmail({ name, locale }),
    });

    if (!confirmationData || confirmationError) {
      console.warn("Failed to send confirmation email:", confirmationError?.message);
      // Don't throw error here as the main email was sent successfully
    }

    return { success: true };
  } catch (error: unknown) {
    return { error: error instanceof Error ? error.message : "Unknown error" };
  }
}
