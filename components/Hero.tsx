import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="flex min-h-[600px] items-center md:min-h-[700px] lg:min-h-[800px]">
      <Container className="flex h-full items-center">
        <div className="max-w-full md:max-w-[640px]">
          <h1
            id="hero-title"
            className="font-english text-foreground text-[80px] leading-[1.1] font-normal tracking-[0.1em] md:text-[100px] lg:text-[120px]"
          >
            <span className="inline-flex items-center gap-6 md:gap-8 lg:gap-10">
              <span>Design</span>
              <span className="text-primary">×</span>
            </span>

            <br />

            <span>Technology</span>
          </h1>

          <p className="text-muted mt-8 text-[16px] leading-[1.6] font-[500] md:mt-16 md:text-[20px] lg:mt-24 lg:text-[24px]">
            デザインとテクノロジーで、
            <br />
            より良い体験と未来を作る。
          </p>
        </div>
      </Container>
    </section>
  );
}
