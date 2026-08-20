"use client";

import { useState } from "react";
import Image from "next/image";
import { FiEye, FiGithub } from "react-icons/fi";
import { siteData } from "@/lib/data";

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? siteData.projects
      : siteData.projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl">Projects</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-gray-500 dark:text-gray-400">
        Representative examples of the automation systems I build. Screenshots and links coming soon.
      </p>

      <div className="scroll-hide mx-auto mt-6 flex w-fit max-w-full gap-2 overflow-x-auto rounded-md bg-white p-2 dark:bg-gray-800">
        {siteData.projectCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`flex-shrink-0 whitespace-nowrap rounded-md px-3 py-2 text-sm transition-colors md:text-base ${
              active === c
                ? "bg-violet-600 text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="relative h-48 flex-shrink-0 overflow-hidden">
              <Image
                src="/images/placeholder-project.svg"
                alt={`${project.name} placeholder thumbnail`}
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex origin-left scale-x-0 items-center justify-center gap-3 bg-gray-900/70 transition-transform duration-200 group-hover:scale-x-100">
                <a
                  href={project.links.visit}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View details for ${project.name}`}
                  title={`View details for ${project.name}`}
                  className="rounded-lg bg-white p-3 text-black transition-transform hover:scale-110 hover:bg-black hover:text-white"
                >
                  <FiEye size={18} />
                </a>
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} source code`}
                  title={`View ${project.name} source code`}
                  className="rounded-lg bg-white p-3 text-black transition-transform hover:scale-110 hover:bg-black hover:text-white"
                >
                  <FiGithub size={18} />
                </a>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <span className="mb-3 w-fit rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
                {project.category}
              </span>
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <p className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                {project.techstack}
              </p>
              <p className="flex-1 text-sm text-gray-600 dark:text-gray-300">
                {project.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
