import { ComponentType } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export const socialIconMap: Record<string, ComponentType<{ className?: string }>> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: FaEnvelope,
  phone: FaPhone,
  whatsapp: FaWhatsapp,
};
