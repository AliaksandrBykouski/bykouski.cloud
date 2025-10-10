import { Clock, Mail, MessageCircle } from "lucide-react";

export default function ContactLinks({
  params,
}: {
  params: {
    email: string;
    whatsapp: string;
    responseTime: string;
    responseTimeText: string;
    writeMe: string;
  };
}) {
  const contactInfo = {
    email: "aliaksandr.bykouski@example.com",
    whatsapp: "+420123456789",
  };

  return (
    <div className="mt-9 grid  md:justify-items-start lg:justify-items-center gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">{params.email}</h3>
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-muted-foreground text-[var(--ring)]" />
          <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline">
            {contactInfo.email}
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">WhatsApp</h3>
        <div className="flex items-center gap-3">
          <MessageCircle className="h-5 w-5 text-muted-foreground text-[var(--ring)]" />
          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            className="text-primary hover:underline"
          >
            {params.writeMe}
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">{params.responseTime}</h3>
        <div className="flex items-center gap-3">
          <Clock className="h-5 w-5 text-muted-foreground text-[var(--ring)]" />
          <span className="text-muted-foreground">{params.responseTimeText}</span>
        </div>
      </div>
    </div>
  );
}
