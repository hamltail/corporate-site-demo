import Container from "@/components/Container";

export default function Recruit() {
  return (
    <section id="recruit" className="py-32">
      <Container className="flex h-full flex-col justify-center">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
          <h2
            id="recruit-title"
            className="font-english text-left text-[64px] leading-[1.2] font-bold tracking-widest"
          >
            Recruit
          </h2>

          <span className="font-japanese text-primary text-2xl font-bold">
            採用情報
          </span>
        </div>

        <div className="text-center">
          <h3 className="mt-16 text-2xl leading-[1.3] font-medium md:text-[28px] lg:mt-24 lg:text-[32px]">
            個性は、才能だ。
          </h3>

          <p className="text-muted mx-auto mt-16 max-w-170 text-base leading-loose">
            強いゴリラも
            <br />
            跳べるカンガルーも
            <br />
            繊細なネコも
            <br />
            まっすぐな犬も
          </p>

          <p className="text-muted mx-auto mt-4 max-w-170 text-base">
            Animal Corporationでは、新しい仲間を募集しています。
          </p>

          <a
            href="mailto:recruit@example.com"
            aria-label="採用エントリーのメールを送る"
            className="cta-button border-primary text-primary mx-auto mt-12 inline-flex h-12 w-full max-w-70 items-center justify-center gap-3 rounded-3xl border-2 text-base font-medium lg:mt-16"
          >
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="inline-block"
            >
              <path
                d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M3 21c0-3.866 3.582-7 9-7s9 3.134 9 7"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>エントリー</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
