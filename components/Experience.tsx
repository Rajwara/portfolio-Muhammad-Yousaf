"use client";

import { useState } from "react";
import { FiBriefcase } from "react-icons/fi";
import { siteData } from "@/lib/data";

export default function Experience() {
  const [tab, setTab] = useState<"experience" | "education">("experience");

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl">Experience</h2>

      <div className="mx-auto mt-6 flex w-fit gap-2 rounded-md bg-white p-2 dark:bg-gray-800">
        <button
          type="button"
          onClick={() => setTab("experience")}
          className={`rounded-md px-4 py-2 transition-colors ${
            tab === "experience"
              ? "bg-violet-600 text-white"
              : "hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          Experience
        </button>
        <button
          type="button"
          onClick={() => setTab("education")}
          className={`rounded-md px-4 py-2 transition-colors ${
            tab === "education"
              ? "bg-violet-600 text-white"
              : "hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          Education
        </button>
      </div>

      {tab === "experience" ? (
        <div className="relative mx-auto mt-10 max-w-3xl border-l border-gray-200 pl-8 dark:border-gray-800">
          {siteData.experience.map((item, i) => (
            <div key={item.company + i} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full bg-violet-100 ring-4 ring-white dark:bg-violet-900 dark:ring-gray-900">
                <FiBriefcase className="text-violet-600 dark:text-violet-400" size={14} />
              </span>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-5">
                <h3 className="text-lg font-medium md:text-xl">{item.company}</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {item.position} | {item.duration}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{item.location}</p>
                {item.desc.length > 0 && (
                  <ul className="ml-4 mt-2 list-disc text-sm text-gray-500 dark:text-gray-400">
                    {item.desc.map((d, j) => (
                      <li key={j} className="mb-0.5">
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative mx-auto mt-10 max-w-3xl border-l border-gray-200 pl-8 dark:border-gray-800">
          {siteData.education.map((item, i) => (
            <div key={item.institute + i} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full bg-violet-100 ring-4 ring-white dark:bg-violet-900 dark:ring-gray-900">
                <FiBriefcase className="text-violet-600 dark:text-violet-400" size={14} />
              </span>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-5">
                <h3 className="text-lg font-medium md:text-xl">{item.degree}</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {item.institute}
                  {item.duration ? ` | ${item.duration}` : ""}
                </p>
                {item.desc.length > 0 && (
                  <ul className="ml-4 mt-2 list-disc text-sm text-gray-500 dark:text-gray-400">
                    {item.desc.map((d, j) => (
                      <li key={j} className="mb-0.5">
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
