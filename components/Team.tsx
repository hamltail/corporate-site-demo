import Image from "next/image";

export default function Team() {
  return (
    <section id="team" className="py-[128px]">
      <div className="mx-auto w-full max-w-[1120px] px-7 md:px-11 lg:px-[8px]">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
          <h2
            id="team-title"
            className="font-english text-[64px] font-bold leading-[1.2] tracking-[0.1em]"
          >
            Team
          </h2>

          <span className="font-japanese text-[24px] font-bold text-[#B3913B]">
            メンバー
          </span>
        </div>

        <p className="mt-10 max-w-[680px] text-[16px] leading-[1.8] text-[#666666]">
          それぞれの専門性を持つアニマルメンバーをご紹介します。
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="team-card project-shadow flex flex-col overflow-hidden rounded-[16px] bg-[#F9F6F2] lg:min-h-[360px]">
            <Image
              src="/images/team-goro.png"
              alt="黒森 ゴロウ"
              width={360}
              height={360}
              className="h-[360px] w-full bg-[#F9F6F2] object-contain md:h-[300px] lg:h-[240px]"
            />

            <div className="flex flex-col p-5 md:p-6">
              <p className="text-[12px] font-medium text-[#999999]">
                代表取締役社長 / CEO
              </p>

              <h3 className="mt-2 font-english text-[16px] font-bold">
                黒森 ゴロウ
              </h3>

              <p className="mt-2 text-[14px] leading-[1.8] text-[#666666]">
                力は仲間のために使う。それが私の信念です。
              </p>
            </div>
          </article>

          <article className="team-card project-shadow flex flex-col overflow-hidden rounded-[16px] bg-[#F9F6F2] lg:min-h-[360px]">
            <Image
              src="/images/team-ko.png"
              alt="南 考"
              width={360}
              height={360}
              className="h-[360px] w-full bg-[#F9F6F2] object-contain md:h-[300px] lg:h-[240px]"
            />

            <div className="flex flex-col p-5 md:p-6">
              <p className="text-[12px] font-medium text-[#999999]">
                取締役副社長 / COO
              </p>

              <h3 className="mt-2 font-english text-[16px] font-bold">
                南 考
              </h3>

              <p className="mt-2 text-[14px] leading-[1.8] text-[#666666]">
                仲間が高く跳べるように。私はその助走を支えます。
              </p>
            </div>
          </article>

          <article className="team-card project-shadow flex flex-col overflow-hidden rounded-[16px] bg-[#F9F6F2] lg:min-h-[360px]">
            <Image
              src="/images/team-miu.png"
              alt="白雪 ミウ"
              width={360}
              height={360}
              className="h-[360px] w-full bg-[#F9F6F2] object-contain md:h-[300px] lg:h-[240px]"
            />

            <div className="flex flex-col p-5 md:p-6">
              <p className="text-[12px] font-medium text-[#999999]">
                取締役 / CDO
              </p>

              <h3 className="mt-2 font-english text-[16px] font-bold">
                白雪 ミウ
              </h3>

              <p className="mt-2 text-[14px] leading-[1.8] text-[#666666]">
                美しさは思いやりから生まれる。心に残る体験を届けたい。
              </p>
            </div>
          </article>

          <article className="team-card project-shadow flex flex-col overflow-hidden rounded-[16px] bg-[#F9F6F2] lg:min-h-[360px]">
            <Image
              src="/images/team-ken.png"
              alt="柴田 ケン"
              width={360}
              height={360}
              className="h-[360px] w-full bg-[#F9F6F2] object-contain md:h-[300px] lg:h-[240px]"
            />

            <div className="flex flex-col p-5 md:p-6">
              <p className="text-[12px] font-medium text-[#999999]">
                Design Technologist
              </p>

              <h3 className="mt-2 font-english text-[16px] font-bold">
                柴田 ケン
              </h3>

              <p className="mt-2 text-[14px] leading-[1.8] text-[#666666]">
                心を動かす体験を、テクノロジーの力で届けます。
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
