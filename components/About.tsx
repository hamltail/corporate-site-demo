import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-[128px]">
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-8 px-7 md:grid-cols-2 md:px-11 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-[8px]">
        <div className="w-full md:max-w-[560px]">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
            <h2
              id="about-title"
              className="font-english text-[64px] font-bold leading-[1.2] tracking-[0.1em]"
            >
              About
            </h2>

            <span className="font-japanese text-[24px] font-bold text-[#B3913B]">
              私たちについて
            </span>
          </div>

          <p className="mt-16 text-[24px] font-[500] leading-[1.6] text-black">
            デザインとテクノロジーで、
            <br />
            より良い体験と未来を作る。
          </p>

          <p className="mt-16 text-[16px] leading-[1.8] text-[#666666]">
            Animal
            Corporationは、デザインとテクノロジーの力で、人の行動や社会の仕組みをより良い方向へ導く体験を設計するデザインスタジオです。ユーザーの気持ちに寄り添い、ビジネスの成長につながる本質的な価値を生み出します。
          </p>
        </div>

        <div className="pt-0 md:pt-[150px]">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="flex h-[120px] w-full items-center gap-6 rounded-[8px] bg-white px-6">
              <Image
                src="/images/about-human-centered.png"
                alt="Human Centered icon"
                width={48}
                height={48}
                className="h-12 w-12 object-cover"
              />

              <div>
                <h3 className="font-english text-[14px] font-bold tracking-[0.1em]">
                  Human Centered
                </h3>

                <p className="mt-2 text-[14px] leading-[1.8] text-[#666666]">
                  人を中心に考え、共感を軸に体験を設計します。
                </p>
              </div>
            </article>

            <article className="flex h-[120px] w-full items-center gap-6 rounded-[8px] bg-white px-6">
              <Image
                src="/images/about-impactful.png"
                alt="Impactful icon"
                width={48}
                height={48}
                className="h-12 w-12 object-cover"
              />

              <div>
                <h3 className="font-english text-[14px] font-bold tracking-[0.1em]">
                  Impactful
                </h3>

                <p className="mt-2 text-[14px] leading-[1.8] text-[#666666]">
                  ビジネスと社会に、継続的なインパクトを生み出します。
                </p>
              </div>
            </article>

            <article className="flex h-[120px] w-full items-center gap-6 rounded-[8px] bg-white px-6">
              <Image
                src="/images/about-technology-driven.png"
                alt="Technology Driven icon"
                width={48}
                height={48}
                className="h-12 w-12 object-cover"
              />

              <div>
                <h3 className="font-english text-[14px] font-bold tracking-[0.1em]">
                  Technology Driven
                </h3>

                <p className="mt-2 text-[14px] leading-[1.8] text-[#666666]">
                  最新のテクノロジーを活用し、最適な解決策を実現します。
                </p>
              </div>
            </article>

            <article className="flex h-[120px] w-full items-center gap-6 rounded-[8px] bg-white px-6">
              <Image
                src="/images/about-simple-beautiful.png"
                alt="Simple & Beautiful icon"
                width={48}
                height={48}
                className="h-12 w-12 object-cover"
              />

              <div>
                <h3 className="font-english text-[14px] font-bold tracking-[0.1em]">
                  Simple &amp; Beautiful
                </h3>

                <p className="mt-2 text-[14px] leading-[1.8] text-[#666666]">
                  シンプルで美しく、使いやすい体験を追求します。
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
