import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "@/components/Container";

const members = [
  {
    id: "goro",
    image: "/images/team-goro.png",
  },
  {
    id: "ko",
    image: "/images/team-ko.png",
  },
  {
    id: "miu",
    image: "/images/team-miu.png",
  },
  {
    id: "ken",
    image: "/images/team-ken.png",
  },
] as const;

export default function Team() {
  const t = useTranslations("Team");

  return (
    <section id="team" className="py-32">
      <Container>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
          <h2
            id="team-title"
            className="font-english text-[64px] leading-[1.2] font-bold tracking-widest"
          >
            Team
          </h2>

          <span className="font-japanese text-primary text-2xl font-bold">
            {t("label")}
          </span>
        </div>

        <p className="text-muted mt-10 max-w-170 text-base leading-[1.8]">
          {t("intro")}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <article
              key={member.id}
              className="team-card project-shadow bg-surface-soft flex flex-col overflow-hidden rounded-2xl lg:min-h-90"
            >
              <Image
                src={member.image}
                alt={t(`${member.id}.name`)}
                width={360}
                height={360}
                className="bg-surface-soft h-90 w-full object-contain md:h-75 lg:h-60"
              />

              <div className="flex flex-col p-5 md:p-6">
                <p className="text-subtle text-xs font-medium">
                  {t(`${member.id}.role`)}
                </p>

                <h3 className="font-english mt-2 text-base font-bold">
                  {t(`${member.id}.name`)}
                </h3>

                <p className="text-muted mt-2 text-sm leading-[1.8]">
                  {t(`${member.id}.message`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
