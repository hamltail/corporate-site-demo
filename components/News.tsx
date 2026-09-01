import Container from "@/components/Container";

export default function News() {
  return (
    <section id="news" className="py-[128px]">
      <Container>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
          <h2
            id="news-title"
            className="font-english text-[64px] leading-[1.2] font-bold tracking-[0.1em]"
          >
            News
          </h2>

          <span className="font-japanese text-primary text-[24px] font-bold">
            お知らせ
          </span>
        </div>

        <div className="mt-12 px-0 lg:px-16">
          <article className="border-border mb-8 flex flex-col gap-3 border-b pb-8 md:flex-row md:gap-8">
            <div className="md:min-w-[100px]">
              <time dateTime="2026-07-01" className="text-muted text-sm">
                2026.07.01
              </time>
            </div>

            <div className="flex-1">
              <p className="text-[18px] font-bold">
                Animal Caffee をオープンしました。
                <span className="bg-primary text-primary-foreground ml-3 inline-block rounded-full px-3 py-1 text-[12px]">
                  New
                </span>
              </p>

              <p className="text-muted mt-3 text-[16px] leading-[1.8]">
                動物たちが集う新しいコミュニティスペースとして、Animal Caffee
                を公開しました。
              </p>
            </div>
          </article>

          <article className="border-border mb-8 flex flex-col gap-3 border-b pb-8 md:flex-row md:gap-8">
            <div className="md:min-w-[100px]">
              <time dateTime="2026-06-01" className="text-muted text-sm">
                2026.06.01
              </time>
            </div>

            <div className="flex-1">
              <p className="text-[18px] font-bold">
                新メンバーが参加しました。
              </p>

              <p className="text-muted mt-3 text-[16px] leading-[1.8]">
                Design Technologist として柴田ケンが加わりました。
              </p>
            </div>
          </article>

          <article className="flex flex-col gap-3 md:flex-row md:gap-8">
            <div className="md:min-w-[100px]">
              <time dateTime="2026-04-01" className="text-muted text-sm">
                2026.04.01
              </time>
            </div>

            <div className="flex-1">
              <p className="text-[18px] font-bold">
                Animal Corporation を設立しました。
              </p>

              <p className="text-muted mt-3 text-[16px] leading-[1.8]">
                デザインとテクノロジーで、より良い体験を届けるために設立しました。
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
