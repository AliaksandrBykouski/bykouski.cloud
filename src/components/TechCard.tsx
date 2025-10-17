import { BiLogoPostgresql } from "react-icons/bi";
import { FaFigma, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TechCardProps {
  title: string;
  description: string;
  iconName?: string;
}

const iconMap = {
  react: FaReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  nodejs: FaNodeJs,
  postgresql: BiLogoPostgresql,
  prisma: SiPrisma,
  vercel: TbBrandVercel,
  git: FaGitAlt,
  figma: FaFigma,
};

export default function TechCard({
  title,
  description,
  iconName,
}: TechCardProps) {
  const IconComponent = iconName
    ? iconMap[iconName as keyof typeof iconMap]
    : null;

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 border-[var(--ring)]">
      <CardHeader>
        <div className="flex items-center gap-3">
          {IconComponent && (
            <IconComponent
              className="h-8 w-8 text-primary"
              aria-label={title}
            />
          )}
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
