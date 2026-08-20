import { siteData } from "@/lib/data";
import { socialIconMap } from "@/lib/socialIcons";

export default function SocialSidebar() {
  return (
    <div className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
      {siteData.socials.map((s) => {
        const Icon = socialIconMap[s.icon];
        return (
          <a
            key={s.name}
            href={s.link}
            target={s.link.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={s.name}
            title={s.name}
            className="grid place-items-center rounded-full p-3 text-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-violet-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-violet-400"
          >
            {Icon && <Icon />}
          </a>
        );
      })}
    </div>
  );
}
