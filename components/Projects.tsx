import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "@/components/Container";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="py-32">
      <Container>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
          <h2
            id="projects-title"
            className="font-english text-[64px] leading-[1.2] font-bold tracking-widest"
          >
            Projects
          </h2>

          <span className="font-japanese text-primary text-2xl font-bold">
            {t("label")}
          </span>
        </div>

        <p className="text-muted mt-10 max-w-170 text-base leading-[1.8]">
          {t("introFirst")}
          <br />
          {t("introSecond")}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="project-shadow bg-surface flex min-h-109 flex-col overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-surface relative h-60 w-full">
              <Image
                src="/images/projects-pawth.png"
                alt="Pawth project thumbnail"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-contain"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between">
                <h3 className="font-english text-lg font-bold">Pawth</h3>

                <a
                  href="https://pawth-lp.hamltail.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors"
                  aria-label={t("pawthOpen")}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M14 3h7v7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 14L21 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 21H3V3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              <p className="text-muted mt-3 min-h-13 text-sm leading-[1.8]">
                {t("pawthDescription")}
              </p>

              <div className="text-subtle mt-3 text-[13px]">
                {t("pawthWork")}
              </div>

              <div className="mt-3 flex items-center gap-3">
                <span className="chip">Haml</span>
                <span className="chip">Tailwind CSS</span>
                <span className="chip">Responsive</span>
              </div>
            </div>
          </article>

          <article className="project-shadow bg-surface flex min-h-109 flex-col overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-surface relative h-60 w-full">
              <Image
                src="/images/projects-animal-corporation.png"
                alt="Animal Corporation project thumbnail"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-contain"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-english text-lg font-bold">
                Animal Corporation
              </h3>

              <p className="text-muted mt-3 min-h-13 text-sm leading-[1.8]">
                {t("animalDescription")}
              </p>

              <div className="text-subtle mt-3 text-[13px]">
                {t("animalWork")}
              </div>

              <div className="mt-3 flex items-center gap-3">
                <span className="chip">Figma</span>
                <span className="chip">HTML / CSS</span>
                <span className="chip">Responsive</span>
              </div>
            </div>
          </article>

          <article className="project-shadow bg-surface flex min-h-109 flex-col overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-surface relative h-60 w-full">
              <Image
                src="/images/projects-animal-caffee.png"
                alt="Animal Caffee project thumbnail"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-contain"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between">
                <h3 className="font-english text-lg font-bold">
                  Animal Caffee
                </h3>

                <span className="bg-surface-chip text-muted rounded px-3 py-1 text-xs font-medium">
                  {t("comingSoon")}
                </span>
              </div>

              <p className="text-muted mt-3 min-h-13 text-sm leading-[1.8]">
                {t("caffeeDescription")}
              </p>

              <div className="text-subtle mt-3 text-[13px]">
                {t("caffeeWork")}
              </div>

              <div className="mt-3 flex items-center gap-3">
                <span className="chip">Figma</span>
                <span className="chip">HTML / CSS</span>
                <span className="chip">Responsive</span>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
