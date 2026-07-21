export default function Recruit() {
  return (
    <section id="recruit" className="py-[128px]">
      <div className="mx-auto flex h-full w-full max-w-[1120px] flex-col justify-center px-7 md:px-11 lg:px-[8px]">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
          <h2
            id="recruit-title"
            className="text-left font-english text-[64px] font-bold leading-[1.2] tracking-[0.1em]"
          >
            Recruit
          </h2>

          <span className="font-japanese text-[24px] font-bold text-[#B3913B]">
            採用情報
          </span>
        </div>

        <div className="text-center">
          <h3 className="mt-16 text-[24px] font-[500] leading-[1.3] md:text-[28px] lg:mt-24 lg:text-[32px]">
            個性は、才能だ。
          </h3>

          <p className="mx-auto mt-16 max-w-[680px] text-[16px] leading-[2] text-[#666666]">
            強いゴリラも
            <br />
            跳べるカンガルーも
            <br />
            繊細なネコも
            <br />
            まっすぐな犬も
          </p>

          <p className="mx-auto mt-4 max-w-[680px] text-[16px] text-[#666666]">
            Animal Corporationでは、新しい仲間を募集しています。
          </p>

          <a
            href="mailto:recruit@example.com"
            aria-label="採用エントリーのメールを送る"
            className="cta-button mx-auto mt-12 inline-flex h-[48px] w-full max-w-[280px] items-center justify-center gap-3 rounded-[24px] border-2 border-[#B3913B] text-[16px] font-medium text-[#B3913B] lg:mt-16"
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
      </div>
    </section>
  );
}
