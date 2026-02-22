import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import Button from "../components/Button"
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

  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 z-40 flex min-h-[72px] items-center border-b border-neutral-200/80 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 md:px-6">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-4xl font-semibold tracking-tight text-[#111827] transition-opacity hover:opacity-90"
          >
            BR
          </Link>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-[15px] font-medium text-neutral-600 transition-colors duration-200 hover:text-[#111827] hover:underline underline-offset-4"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            
            {/* Desktop Reserve Button */}
            <Button
              type="button"
              variant="primary"
              onClick={openReservation}
              className="hidden"
              aria-label="Reserve a table"
            >
              Reserve
            </Button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-neutral-700"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>

          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
 <div
  className={`fixed top-0 right-0 z-50 h-full w-80 bg-gradient-to-b from-[#ffffff] to-[#f8f6f3] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Header */}
  <div className="flex items-center justify-between px-8 py-6 border-b border-neutral-200">
    <span className="text-4xl font-semibold text-[#111827] tracking-wide transition-opacity">
      BR
    </span>

    <button
      onClick={() => setIsOpen(false)}
      aria-label="Close menu"
      className="p-2 rounded-full hover:bg-neutral-200 transition"
    >
      <X size={22} className="text-neutral-700" />
    </button>
  </div>

  {/* Navigation Links */}
  <ul className="flex flex-col gap-8 px-8 py-12">
    {navLinks.map(({ to, label }) => (
      <li key={to}>
        <Link
          to={to}
          onClick={() => setIsOpen(false)}
          className="group relative text-lg font-medium text-neutral-700 transition-all duration-300"
        >
          <span className="relative z-10 group-hover:text-[#4a3728]">
            {label}
          </span>

          {/* Elegant underline animation */}
          <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#4a3728] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
    ))}
  </ul>

  {/* Bottom subtle branding */}

  <div className="absolute bottom-20 left-8 text-sm text-neutral-400">
    <hr className="border-t border-neutral-200 mx-8 my-4" />
    Crafted with warmth ☕
  </div>
</div>
    </>
  )
}