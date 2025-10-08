import ContactForm from "@/components/ContactForm";
import { getTranslations } from "next-intl/server";
import { Clock, Mail, MessageCircle } from "lucide-react";
import { AccordionDemo } from "@/components/Accordion";
import { fa } from "zod/v4/locales";

export default async function ContactsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const formTranslations = {
    name: t("form.name"),
    email: t("form.email"),
    message: t("form.message"),
    agreeToTerms: t("form.agreeToTerms"),
    send: t("form.send"),
    success: t("form.success"),
    error: t("form.error"),
  };

  const contactInfo = {
    email: "aliaksandr.bykouski@example.com",
    whatsapp: "+420123456789",
  };

  // Use different translation keys based on locale
  const accordionKey = locale === "ru" ? "accordion" : "faq";

  const faqs = {
    "1": {
      question: t(`${accordionKey}.list.1.question`),
      answer: t(`${accordionKey}.list.1.answer`),
    },
    "2": {
      question: t(`${accordionKey}.list.2.question`),
      answer: t(`${accordionKey}.list.2.answer`),
    },
    "3": {
      question: t(`${accordionKey}.list.3.question`),
      answer: t(`${accordionKey}.list.3.answer`),
    },
    "4": {
      question: t(`${accordionKey}.list.4.question`),
      answer: t(`${accordionKey}.list.4.answer`),
    },
    "5": {
      question: t(`${accordionKey}.list.5.question`),
      answer: t(`${accordionKey}.list.5.answer`),
    },
    "6": {
      question: t(`${accordionKey}.list.6.question`),
      answer: t(`${accordionKey}.list.6.answer`),
    },
  };

  const accordionTitle = t(`${accordionKey}.title`);

  return (
    <section className="pt-7" aria-labelledby="contacts-title">
      <div className="container max-w-5xl">
        <div className="mb-5 space-y-3">
          <h2 className="title" id="contacts-title">
            {t("contacts.title")}
          </h2>
          <p className="mt-8 text-xl font-light text-muted-foreground">
            {t("contacts.description")}
          </p>
        </div>

        <ContactForm translations={formTranslations} />

        <div className="mt-9 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("contacts.email")}</h3>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-primary hover:underline"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">WhatsApp</h3>
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-muted-foreground" />
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                className="text-primary hover:underline"
              >
                {/* {contactInfo.whatsapp} */}
                {t("form.writeMe")}
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {t("contacts.responseTime")}
            </h3>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">
                {t("contacts.responseTimeText")}
              </span>
            </div>
          </div>
        </div>

        <AccordionDemo
          translations={{
            title: accordionTitle,
            list: faqs,
          }}
        />
      </div>
    </section>
  );
}
