import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiNextdotjs,
} from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

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
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105">
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
