"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { siteData } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Placeholder submit handler — no backend wired up yet.
    // Connect this to a real email service (e.g. Formspree, Resend) before going live.
    setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl">Contact</h2>

      <div className="mt-12 flex flex-col items-center gap-10 lg:flex-row">
        <div className="relative hidden h-80 w-1/2 flex-shrink-0 overflow-hidden rounded-xl md:block">
          <Image
            src="/images/placeholder-contact.svg"
            alt="Contact illustration placeholder"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full flex-1">
          <h3 className="text-2xl">Get in touch</h3>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 md:text-base">
            Have a question or a project in mind? Send a message below, or reach out directly at{" "}
            <a
              href={`mailto:${siteData.socials.find((s) => s.icon === "email")?.link.replace("mailto:", "")}`}
              className="text-violet-600 hover:underline dark:text-violet-400"
            >
              {siteData.socials.find((s) => s.icon === "email")?.link.replace("mailto:", "")}
            </a>
            .
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              required
              name="name"
              placeholder="Name *"
              className="rounded-lg bg-gray-100 px-4 py-3 placeholder-gray-400 outline-none dark:bg-gray-800"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email *"
              className="rounded-lg bg-gray-100 px-4 py-3 placeholder-gray-400 outline-none dark:bg-gray-800"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="rounded-lg bg-gray-100 px-4 py-3 placeholder-gray-400 outline-none dark:bg-gray-800"
            />
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Message *"
              className="resize-none rounded-lg bg-gray-100 px-4 py-3 placeholder-gray-400 outline-none dark:bg-gray-800"
            />
            <button
              type="submit"
              disabled={status !== "idle"}
              className="self-end rounded-lg bg-violet-600 px-4 py-2 text-white transition-colors hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent!"}
            </button>
          </form>
          <p className="mt-2 text-xs text-gray-400">
            Note: this form is UI-only right now — wire it up to an email service (e.g. Formspree,
            Resend) before deploying live.
          </p>
        </div>
      </div>
    </section>
  );
}
