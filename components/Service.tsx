import Image from "next/image";

export default function Service() {
  return (
    <section id="service" className="py-[128px]">
      <div className="mx-auto w-full max-w-[1120px] px-7 md:px-11 lg:px-[8px]">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
          <h2
            id="service-title"
            className="font-english text-[64px] font-bold leading-[1.2] tracking-[0.1em]"
          >
            Service
          </h2>

          <span className="font-japanese text-[24px] font-bold text-[#B3913B]">
            事業内容
          </span>
        </div>

        <p className="mt-10 max-w-[680px] text-[16px] leading-[1.8] text-[#666666]">
          デザインからフロントエンド実装、情報設計まで。
          <br />
          ユーザー体験を重視したWebサイト制作を提供しています。
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          <article className="flex min-h-[320px] flex-col items-start rounded-[8px] bg-[#F9F6F2] p-6">
            <div className="mx-auto flex h-[128px] w-[128px] items-center justify-center rounded-full bg-white">
              <Image
                src="/images/service-web-design.png"
                alt="Web Design icon"
                width={80}
                height={80}
                className="h-[80px] w-[80px] object-contain"
              />
            </div>

            <div className="mt-6 w-full">
              <h3 className="font-english text-[18px] font-bold">
                Web Design
              </h3>

              <p className="mt-2 text-[14px] leading-[1.8] text-[#666666]">
                ブランドと目的に沿った、成果に繋がるWebデザインを提供します。
              </p>
            </div>
          </article>

          <article className="flex min-h-[320px] flex-col items-start rounded-[8px] bg-[#F9F6F2] p-6">
            <div className="mx-auto flex h-[128px] w-[128px] items-center justify-center rounded-full bg-white">
              <Image
                src="/images/service-uiux-design.png"
                alt="UI / UX Design icon"
                width={80}
                height={80}
                className="h-[80px] w-[80px] object-cover"
              />
            </div>

            <div className="mt-6 w-full">
              <h3 className="font-english text-[18px] font-bold">
                UI / UX Design
              </h3>

              <p className="mt-2 text-[14px] leading-[1.8] text-[#666666]">
                ユーザー中心の設計で、価値ある体験を設計します。
              </p>
            </div>
          </article>

          <article className="flex min-h-[320px] flex-col items-start rounded-[8px] bg-[#F9F6F2] p-6">
            <div className="mx-auto flex h-[128px] w-[128px] items-center justify-center rounded-full bg-white">
              <Image
                src="/images/service-frontend-development.png"
                alt="Front-end Development icon"
                width={80}
                height={80}
                className="h-[80px] w-[80px] object-cover"
              />
            </div>

            <div className="mt-6 w-full">
              <h3 className="font-english text-[18px] font-bold">
                Front-end Development
              </h3>

              <p className="mt-2 text-[14px] leading-[1.8] text-[#666666]">
                パフォーマンスとメンテナンス性を重視した実装を行います。
              </p>
            </div>
          </article>

          <article className="flex min-h-[320px] flex-col items-start rounded-[8px] bg-[#F9F6F2] p-6">
            <div className="mx-auto flex h-[128px] w-[128px] items-center justify-center rounded-full bg-white">
              <Image
                src="/images/service-information-architecture.png"
                alt="Information Architecture icon"
                width={80}
                height={80}
                className="h-[80px] w-[80px] object-cover"
              />
            </div>

            <div className="mt-6 w-full">
              <h3 className="font-english text-[18px] font-bold">
                Information Architecture
              </h3>

              <p className="mt-2 text-[14px] leading-[1.8] text-[#666666]">
                情報設計を整え、使いやすい構造を作ります。
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
