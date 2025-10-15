import { getTranslations } from "next-intl/server";
import { AccordionDemo } from "@/components/Accordion";
import ContactForm from "@/components/ContactForm";
import ContactLinks from "@/components/ContactLinks";

export default async function ContactsPage({ params }: { params: Promise<{ locale: string }> }) {
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
    yourName: t("form.yourName"),
    yourEmail: t("form.yourEmail"),
    yourMessage: t("form.yourMessage"),
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
    telegram: "Telegram",
    responseTime: t("contacts.responseTime"),
    responseTimeText: t("contacts.responseTimeText"),
    writeMe: t("form.writeMe"),
  };

  return (
    <section
      className="pt-4"
      aria-labelledby="contacts-title"
      aria-describedby="contacts-description"
      id="contacts"
    >
      <div className="container ">
        <div className="mb-5 space-y-3">
          <h1
            className="title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[var(--foreground)]"
            id="contacts-title"
          >
            {t("contacts.title")}
          </h1>
          <p
            className="mt-4 md:mt-6 lg:mt-8 font-light text-lg md:text-xl lg:text-2xl text-muted-foreground"
            id="contacts-description"
          >
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
