export interface Skill {
  name: string;
  category: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  techstack: string;
  overview: string;
  links: {
    code: string;
    visit: string;
  };
}

export interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  duration: string;
  desc: string[];
}

export interface EducationItem {
  degree: string;
  institute: string;
  duration: string;
  desc: string[];
}

export interface SocialLink {
  name: string;
  icon: "linkedin" | "github" | "email" | "phone" | "whatsapp";
  link: string;
}

export const siteData = {
  main: {
    name: "Muhammad Yousaf",
    titles: ["AI Automation", "AI Agents & LLM Workflows", "Business Process Automation"],
    shortDesc:
      "I design and build AI-powered automation systems — connecting AI agents, CRMs, and business tools into reliable, end-to-end workflows that cut manual work and help teams scale.",
  },

  about: {
    title: "AI Automation Engineer",
    bio: "AI Automation Engineer with 5+ years of experience building AI-powered systems, intelligent workflows, and business process automations. I help businesses reduce repetitive manual work, streamline operations, and scale more efficiently by connecting AI with the tools and systems they already use. My work includes building AI agents, automating sales and lead processes, integrating CRMs and APIs, and creating end-to-end workflows using tools like n8n, Zapier, Make.com, GoHighLevel (GHL), and monday.com — turning complex, time-consuming processes into simple, reliable, and scalable automated systems.",
    resumeUrl: "/docs/resume-placeholder.pdf",
    location: "Dubai, United Arab Emirates",
  },

  skillCategories: [
    "AI & Automation",
    "Automation Platforms",
    "Integrations & APIs",
    "Development",
  ],

  skills: [
    { name: "AI Automation", category: "AI & Automation" },
    { name: "AI Agents", category: "AI & Automation" },
    { name: "LLM Integration", category: "AI & Automation" },
    { name: "Workflow Automation", category: "AI & Automation" },
    { name: "n8n", category: "Automation Platforms" },
    { name: "Zapier", category: "Automation Platforms" },
    { name: "Make.com", category: "Automation Platforms" },
    { name: "GoHighLevel (GHL)", category: "Automation Platforms" },
    { name: "monday.com", category: "Automation Platforms" },
    { name: "API Integration", category: "Integrations & APIs" },
    { name: "REST APIs", category: "Integrations & APIs" },
    { name: "Webhooks", category: "Integrations & APIs" },
    { name: "CRM Automation", category: "Integrations & APIs" },
    { name: "Python", category: "Development" },
    { name: "Django", category: "Development" },
    { name: "Flask", category: "Development" },
    { name: "SQL / Databases", category: "Development" },
  ] satisfies Skill[],

  projectCategories: [
    "All",
    "AI Agents",
    "CRM Automation",
    "Integrations",
    "Web Development",
  ],

  // Representative examples of the kind of systems Muhammad builds, based on his
  // work history below. Replace with named/real project details when available.
  projects: [
    {
      id: "ai-lead-qualification-agent",
      name: "AI Lead Qualification & Routing Agent",
      category: "AI Agents",
      techstack: "n8n, LLM Agents, CRM APIs",
      overview:
        "An AI-powered agent that automatically captures, enriches, qualifies, and routes inbound leads to the right sales rep, cutting manual follow-up time.",
      links: { code: "#", visit: "#" },
    },
    {
      id: "ghl-crm-automation-suite",
      name: "GoHighLevel + CRM Automation Suite",
      category: "CRM Automation",
      techstack: "GoHighLevel (GHL), monday.com, Webhooks",
      overview:
        "End-to-end automation connecting GoHighLevel and CRM systems for sales pipelines, automated task creation, and reporting.",
      links: { code: "#", visit: "#" },
    },
    {
      id: "multi-app-data-sync-pipeline",
      name: "Multi-App Data Sync Pipeline",
      category: "Integrations",
      techstack: "Zapier, Make.com, REST APIs",
      overview:
        "Automated data synchronization across multiple business applications, eliminating manual data entry between tools.",
      links: { code: "#", visit: "#" },
    },
    {
      id: "ai-workflow-platform",
      name: "AI Agent-Powered Workflow Platform",
      category: "AI Agents",
      techstack: "n8n, LLM Integration, Webhooks",
      overview:
        "LLM-powered workflows that handle repetitive business processes end-to-end, from trigger to notification.",
      links: { code: "#", visit: "#" },
    },
    {
      id: "fullstack-django-flask-app",
      name: "Full-Stack Web Application",
      category: "Web Development",
      techstack: "Python, Django, Flask, REST APIs",
      overview:
        "A full-stack web application built and maintained end to end, with integrated REST APIs connecting frontend and backend services.",
      links: { code: "#", visit: "#" },
    },
    {
      id: "business-process-automation-toolkit",
      name: "Business Process Automation Toolkit",
      category: "Integrations",
      techstack: "API Integration, Authentication, Databases",
      overview:
        "A toolkit that converts manual, repetitive business processes into automated workflows with authentication, authorization, and database-backed logic.",
      links: { code: "#", visit: "#" },
    },
  ] satisfies Project[],

  experience: [
    {
      company: "PENAXIS",
      position: "AI Automation Engineer",
      location: "Lahore, Pakistan",
      duration: "Apr 2025 – Present",
      desc: [
        "Design and build AI-powered automation workflows using n8n, Zapier, and Make.com.",
        "Develop multi-step business process automations across sales, marketing, operations, and CRM.",
        "Build AI Agents and LLM-powered workflows for repetitive business processes.",
        "Integrate GoHighLevel (GHL), monday.com, CRMs, databases, APIs, and third-party applications.",
        "Automate lead capture, enrichment, qualification, routing, and follow-up.",
        "Design scalable automation systems that improve operational efficiency and reduce repetitive work.",
      ],
    },
    {
      company: "Watermelon Ecosystem",
      position: "Associate Developer",
      location: "Dubai, United Arab Emirates",
      duration: "Nov 2023 – Mar 2024",
      desc: [
        "Worked as a Full-Stack Developer developing and maintaining web applications using Python, Django, Flask, and REST APIs.",
        "Developed frontend and backend features and integrated them to deliver complete application functionality.",
        "Developed and integrated RESTful APIs for communication between frontend applications and backend services.",
        "Worked independently on application modules from development and testing through deployment.",
      ],
    },
    {
      company: "Tower Tech",
      position: "Full Stack Developer",
      location: "Lahore, Pakistan",
      duration: "Nov 2021 – Sep 2023",
      desc: [
        "Collaborated with developers and project teams to translate requirements into scalable software solutions.",
        "Debugged and optimized full-stack applications to improve performance, reliability, and maintainability.",
        "Identified manual processes and converted them into automated workflows.",
        "Implemented business logic, authentication, authorization, database functionality, and API integrations.",
      ],
    },
  ] satisfies ExperienceItem[],

  education: [
    {
      degree: "Bachelor of Science, Electrical and Electronics Engineering",
      institute: "Riphah International University",
      duration: "Completed Sep 2019",
      desc: [],
    },
    {
      degree: "Associate's Degree",
      institute: "The London School of Economics and Political Science (LSE)",
      duration: "",
      desc: [],
    },
  ] satisfies EducationItem[],

  socials: [
    // TODO: replace with Muhammad's real LinkedIn profile URL (was truncated on the CV)
    { name: "LinkedIn", icon: "linkedin", link: "#" },
    // TODO: add GitHub profile URL if available
    { name: "GitHub", icon: "github", link: "#" },
    { name: "Email", icon: "email", link: "mailto:yusuf24work@gmail.com" },
    { name: "Phone", icon: "phone", link: "tel:+923174731492" },
    { name: "WhatsApp", icon: "whatsapp", link: "https://wa.me/923174731492" },
  ] satisfies SocialLink[],
};
