import { Link } from "react-router-dom";
import { cafe } from "../data/cafe";
import { Instagram, Facebook, YoutubeIcon, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#1a0f0a] overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c8956c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        {/* Top section — brand + newsletter feel */}
        <div className="border-b border-white/8 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-[#c8956c] flex items-center justify-center">
                  <span className="font-serif text-sm font-bold text-white">S</span>
                </div>
                <span className="font-serif text-xl font-semibold text-white">Star Coffee House</span>
              </div>
              <p className="max-w-[40ch] text-sm leading-relaxed text-[#8a7b6b]">
                A quiet corner in Madurai where every cup is brewed with intention and every moment is yours to keep.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:justify-end">
              {[
                { icon: Instagram, label: "Instagram", href: cafe.social.instagram },
                { icon: Facebook, label: "Facebook", href: cafe.social.facebook },
                { icon: YoutubeIcon, label: "YouTube", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#8a7b6b] transition-all duration-300 hover:border-[#c8956c]/50 hover:text-[#c8956c] hover:bg-[#c8956c]/5"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid gap-10 py-14 md:grid-cols-4">
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c8956c]">Navigate</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-[#8a7b6b] transition-colors duration-300 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c8956c]">Visit</h4>
            <div className="mt-5 space-y-3">
              <p className="flex items-start gap-2 text-sm text-[#8a7b6b]">
                <MapPin size={14} className="mt-1 shrink-0 text-[#5c4a3a]" />
                {cafe.address}
              </p>
              <p className="text-sm text-[#8a7b6b]">Mon &ndash; Fri: {cafe.hours.weekdays}</p>
              <p className="text-sm text-[#8a7b6b]">Sat &ndash; Sun: {cafe.hours.weekend}</p>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c8956c]">Contact</h4>
            <div className="mt-5 space-y-3">
              <a href={`tel:${cafe.phone}`} className="flex items-center gap-2 text-sm text-[#8a7b6b] transition hover:text-white">
                <Phone size={14} className="text-[#5c4a3a]" />{cafe.phone}
              </a>
              <a href={`mailto:${cafe.email}`} className="flex items-center gap-2 text-sm text-[#8a7b6b] transition hover:text-white">
                <Mail size={14} className="text-[#5c4a3a]" />{cafe.email}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c8956c]">Hours</h4>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#5c4a3a]">Weekdays</p>
                <p className="mt-1 text-sm text-[#8a7b6b]">{cafe.hours.weekdays}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#5c4a3a]">Weekends</p>
                <p className="mt-1 text-sm text-[#8a7b6b]">{cafe.hours.weekend}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 py-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#5c4a3a] tracking-wider">
            &copy; {new Date().getFullYear()} {cafe.name}
          </p>
          <p className="text-xs text-[#5c4a3a] tracking-wider">
            Crafted with care in Madurai
          </p>
        </div>
      </div>
    </footer>
  );
}
