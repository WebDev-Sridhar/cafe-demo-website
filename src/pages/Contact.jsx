import { useState } from 'react'
import Button from '../components/Button'
import { useReservation } from '../context/ReservationContext'
import { cafe } from '../data/cafe'

const WHATSAPP_URL = `https://wa.me/${cafe.whatsapp.replace(/\+/g, '')}`
const PHONE_URL = `tel:${cafe.phone.replace(/\s/g, '')}`

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 transition-colors hover:bg-[#111827] hover:text-white"
      aria-label={label}
    >
      {children}
    </a>
  )
}

export default function Contact() {
  const { openReservation } = useReservation()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (fields = form) => {
    const next = {}
    if (!fields.name?.trim()) next.name = 'Name is required'
    if (!fields.email?.trim()) next.email = 'Email is required'
    else if (!EMAIL_REGEX.test(fields.email.trim())) next.email = 'Enter a valid email address'
    if (!fields.message?.trim()) next.message = 'Message is required'
    return next
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const nextErrors = validate({ ...form, [name]: e.target.value })
    setErrors((prev) => ({ ...prev, [name]: nextErrors[name] ?? null }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, phone: true, message: true })
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    setTouched({})
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-6 md:py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
        Contact
      </p>
      <h1 className="mt-2 text-3xl font-bold leading-tight text-[#111827] md:text-4xl lg:text-5xl">
        Get in touch
      </h1>
      <p className="mt-4 max-w-[65ch] text-lg leading-relaxed text-neutral-600">
        Reserve a table, ask a question, or just say hi. We’re here to help.
      </p>
      <div className="mt-6">
        <Button
          type="button"
          variant="primary"
          onClick={openReservation}
          className="shadow-md shadow-[#4a3728]/25 hover:shadow-lg hover:shadow-[#4a3728]/30"
        >
          Reserve a table
        </Button>
      </div>

      {/* Map + contact info + form */}
      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-5 lg:gap-14">
        {/* Left: Map + details */}
        <div className="space-y-8 lg:col-span-2">
          <div
            id="reserve"
            className="aspect-4/3 overflow-hidden rounded-2xl bg-neutral-200 md:aspect-video"
          >
            <div className="flex h-full w-full items-center justify-center text-neutral-500">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.055707502336!2d80.23631157481418!3d12.981012989251653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267237170378f%3A0x168c99f897f4a9d9!2sThe%20Brew%20Room!5e0!3m2!1sen!2sin!4v1740225180528!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
              Visit & call
            </p>
            <p className="mt-3 font-medium text-[#111827]">{cafe.address}</p>
            <a
              href={PHONE_URL}
              className="mt-2 block font-medium text-[#5c4033] hover:underline"
            >
              {cafe.phone}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block font-medium text-[#5c4033] hover:underline"
            >
              WhatsApp chat
            </a>
            <a
              href={`mailto:${cafe.email}`}
              className="mt-1 block font-medium text-[#5c4033] hover:underline"
            >
              {cafe.email}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
              Opening hours
            </p>
            <div className="mt-3 space-y-1 text-neutral-600">
              <p><span className="font-medium text-[#111827]">Mon – Fri</span> {cafe.hours.weekdays}</p>
              <p><span className="font-medium text-[#111827]">Sat – Sun</span> {cafe.hours.weekend}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
              Follow us
            </p>
            <div className="mt-3 flex gap-3">
              <SocialIcon href={cafe.social.instagram} label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm0 5.25a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM12 7.875a3.375 3.375 0 110 6.75 3.375 3.375 0 010-6.75z" clipRule="evenodd" />
                </svg>
              </SocialIcon>
              <SocialIcon href={cafe.social.facebook} label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </SocialIcon>
              <SocialIcon href={cafe.social.twitter} label="X (Twitter)">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="primary">Get Directions</Button>
          </a>
        </div>

        {/* Right: Contact form */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold text-[#111827] md:text-2xl">
              Send a message
            </h2>
            <p className="mt-2 text-neutral-600">
              We’ll get back to you within a day.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl bg-[#4a3728]/10 p-6 text-accent-hover">
                <p className="font-semibold">Message sent.</p>
                <p className="mt-1 text-sm">Thanks for reaching out. We’ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-[#111827]">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-1.5 h-12 w-full rounded-xl border px-4 text-[#111827] transition placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#5c4033] focus:ring-offset-2 ${
                      touched.name && errors.name
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-400'
                        : 'border-neutral-300'
                    }`}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {touched.name && errors.name && (
                    <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-[#111827]">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-1.5 h-12 w-full rounded-xl border px-4 text-[#111827] transition placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#5c4033] focus:ring-offset-2 ${
                      touched.email && errors.email
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-400'
                        : 'border-neutral-300'
                    }`}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-[#111827]">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mt-1.5 h-12 w-full rounded-xl border border-neutral-300 px-4 text-[#111827] transition placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#5c4033] focus:ring-offset-2"
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-[#111827]">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={4}
                    className={`mt-1.5 w-full resize-y rounded-xl border px-4 py-3 text-[#111827] transition placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#5c4033] focus:ring-offset-2 ${
                      touched.message && errors.message
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-400'
                        : 'border-neutral-300'
                    }`}
                    placeholder="How can we help?"
                    autoComplete="off"
                  />
                  {touched.message && errors.message && (
                    <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" variant="primary">
                  Send message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="h-20 md:hidden" />
    </div>
  )
}
