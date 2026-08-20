"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SiPython, SiDjango } from "react-icons/si";
import { FiZap, FiCpu } from "react-icons/fi";
import { siteData } from "@/lib/data";

function useTypewriter(words: string[], speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) => (deleting ? t.slice(0, -1) : current.slice(0, t.length + 1)));
        },
        deleting ? speed / 2 : speed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(siteData.main.titles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-violet-950" />

      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-12 px-4 py-32 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex max-w-xl flex-col gap-4 text-left md:gap-6">
          <div className="flex items-center gap-2">
            <span className="animate-wave text-2xl md:text-3xl">👋</span>
            <p className="text-lg md:text-xl">Hey</p>
          </div>

          <h1 className="text-4xl font-bold md:text-6xl">I am {siteData.main.name}</h1>

          <div className="flex items-center gap-1.5 text-lg md:text-2xl">
            <h2>I am into</h2>
            <span className="font-medium text-violet-600 dark:text-violet-400">
              {typed}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 md:text-base">
            {siteData.main.shortDesc}
          </p>

          <a
            href="#about"
            className="w-fit rounded-md bg-violet-600 px-4 py-2 text-sm text-white transition-colors hover:bg-violet-700 md:text-base"
          >
            About
          </a>
        </div>

        <div className="relative flex-shrink-0">
          <div className="h-56 w-56 overflow-hidden rounded-full shadow-2xl md:h-80 md:w-80">
            <Image
              src="/images/image.webp"
              alt={siteData.main.name}
              width={320}
              height={320}
              priority
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="absolute -left-8 -top-4 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg dark:bg-gray-800 md:h-16 md:w-16">
            <FiCpu className="h-7 w-7 text-red-500" />
          </div>
          <div className="absolute -right-4 top-0 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg dark:bg-gray-800 md:h-16 md:w-16">
            <FiZap className="h-7 w-7 text-amber-500" />
          </div>
          <div className="absolute -right-6 bottom-16 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg dark:bg-gray-800 md:-right-8 md:bottom-24 md:h-16 md:w-16">
            <SiPython className="h-7 w-7 text-blue-500" />
          </div>
          <div className="absolute -bottom-4 right-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg dark:bg-gray-800 md:h-16 md:w-16">
            <SiDjango className="h-7 w-7 text-green-700 dark:text-green-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
