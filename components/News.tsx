export default function News() {
  return (
    <section id="news" className="py-[128px]">
      <div className="mx-auto w-full max-w-[1120px] px-7 md:px-11 lg:px-[8px]">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
          <h2
            id="news-title"
            className="font-english text-[64px] font-bold leading-[1.2] tracking-[0.1em]"
          >
            News
          </h2>

          <span className="font-japanese text-[24px] font-bold text-[#B3913B]">
            お知らせ
          </span>
        </div>

        <div className="mt-12 px-0 lg:px-16">
          <article className="mb-8 flex flex-col gap-3 border-b border-[#CACACA] pb-8 md:flex-row md:gap-8">
            <div className="md:min-w-[100px]">
              <time dateTime="2026-07-01" className="text-sm text-[#666666]">
                2026.07.01
              </time>
            </div>

            <div className="flex-1">
              <p className="text-[18px] font-bold">
                Animal Caffee をオープンしました。
                <span className="ml-3 inline-block rounded-full bg-[#B3913B] px-3 py-1 text-[12px] text-white">
                  New
                </span>
              </p>

              <p className="mt-3 text-[16px] leading-[1.8] text-[#666666]">
                動物たちが集う新しいコミュニティスペースとして、Animal
                Caffee を公開しました。
              </p>
            </div>
          </article>

          <article className="mb-8 flex flex-col gap-3 border-b border-[#CACACA] pb-8 md:flex-row md:gap-8">
            <div className="md:min-w-[100px]">
              <time dateTime="2026-06-01" className="text-sm text-[#666666]">
                2026.06.01
              </time>
            </div>

            <div className="flex-1">
              <p className="text-[18px] font-bold">
                新メンバーが参加しました。
              </p>

              <p className="mt-3 text-[16px] leading-[1.8] text-[#666666]">
                Design Technologist として柴田ケンが加わりました。
              </p>
            </div>
          </article>

          <article className="flex flex-col gap-3 md:flex-row md:gap-8">
            <div className="md:min-w-[100px]">
              <time dateTime="2026-04-01" className="text-sm text-[#666666]">
                2026.04.01
              </time>
            </div>

            <div className="flex-1">
              <p className="text-[18px] font-bold">
                Animal Corporation を設立しました。
              </p>

              <p className="mt-3 text-[16px] leading-[1.8] text-[#666666]">
                デザインとテクノロジーで、より良い体験を届けるために設立しました。
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
