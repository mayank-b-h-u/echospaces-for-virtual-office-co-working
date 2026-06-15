import {
  Mail,
  MessageCircle,
} from "lucide-react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export type SocialLink = {
  id: number;
  name: string;
  link: string;
  icon: keyof typeof socialIconMap;
  type?: "social" | "contact";
};

export const socialIconMap = {
  facebook: FiFacebook,
  instagram: FiInstagram,
  linkedin: FiLinkedin,
  whatsapp: MessageCircle,
  email: Mail,
} as const;

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "Facebook",
    link: "https://facebook.com/yourpage",
    icon: "facebook",
    type: "social",
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://instagram.com/yourhandle",
    icon: "instagram",
    type: "social",
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://linkedin.com/in/yourprofile",
    icon: "linkedin",
    type: "social",
  },
  {
    id: 4,
    name: "WhatsApp",
    link: "https://wa.me/918882702020",
    icon: "whatsapp",
    type: "contact",
  },
  {
    id: 5,
    name: "Email",
    link: "mailto:hi@instaspaces.in",
    icon: "email",
    type: "contact",
  },
];