import { Code, FileText, Layout, Monitor, Search, Smartphone, Wrench, Zap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import ServicesCard from "./ServicesCard";

export default async function ServicesCards({ locale }: { locale: string }) {
  const t = await getTranslations({ locale });

  const services = [
    {
      id: 1,
      title: t("servicesCard.1.title"),
      content: t("servicesCard.1.content"),
      footer: t("services.footer"),
      icon: Code,
    },
    {
      id: 2,
      title: t("servicesCard.2.title"),
      content: t("servicesCard.2.content"),
      footer: t("services.footer"),
      icon: Smartphone,
    },
    {
      id: 3,
      title: t("servicesCard.3.title"),
      content: t("servicesCard.3.content"),
      footer: t("services.footer"),
      icon: Layout,
    },
    {
      id: 4,
      title: t("servicesCard.4.title"),
      content: t("servicesCard.4.content"),
      footer: t("services.footer"),
      icon: FileText,
    },
    {
      id: 5,
      title: t("servicesCard.5.title"),
      content: t("servicesCard.5.content"),
      footer: t("services.footer"),
      icon: Wrench,
    },
    {
      id: 6,
      title: t("servicesCard.6.title"),
      content: t("servicesCard.6.content"),
      footer: t("services.footer"),
      icon: Search,
    },
    {
      id: 7,
      title: t("servicesCard.7.title"),
      content: t("servicesCard.7.content"),
      footer: t("services.footer"),
      icon: Monitor,
    },
    {
      id: 8,
      title: t("servicesCard.8.title"),
      content: t("servicesCard.8.content"),
      footer: t("services.footer"),
      icon: Zap,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
      {services.map((service) => (
        <ServicesCard
          key={service.id}
          title={service.title}
          content={service.content}
          footer={service.footer}
          icon={service.icon}
        />
      ))}
    </div>
  );
}
