export default function Hero() {
  return (
    <section className="min-h-[600px] flex items-center md:min-h-[700px] lg:min-h-[800px]">
      <div className="mx-auto flex w-full max-w-[1120px] h-full items-center px-7 md:px-11 lg:px-[8px]">
        <div className="max-w-full md:max-w-[640px]">
          <h1
            id="hero-title"
            className="font-english text-[80px] md:text-[100px] lg:text-[120px] font-normal leading-[1.1] tracking-[0.1em] text-black"
          >
            <span className="inline-flex items-center gap-6 md:gap-8 lg:gap-10">
              <span>Design</span>
              <span className="text-[#B3913B]">×</span>
            </span>

            <br />

            <span>Technology</span>
          </h1>

          <p className="mt-8 md:mt-16 lg:mt-24 text-[16px] md:text-[20px] lg:text-[24px] font-[500] leading-[1.6] text-[#666666]">
            デザインとテクノロジーで、
            <br />
            より良い体験と未来を作る。
          </p>
        </div>
      </div>
    </section>
  );
}
