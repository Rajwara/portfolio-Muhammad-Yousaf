import { ComponentType } from "react";
import { FiCpu, FiZap, FiLink, FiCode } from "react-icons/fi";

// One icon per skill category (rather than per individual tool) since several
// automation platforms in the skills list (n8n, GoHighLevel, monday.com, etc.)
// don't have reliable brand icons available.
export const categoryIconMap: Record<string, ComponentType<{ className?: string }>> = {
  "AI & Automation": FiCpu,
  "Automation Platforms": FiZap,
  "Integrations & APIs": FiLink,
  Development: FiCode,
};
