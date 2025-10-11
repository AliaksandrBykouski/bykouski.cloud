import { Clock, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactLinks({
  params,
}: {
  params: {
    email: string;
    telegram: string;
    responseTime: string;
    responseTimeText: string;
    writeMe: string;
  };
}) {
  const contactInfo = {
    email: "post@bykouskidigital.cz",
    telegram: "Raulius7",
  };

  return (
    <div className="mt-9 grid  md:justify-items-start lg:justify-items-center gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">{params.email}</h3>
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-muted-foreground text-[var(--ring)]" />
          <Link
            href={`mailto:${contactInfo.email}`}
            className="text-primary hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {contactInfo.email}
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Telegram</h3>
        <div className="flex items-center gap-3">
          <MessageCircle className="h-5 w-5 text-muted-foreground text-[var(--ring)]" />
          <Link
            href={`https://t.me/${contactInfo.telegram}`}
            className="text-primary hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {params.writeMe}
          </Link>
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
