"use client";

import { Children, type ReactNode, useState } from "react";

type ProjectCarouselProps = {
  children: ReactNode;
};

export default function ProjectCarousel({ children }: ProjectCarouselProps) {
  const projects = Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex(
      (currentIndex) => (currentIndex - 1 + projects.length) % projects.length,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % projects.length);
  };

  return (
    <div className="mt-12">
      <div className="relative mx-auto h-120 w-full max-w-6xl perspective-distant">
        {projects.map((project, index) => {
          const relativeIndex =
            (index - activeIndex + projects.length) % projects.length;

          const position =
            relativeIndex === 0
              ? "z-20 translate-z-0"
              : relativeIndex === 1
                ? "z-10 translate-x-60 -translate-z-160 -rotate-y-30"
                : "z-10 -translate-x-150 -translate-z-160 rotate-y-15";

          return (
            <div
              key={index}
              className={`absolute top-1/2 left-1/2 w-90 max-w-[80vw] -translate-x-1/2 -translate-y-1/2 transform-3d transition-transform duration-700 ease-in-out ${position}`}
            >
              {project}
            </div>
          );
        })}

        <button
          type="button"
          onClick={showPrevious}
          className="bg-surface/80 text-foreground absolute top-1/2 left-4 z-30 flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm transition-all hover:scale-110 hover:bg-surface"
          aria-label="前のプロジェクトを表示"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={showNext}
          className="bg-surface/80 text-foreground absolute top-1/2 right-4 z-30 flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm transition-all hover:scale-110 hover:bg-surface"
          aria-label="次のプロジェクトを表示"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
