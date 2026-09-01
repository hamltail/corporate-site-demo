import Image from "next/image";

import Container from "@/components/Container";

const members = [
  {
    image: "/images/team-goro.png",
    name: "黒森 ゴロウ",
    role: "代表取締役社長 / CEO",
    message: "力は仲間のために使う。それが私の信念です。",
  },
  {
    image: "/images/team-ko.png",
    name: "南 考",
    role: "取締役副社長 / COO",
    message: "仲間が高く跳べるように。私はその助走を支えます。",
  },
  {
    image: "/images/team-miu.png",
    name: "白雪 ミウ",
    role: "取締役 / CDO",
    message: "美しさは思いやりから生まれる。心に残る体験を届けたい。",
  },
  {
    image: "/images/team-ken.png",
    name: "柴田 ケン",
    role: "Design Technologist",
    message: "心を動かす体験を、テクノロジーの力で届けます。",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-[128px]">
      <Container>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
          <h2
            id="team-title"
            className="font-english text-[64px] leading-[1.2] font-bold tracking-[0.1em]"
          >
            Team
          </h2>

          <span className="font-japanese text-primary text-[24px] font-bold">
            メンバー
          </span>
        </div>

        <p className="text-muted mt-10 max-w-[680px] text-[16px] leading-[1.8]">
          それぞれの専門性を持つアニマルメンバーをご紹介します。
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <article
              key={member.name}
              className="team-card project-shadow bg-surface-soft flex flex-col overflow-hidden rounded-2xl lg:min-h-[360px]"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={360}
                height={360}
                className="bg-surface-soft h-[360px] w-full object-contain md:h-[300px] lg:h-[240px]"
              />

              <div className="flex flex-col p-5 md:p-6">
                <p className="text-subtle text-[12px] font-medium">
                  {member.role}
                </p>

                <h3 className="font-english mt-2 text-[16px] font-bold">
                  {member.name}
                </h3>

                <p className="text-muted mt-2 text-[14px] leading-[1.8]">
                  {member.message}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
