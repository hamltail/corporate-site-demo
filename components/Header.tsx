"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Container from "@/components/Container";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-surface relative z-50">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/animal-corporation-logo.png"
            alt="Animal Corporation Logo"
            className="size-8 object-contain"
            width={32}
            height={32}
          />

          <span className="font-english text-base tracking-[0.18em]">
            Animal Corporation
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav
            aria-label="グローバルナビゲーション"
            className="hidden md:block"
          >
            <ul className="text-muted flex items-center gap-8 text-sm font-medium">
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

              <li>
                <a href="#recruit" className="nav-link">
                  採用情報
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="メニューを開閉"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((previous) => !previous)}
          >
            <span className="bg-foreground h-0.5 w-6" />
            <span className="bg-foreground h-0.5 w-6" />
            <span className="bg-foreground h-0.5 w-6" />
          </button>

          <ThemeSwitcher />
        </div>
      </Container>

      <nav
        id="mobile-menu"
        aria-label="モバイルナビゲーション"
        className={`bg-surface absolute inset-x-7 top-20 rounded-b-2xl px-4 py-4 shadow-xl md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="text-muted flex flex-col gap-4 text-base font-medium">
          <li>
            <a href="#about" className="nav-link" onClick={closeMenu}>
              私たちについて
            </a>
          </li>

          <li>
            <a href="#news" className="nav-link" onClick={closeMenu}>
              お知らせ
            </a>
          </li>

          <li>
            <a href="#contact" className="nav-link" onClick={closeMenu}>
              お問い合わせ
            </a>
          </li>

          <li>
            <a href="#recruit" className="nav-link" onClick={closeMenu}>
              採用情報
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
