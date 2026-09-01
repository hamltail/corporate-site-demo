import Container from "@/components/Container";

export default function Contact() {
  return (
    <section id="contact" className="py-[128px]">
      <Container>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
          <h2
            id="contact-title"
            className="font-english text-left text-[64px] leading-[1.2] font-bold tracking-[0.1em]"
          >
            Contact
          </h2>

          <span className="font-japanese text-primary text-[24px] font-bold">
            お問い合わせ
          </span>
        </div>

        <div className="text-center">
          <h3 className="mt-16 text-[24px] leading-[1.3] font-[500] md:text-[28px] lg:mt-24 lg:text-[32px]">
            新しい体験を、一緒につくりませんか？
          </h3>

          <p className="text-muted mx-auto mt-10 max-w-[680px] text-[16px] leading-[1.8] md:mt-12 lg:mt-16">
            サービス開発やWeb制作、デザインに関するご相談など、
            お気軽にお問い合わせください。
          </p>

          <a
            href="mailto:info@example.com"
            aria-label="メールでお問い合わせ"
            className="cta-button border-primary text-primary mx-auto mt-12 inline-flex h-12 w-full max-w-[280px] items-center justify-center gap-3 rounded-3xl border-2 text-[16px] font-medium lg:mt-16"
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
                d="M3 6.5L12 13L21 6.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>

            <span>お問い合わせ</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
