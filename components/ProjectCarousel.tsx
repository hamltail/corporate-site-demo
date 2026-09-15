"use client";

import type { ReactNode } from "react";

type ProjectCarouselProps = {
  children: ReactNode;
};

export default function ProjectCarousel({ children }: ProjectCarouselProps) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}
