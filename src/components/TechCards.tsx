import TechCard from "./TechCard";

interface TechItem {
  id: string;
  title: string;
  description: string;
  iconName?: string;
}

interface TechCardsProps {
  technologies: TechItem[];
}

export default function TechCards({ technologies }: TechCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          title={tech.title}
          description={tech.description}
          iconName={tech.iconName}
        />
      ))}
    </div>
  );
}
