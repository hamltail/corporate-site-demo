"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 365);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed right-8 bottom-8 z-40 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#B3913B] text-white shadow-lg transition-all duration-300 hover:bg-[#9A7A2A]"
      aria-label="トップへ戻る"
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
