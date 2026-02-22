import { Link } from "react-router-dom";
import { cafe } from "../data/cafe";
import {
  Instagram,
  Facebook,
  YoutubeIcon,
  MapPin,
  Phone,
  Mail,
  Youtube,
} from "lucide-react";

const quickLinks = [
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const policyLinks = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/refund-policy", label: "Refund Policy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#F9FAFB]">
      <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6">
        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand + Description */}
          <div>
            <h3 className="text-lg font-semibold text-[#111827]">
              {cafe.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              A cozy space for handcrafted coffee, fresh pastries, and
              meaningful conversations. Visit us and experience comfort in every
              cup.
            </p>

            {/* Social Icons */}
            <div className="mt-4 flex gap-4">
              <a
                href="#"
                className="text-neutral-500 transition hover:text-[#111827]"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-neutral-500 transition hover:text-[#111827]"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-neutral-500 transition hover:text-[#111827]"
                aria-label="Twitter"
              >
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#111827]">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-neutral-500 transition hover:text-[#111827] hover:underline underline-offset-4"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#111827]">
              Policies
            </h4>
            <ul className="mt-4 space-y-3">
              {policyLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-neutral-500 transition hover:text-[#111827] hover:underline underline-offset-4"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#111827]">
              Contact
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-neutral-500">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-neutral-400" />
                <span>{cafe.address}</span>
              </li>

              <li className="flex items-center gap-2">
                <Phone size={16} className="text-neutral-400" />
                <a href={`tel:${cafe.phone}`} className="hover:text-[#111827]">
                  {cafe.phone}
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={16} className="text-neutral-400" />
                <a
                  href={`mailto:${cafe.email}`}
                  className="hover:text-[#111827]"
                >
                  {cafe.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-neutral-200 pt-6 text-sm text-neutral-400 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {cafe.name}. All rights reserved.
          </p>
          <p>Designed for modern cafés & specialty coffee brands.</p>
        </div>
      </div>
    </footer>
  );
}
