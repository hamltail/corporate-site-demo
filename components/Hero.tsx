import { useTranslations } from "next-intl";

import Container from "@/components/Container";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="flex min-h-150 items-center overflow-hidden md:min-h-175 lg:min-h-200">
      <Container className="flex h-full items-center">
        <div className="max-w-full md:max-w-160">
          <h1
            id="hero-title"
            className="hero-title font-english text-foreground text-[80px] leading-[1.1] font-normal tracking-widest md:text-[100px] lg:text-[120px]"
          >
            <span className="inline-flex items-center gap-6 md:gap-8 lg:gap-10">
              <span className="hero-design opacity-0">Design</span>

              <span className="hero-cross text-primary opacity-0">×</span>
            </span>

            <br />

            <span className="hero-technology inline-block opacity-0">
              Technology
            </span>
          </h1>

          <p className="hero-lead text-muted mt-8 text-base leading-[1.6] font-medium opacity-0 md:mt-16 md:text-xl lg:mt-24 lg:text-2xl">
            {t("leadFirst")}
            <br />
            {t("leadSecond")}
          </p>
        </div>
      </Container>
    </section>
  );
}
