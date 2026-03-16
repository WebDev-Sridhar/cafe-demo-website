import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useReservation } from "../context/ReservationContext"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
]

export default function Navbar() {
  const { openReservation } = useReservation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out ${
          scrolled
            ? "bg-[#faf6f1]/90 backdrop-blur-2xl shadow-sm shadow-[#1a0f0a]/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-full bg-[#1a0f0a] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <span className="font-serif text-sm font-bold text-[#c8956c]">S</span>
            </div>
            <span className="font-serif text-lg font-semibold text-[#1a0f0a] tracking-tight hidden sm:block">
              Star Coffee
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`relative text-[13px] font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                    location.pathname === to
                      ? "text-[#1a0f0a]"
                      : "text-[#8a7b6b] hover:text-[#1a0f0a]"
                  }`}
                >
                  {label}
                  {location.pathname === to && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-[#c8956c]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={openReservation}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#1a0f0a] px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#f5ebe0] transition-all duration-500 hover:bg-[#2c1810] hover:shadow-lg hover:shadow-[#1a0f0a]/20"
            >
              Reserve
            </button>

            <button
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-[#1a0f0a]/5 text-[#1a0f0a] transition hover:bg-[#1a0f0a]/10"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#1a0f0a]/40 backdrop-blur-sm transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Fullscreen mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#1a0f0a] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col px-8 py-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="font-serif text-2xl font-semibold text-[#f5ebe0]">
              Star Coffee
            </span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#f5ebe0] transition hover:bg-white/20"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Links */}
          <ul className="mt-16 flex flex-col gap-1">
            {navLinks.map(({ to, label }, i) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between py-4 border-b border-white/10"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <span className="font-serif text-3xl font-light text-[#f5ebe0] transition-colors duration-300 group-hover:text-[#c8956c]">
                    {label}
                  </span>
                  <svg className="h-5 w-5 text-[#8a7b6b] transition-all duration-300 group-hover:text-[#c8956c] group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          {/* Bottom */}
          <div className="mt-auto pb-8">
            <button
              onClick={() => { openReservation(); setIsOpen(false); }}
              className="w-full rounded-full bg-[#c8956c] py-4 text-center text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-[#b8855c]"
            >
              Reserve a Table
            </button>
            <p className="mt-6 text-center text-xs text-[#8a7b6b] tracking-wider">
              Premium Coffee Experience
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
