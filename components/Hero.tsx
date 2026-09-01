import { useTranslations } from "next-intl";

import Container from "@/components/Container";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="flex min-h-150 items-center md:min-h-175 lg:min-h-200">
      <Container className="flex h-full items-center">
        <div className="max-w-full md:max-w-160">
          <h1
            id="hero-title"
            className="font-english text-foreground text-[80px] leading-[1.1] font-normal tracking-widest md:text-[100px] lg:text-[120px]"
          >
            <span className="inline-flex items-center gap-6 md:gap-8 lg:gap-10">
              <span>Design</span>
              <span className="text-primary">×</span>
            </span>

            <br />

            <span>Technology</span>
          </h1>

          <p className="text-muted mt-8 text-base leading-[1.6] font-medium md:mt-16 md:text-xl lg:mt-24 lg:text-2xl">
            {t("leadFirst")}
            <br />
            {t("leadSecond")}
          </p>
        </div>
      </Container>
    </section>
  );
}
