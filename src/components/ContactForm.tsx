"use client";

import { z } from "zod";
import Link from "next/link";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller } from "react-hook-form";
import { ContactFormSchema, Inputs } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { sendEmail } from "@/lib/actions";

export default function ContactForm({
  translations,
}: {
  translations: {
    name: string;
    email: string;
    message: string;
    agreeToTerms: string;
  };
}) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { name: "", email: "", message: "", agreeToTerms: false },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await sendEmail(data);
      if (result.success) {
        toast.success("Сообщение отправлено!");
        reset();
      } else {
        console.error("Send email error:", result.error);
        toast.error(`Ошибка: ${result.error}`);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Произошла неожиданная ошибка");
    }
  };

  return (
    <section className="relative isolate">
      <div className="relative">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-16 lg:flex-auto"
          noValidate
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder={translations.name}
                autoComplete="given-name"
                {...register("name")}
                aria-invalid={errors.name ? "true" : "false"}
                required
                style={{
                  caretColor: "var(--ring)",
                  color: "var(--ring)",
                  borderColor: "var(--ring)",
                }}
              />
              {errors.name?.message && (
                <span role="alert" className="text-sm text-red-600 mt-1 block">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder={translations.email}
                autoComplete="email"
                {...register("email")}
                aria-invalid={errors.email ? "true" : "false"}
                required
                style={{
                  caretColor: "var(--ring)",
                  color: "var(--ring)",
                  borderColor: "var(--ring)",
                }}
              />
              {errors.email?.message && (
                <span role="alert" className="text-sm text-red-600 mt-1 block">
                  {errors.email?.message}
                </span>
              )}
            </div>
          </div>
          <div className="mt-8">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Message
            </label>
            <Textarea
              id="message"
              placeholder={translations.message}
              rows={15}
              className="min-h-[120px]"
              {...register("message")}
              aria-invalid={errors.message ? "true" : "false"}
              required
              style={{
                caretColor: "var(--ring)",
                color: "var(--ring)",
                borderColor: "var(--ring)",
              }}
            />
            {errors.message?.message && (
              <span role="alert" className="text-sm text-red-600 mt-1 block">
                {errors.message?.message}
              </span>
            )}
          </div>
          <div className="mt-8">
            <Controller
              name="agreeToTerms"
              control={control}
              render={({ field }) => (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-invalid={errors.agreeToTerms ? "true" : "false"}
                    style={{
                      color: "var(--ring)",
                      borderColor: "var(--ring)",
                      cursor: "pointer",
                    }}
                  />
                  <label
                    htmlFor="agreeToTerms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <Link
                      href="/terms"
                      className="text-primary hover:underline hover:text-[var(--ring)]"
                    >
                      {translations.agreeToTerms}
                    </Link>
                  </label>
                </div>
              )}
            />
            {errors.agreeToTerms?.message && (
              <span role="alert" className="text-sm text-red-600 mt-2 block">
                {errors.agreeToTerms.message}
              </span>
            )}
          </div>
          <div className="mt-8 flex justify-end">
            <Button
              type="submit"
              disabled={isSubmitting || !watch("agreeToTerms")}
              style={{ background: "var(--ring)" }}
              className="hover:bg-[var(--destructive)] cursor-pointer w-full "
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
