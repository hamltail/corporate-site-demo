import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="bg-surface-soft">
      <Container className="flex flex-col items-center gap-6 py-8 lg:h-24 lg:flex-row lg:justify-between lg:gap-0">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/animal-corporation-logo.png"
            alt="Animal Corporation Logo"
            width={32}
            height={32}
            className="size-8 object-contain"
          />

          <span className="font-english whitespace-nowrap text-base tracking-[0.18em]">
            Animal Corporation
          </span>
        </Link>

        <nav aria-label="フッターナビゲーション">
          <ul className="text-muted flex flex-col items-center gap-4 text-sm lg:flex-row lg:gap-8">
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

        <p className="text-muted text-xs">© 2026 Animal Corporation</p>
      </Container>
    </footer>
  );
}
