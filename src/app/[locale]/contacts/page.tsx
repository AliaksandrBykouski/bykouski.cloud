import ContactForm from "@/components/ContactForm";
import { getTranslations } from "next-intl/server";
import { AccordionDemo } from "@/components/Accordion";
import ContactLinks from "@/components/ContactLinks";

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

  const faqs = {
    "1": {
      question: t(`faq.list.1.question`),
      answer: t(`faq.list.1.answer`),
    },
    "2": {
      question: t(`faq.list.2.question`),
      answer: t(`faq.list.2.answer`),
    },
    "3": {
      question: t(`faq.list.3.question`),
      answer: t(`faq.list.3.answer`),
    },
    "4": {
      question: t(`faq.list.4.question`),
      answer: t(`faq.list.4.answer`),
    },
    "5": {
      question: t(`faq.list.5.question`),
      answer: t(`faq.list.5.answer`),
    },
    "6": {
      question: t(`faq.list.6.question`),
      answer: t(`faq.list.6.answer`),
    },
  };

  const accordionTitle = t(`faq.title`);

  const contactInfo = {
    email: "E-mail",
    whatsapp: "WhatsApp",
    responseTime: t("contacts.responseTime"),
    responseTimeText: t("contacts.responseTimeText"),
    writeMe: t("form.writeMe"),
  };

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

        <ContactLinks params={contactInfo} />

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
