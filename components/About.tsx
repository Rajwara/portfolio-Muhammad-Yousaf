import Image from "next/image";
import { siteData } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl">About Me</h2>

      <div className="mt-12 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="mx-auto w-56 flex-shrink-0 rounded-2xl bg-white p-3 shadow-md dark:bg-gray-800 lg:mx-0 lg:-rotate-3">
          <div className="relative h-60 w-full overflow-hidden rounded-xl bg-violet-100 dark:bg-violet-900/20 md:h-72">
            <Image
              src="/images/image2.webp"
              alt={siteData.main.name}
              fill
              className="object-cover object-top grayscale transition-all hover:grayscale-0"
            />
          </div>
          <p className="mt-2 text-center text-sm font-medium">{`< ${siteData.about.title} />`}</p>
        </div>

        <div className="flex-1 text-left">
          <p className="text-3xl font-semibold">{siteData.main.name}</p>
          <p className="mt-2 inline-block rounded bg-violet-50 px-2 py-1 text-sm text-violet-700 dark:bg-violet-900/20 dark:text-violet-400">
            {siteData.about.title}
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            📍 {siteData.about.location}
          </p>
          <p className="my-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
            {siteData.about.bio}
          </p>
          <a
            href={siteData.about.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="w-fit rounded-md bg-violet-600 px-6 py-2 text-sm text-white transition-shadow hover:shadow-xl md:text-base"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
