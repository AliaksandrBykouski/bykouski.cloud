import ContactForm from "@/components/ContactForm";
import { getTranslations } from "next-intl/server";

export default async function ContactsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const formTranslations = {
    name: t("form.name"),
    email: t("form.email"),
    message: t("form.message"),
    agreeToTerms: t("form.agreeToTerms"),
  };

  return (
    <section className="pb-24 pt-40">
      <div className="container  max-w-5xl">
        <h2 className="title">{t("contacts.title")}</h2>
        <p className="mt-4 text-lg font-light text-muted-foreground">{t("contacts.description")}</p>
        <ContactForm translations={formTranslations} />
      </div>
    </section>
  );
}
