import { siteData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white text-gray-500 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 sm:px-6 md:flex-row lg:px-8">
        <p className="text-sm">
          Made with <span className="animate-pulse">❤️</span> by{" "}
          <span className="text-violet-600 dark:text-violet-400">{siteData.main.name}</span>
        </p>
        <p className="text-xs">Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
