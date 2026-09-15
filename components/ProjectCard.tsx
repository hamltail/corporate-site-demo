import Image from "next/image";
import type { ReactNode } from "react";

type ProjectCardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  work: string;
  technologies: string[];
  action?: ReactNode;
};

export default function ProjectCard({
  title,
  imageSrc,
  imageAlt,
  description,
  work,
  technologies,
  action,
}: ProjectCardProps) {
  return (
    <article className="project-shadow bg-surface flex min-h-109 flex-col overflow-hidden rounded-xl">
      <div className="bg-surface relative h-60 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between">
          <h3 className="font-english text-lg font-bold">{title}</h3>

          {action}
        </div>

        <p className="text-muted mt-3 min-h-13 text-sm leading-[1.8]">
          {description}
        </p>

        <div className="text-subtle mt-3 text-[13px]">{work}</div>

        <div className="mt-3 flex items-center gap-3">
          {technologies.map((technology) => (
            <span key={technology} className="chip">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
