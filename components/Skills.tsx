"use client";

import { useState } from "react";
import { siteData } from "@/lib/data";
import { categoryIconMap } from "@/lib/skillIcons";
import { FiCode } from "react-icons/fi";

const tabs = ["All", ...siteData.skillCategories];

export default function Skills() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? siteData.skills : siteData.skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl">Skills</h2>

      <div className="scroll-hide mx-auto mt-6 flex max-w-2xl gap-2 overflow-x-auto rounded-md bg-white p-2 dark:bg-gray-800">
        {tabs.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`w-full whitespace-nowrap rounded-md px-3 py-2 text-sm transition-colors md:text-base ${
              active === c
                ? "bg-violet-600 text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-8 grid grid-cols-2 place-items-center gap-8 sm:grid-cols-3 md:grid-cols-4">
        {filtered.map((skill) => {
          const Icon = categoryIconMap[skill.category] ?? FiCode;
          return (
            <div key={skill.name} className="flex flex-col items-center gap-2 text-center">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-gray-100 dark:bg-gray-800 md:h-24 md:w-24">
                <Icon className="h-9 w-9 text-violet-600 dark:text-violet-400 md:h-10 md:w-10" />
              </div>
              <p className="text-sm md:text-base">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
