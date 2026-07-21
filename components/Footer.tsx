import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F9F6F2]">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-6 px-7 py-8 md:px-11 lg:h-[96px] lg:flex-row lg:justify-between lg:gap-0 lg:px-[8px]">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/animal-corporation-logo.png"
            alt="Animal Corporation Logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />

          <span className="font-english whitespace-nowrap text-base tracking-[0.18em]">
            Animal Corporation
          </span>
        </Link>

        <nav aria-label="フッターナビゲーション">
          <ul className="flex flex-col items-center gap-4 text-sm text-[#666666] lg:flex-row lg:gap-8">
            <li>
              <a href="#about" className="nav-link">
                私たちについて
              </a>
            </li>

            <li>
              <a href="#news" className="nav-link">
                お知らせ
              </a>
            </li>

            <li>
              <a href="#contact" className="nav-link">
                お問い合わせ
              </a>
            </li>
          </ul>
        </nav>

        <p className="text-xs text-[#666666]">
          © 2026 Animal Corporation
        </p>
      </div>
    </footer>
  );
}
