import Image from "next/image";

import Container from "@/components/Container";

export default function Service() {
  return (
    <section id="service" className="py-[128px]">
      <Container>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
          <h2
            id="service-title"
            className="font-english text-[64px] leading-[1.2] font-bold tracking-[0.1em]"
          >
            Service
          </h2>

          <span className="font-japanese text-primary text-[24px] font-bold">
            事業内容
          </span>
        </div>

        <p className="text-muted mt-10 max-w-[680px] text-[16px] leading-[1.8]">
          デザインからフロントエンド実装、情報設計まで。
          <br />
          ユーザー体験を重視したWebサイト制作を提供しています。
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {[
            {
              src: "/images/service-web-design.png",
              alt: "Web Design icon",
              title: "Web Design",
              text: "ブランドと目的に沿った、成果に繋がるWebデザインを提供します。",
            },
            {
              src: "/images/service-uiux-design.png",
              alt: "UI / UX Design icon",
              title: "UI / UX Design",
              text: "ユーザー中心の設計で、価値ある体験を設計します。",
            },
            {
              src: "/images/service-frontend-development.png",
              alt: "Front-end Development icon",
              title: "Front-end Development",
              text: "パフォーマンスとメンテナンス性を重視した実装を行います。",
            },
            {
              src: "/images/service-information-architecture.png",
              alt: "Information Architecture icon",
              title: "Information Architecture",
              text: "情報設計を整え、使いやすい構造を作ります。",
            },
          ].map((service) => (
            <article
              key={service.title}
              className="bg-surface-soft flex min-h-[320px] flex-col items-start rounded-lg p-6"
            >
              <div className="bg-surface mx-auto flex h-32 w-32 items-center justify-center rounded-full">
                <Image
                  src={service.src}
                  alt={service.alt}
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>

              <div className="mt-6 w-full">
                <h3 className="font-english text-[18px] font-bold">
                  {service.title}
                </h3>

                <p className="text-muted mt-2 text-[14px] leading-[1.8]">
                  {service.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
