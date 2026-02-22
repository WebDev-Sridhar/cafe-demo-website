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
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
          <span className="text-lg font-semibold text-[#111827]">
            The Brew Room
          </span>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-6 py-8">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-neutral-700 hover:text-[#111827]"
              >
                {label}
              </Link>
            </li>
          ))}

        </ul>
      </div>
    </>
  )
}