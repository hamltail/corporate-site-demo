import Image from "next/image";

import Container from "@/components/Container";

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <Container>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
          <h2
            id="projects-title"
            className="font-english text-[64px] leading-[1.2] font-bold tracking-widest"
          >
            Projects
          </h2>

          <span className="font-japanese text-primary text-2xl font-bold">
            制作実績
          </span>
        </div>

        <p className="text-muted mt-10 max-w-170 text-base leading-[1.8]">
          デザインと技術を活かして制作した
          <br />
          Webサイトやアプリケーションの実績をご覧ください。
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="project-shadow bg-surface flex min-h-109 flex-col overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-2">
            <Image
              src="/images/projects-pawth.png"
              alt="Pawth project thumbnail"
              width={480}
              height={240}
              className="bg-surface h-60 w-full object-contain"
            />

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between">
                <h3 className="font-english text-lg font-bold">Pawth</h3>

                <a
                  href="https://pawth-lp.hamltail.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors"
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

              <p className="text-muted mt-3 min-h-13 text-sm leading-[1.8]">
                日々の足あとを描く。小さな日記アプリ
              </p>

              <div className="text-subtle mt-3 text-[13px]">
                企画 / デザイン / 開発
              </div>

              <div className="mt-3 flex items-center gap-3">
                <span className="chip">Haml</span>
                <span className="chip">Tailwind CSS</span>
                <span className="chip">Responsive</span>
              </div>
            </div>
          </article>

          <article className="project-shadow bg-surface flex min-h-109 flex-col overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-2">
            <Image
              src="/images/projects-animal-corporation.png"
              alt="Animal Corporation project thumbnail"
              width={480}
              height={240}
              className="bg-surface h-60 w-full object-contain"
            />

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-english text-lg font-bold">
                Animal Corporation
              </h3>

              <p className="text-muted mt-3 min-h-13 text-sm leading-[1.8]">
                コーポレートサイト制作（架空プロジェクト）
              </p>

              <div className="text-subtle mt-3 text-[13px]">
                情報設計 / デザイン / フロントエンド
              </div>

              <div className="mt-3 flex items-center gap-3">
                <span className="chip">Figma</span>
                <span className="chip">HTML / CSS</span>
                <span className="chip">Responsive</span>
              </div>
            </div>
          </article>

          <article className="project-shadow bg-surface flex min-h-109 flex-col overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-2">
            <Image
              src="/images/projects-animal-caffee.png"
              alt="Animal Caffee project thumbnail"
              width={480}
              height={240}
              className="bg-surface h-60 w-full object-contain"
            />

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between">
                <h3 className="font-english text-lg font-bold">
                  Animal Caffee
                </h3>

                <span className="bg-surface-chip text-muted rounded px-3 py-1 text-xs font-medium">
                  準備中
                </span>
              </div>

              <p className="text-muted mt-3 min-h-13 text-sm leading-[1.8]">
                アニマルカフェのサイトリニューアル（架空）
              </p>

              <div className="text-subtle mt-3 text-[13px]">
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
      </Container>
    </section>
  );
}
