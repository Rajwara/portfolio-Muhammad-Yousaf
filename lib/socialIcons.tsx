import { ComponentType } from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export const socialIconMap: Record<string, ComponentType<{ className?: string }>> = {
  linkedin: FaLinkedin,
  email: FaEnvelope,
  phone: FaPhone,
  whatsapp: FaWhatsapp,
};
