import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ServicesCard({
  title,
  content,
  footer,
  icon: Icon,
}: {
  title?: string;
  content?: string;
  footer?: string;
  icon?: LucideIcon;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
        <CardAction>
          <div className="flex items-center gap-2">
            {Icon && (
              <Icon className="h-6 w-6 text-[var(--ring)] hover:scale-140  transition-transform hover:rotate-15" />
            )}
          </div>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-2 text-lg leading-7 text-muted-foreground">
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <Link className="text-m font-medium hover:underline text-[var(--ring)]" href="/contacts">
          {footer}
        </Link>
      </CardFooter>
    </Card>
  );
}
