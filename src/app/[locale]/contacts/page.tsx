import ContactForm from "@/components/ContactForm";
import { getTranslations } from "next-intl/server";
import { Clock, Mail, MessageCircle } from "lucide-react";

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
  };

  const contactInfo = {
    email: "aliaksandr.bykouski@example.com",
    whatsapp: "+420123456789",
  };

  return (
    <div className="pt-10">
      <div className="container max-w-5xl">
        <section className="mb-16">
          <h2 className="title">{t("contacts.title")}</h2>
          <p className="mt-8 text-xl font-light text-muted-foreground">
            {t("contacts.description")}
          </p>
        </section>

        <ContactForm translations={formTranslations} />

        <section className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                {contactInfo.whatsapp}
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
        </section>

        {/* Work Process Section */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">
            {t("contacts.workProcess")}
          </h3>
          <div className="bg-muted/50 rounded-lg p-6">
            <p className="text-lg text-center">
              {t("contacts.workProcessText")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
