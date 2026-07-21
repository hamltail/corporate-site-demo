export default function Projects() {
  return (
    <section id="projects" className="py-[128px]">
      <div className="mx-auto w-full max-w-[1120px] px-7 md:px-11 lg:px-[8px]">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
          <h2
            id="projects-title"
            className="font-english text-[64px] font-bold leading-[1.2] tracking-[0.1em]"
          >
            Projects
          </h2>

          <span className="font-japanese text-[24px] font-bold text-[#B3913B]">
            制作実績
          </span>
        </div>

        <p className="mt-10 max-w-[680px] text-[16px] leading-[1.8] text-[#666666]">
          デザインと技術を活かして制作した
          <br />
          Webサイトやアプリケーションの実績をご覧ください。
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="project-shadow flex min-h-[436px] flex-col overflow-hidden rounded-[12px] bg-white transition-transform duration-300 hover:-translate-y-2">
            <img
              src="/images/projects-pawth.png"
              alt="Pawth project thumbnail"
              className="h-[240px] w-full bg-white object-contain"
            />

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between">
                <h3 className="font-english text-[18px] font-bold">Pawth</h3>

                <a
                  href="https://pawth-lp.hamltail.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#666666] hover:text-black"
                  aria-label="パウスのプロジェクトを開く"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M14 3h7v7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 14L21 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 21H3V3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              <p className="mt-3 min-h-[52px] text-[14px] leading-[1.8] text-[#666666]">
                日々の足あとを描く。小さな日記アプリ
              </p>

              <div className="mt-3 text-[13px] text-[#999999]">
                企画 / デザイン / 開発
              </div>

              <div className="mt-3 flex items-center gap-3">
                <span className="chip">Haml</span>
                <span className="chip">Tailwind CSS</span>
                <span className="chip">Responsive</span>
              </div>
            </div>
          </article>

          <article className="project-shadow flex min-h-[436px] flex-col overflow-hidden rounded-[12px] bg-white transition-transform duration-300 hover:-translate-y-2">
            <img
              src="/images/projects-animal-corporation.png"
              alt="Animal Corporation project thumbnail"
              className="h-[240px] w-full bg-white object-contain"
            />

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between">
                <h3 className="font-english text-[18px] font-bold">
                  Animal Corporation
                </h3>
              </div>

              <p className="mt-3 min-h-[52px] text-[14px] leading-[1.8] text-[#666666]">
                コーポレートサイト制作（架空プロジェクト）
              </p>

              <div className="mt-3 text-[13px] text-[#999999]">
                情報設計 / デザイン / フロントエンド
              </div>

              <div className="mt-3 flex items-center gap-3">
                <span className="chip">Figma</span>
                <span className="chip">HTML / CSS</span>
                <span className="chip">Responsive</span>
              </div>
            </div>
          </article>

          <article className="project-shadow flex min-h-[436px] flex-col overflow-hidden rounded-[12px] bg-white transition-transform duration-300 hover:-translate-y-2">
            <img
              src="/images/projects-animal-caffee.png"
              alt="Animal Caffee project thumbnail"
              className="h-[240px] w-full bg-white object-contain"
            />

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between">
                <h3 className="font-english text-[18px] font-bold">
                  Animal Caffee
                </h3>

                <span className="rounded-[4px] bg-[#F5F2EE] px-3 py-1 text-[12px] font-medium text-[#666666]">
                  準備中
                </span>
              </div>

              <p className="mt-3 min-h-[52px] text-[14px] leading-[1.8] text-[#666666]">
                アニマルカフェのサイトリニューアル（架空）
              </p>

              <div className="mt-3 text-[13px] text-[#999999]">
                UI UXデザイン / コーディング / 写真・素材選定
              </div>

              <div className="mt-3 flex items-center gap-3">
                <span className="chip">Figma</span>
                <span className="chip">HTML / CSS</span>
                <span className="chip">Responsive</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
