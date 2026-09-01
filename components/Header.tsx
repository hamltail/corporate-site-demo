"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 bg-white">
      <div className="mx-auto flex h-[80px] w-full max-w-[1120px] items-center justify-between px-7 md:px-11 lg:px-[8px]">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/animal-corporation-logo.png"
            alt="Animal Corporation Logo"
            className="h-8 w-8 object-contain"
            width={32}
            height={32}
          />

          <span className="font-english text-base tracking-[0.18em]">
            Animal Corporation
          </span>
        </Link>

        <nav aria-label="グローバルナビゲーション" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-[#666666]">
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
          <span className="h-0.5 w-6 bg-black" />
          <span className="h-0.5 w-6 bg-black" />
          <span className="h-0.5 w-6 bg-black" />
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="モバイルナビゲーション"
        className={`absolute inset-x-7 top-[80px] rounded-b-[16px] bg-white px-4 py-4 shadow-xl md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 text-base font-medium text-[#666666]">
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
