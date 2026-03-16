import { useState } from 'react'
import Button from '../components/Button'
import { useReservation } from '../context/ReservationContext'
import { cafe } from '../data/cafe'
import SectionReveal from '../components/SectionReveal'

const WHATSAPP_URL = `https://wa.me/${cafe.whatsapp.replace(/\+/g, '')}`
const PHONE_URL = `tel:${cafe.phone.replace(/\s/g, '')}`
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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
    else if (!EMAIL_REGEX.test(fields.email.trim())) next.email = 'Enter a valid email'
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

  const inputClass = (field) =>
    `mt-1.5 h-12 w-full rounded-xl border bg-transparent px-4 text-[#1a0f0a] transition-all duration-300 placeholder:text-[#d4c4b0] focus:outline-none focus:ring-2 focus:ring-[#c8956c]/30 focus:border-[#c8956c] ${
      touched[field] && errors[field] ? 'border-red-400' : 'border-[#d4c4b0]'
    }`

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8956c]">
            Contact
          </p>
          <h1 className="font-serif mt-4 text-4xl font-light text-[#1a0f0a] md:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-[50ch] text-base text-[#8a7b6b]">
            Reserve a table, ask a question, or just say hello.
          </p>
        </SectionReveal>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="primary" onClick={openReservation}>Reserve a Table</Button>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">WhatsApp Us</Button>
          </a>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left — Info */}
          <SectionReveal className="space-y-10 lg:col-span-2">
            <div className="overflow-hidden rounded-2xl aspect-video bg-[#f5ebe0]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.055707502336!2d80.23631157481418!3d12.981012989251653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267237170378f%3A0x168c99f897f4a9d9!2sThe%20Brew%20Room!5e0!3m2!1sen!2sin!4v1740225180528!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="space-y-6">
              {[
                { label: "Address", value: cafe.address },
                { label: "Phone", value: cafe.phone, href: PHONE_URL },
                { label: "Email", value: cafe.email, href: `mailto:${cafe.email}` },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c8956c]">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block text-sm text-[#1a0f0a] hover:text-[#c8956c] transition-colors">{item.value}</a>
                  ) : (
                    <p className="mt-1 text-sm text-[#1a0f0a]">{item.value}</p>
                  )}
                </div>
              ))}

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c8956c]">Hours</p>
                <p className="mt-1 text-sm text-[#8a7b6b]">Mon &ndash; Fri: {cafe.hours.weekdays}</p>
                <p className="text-sm text-[#8a7b6b]">Sat &ndash; Sun: {cafe.hours.weekend}</p>
              </div>
            </div>

            <a href="https://maps.app.goo.gl/eekFsyvvZNpFFMd79" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Get Directions</Button>
            </a>
          </SectionReveal>

          {/* Right — Form */}
          <SectionReveal direction="right" delay={0.2} className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-8 shadow-lg shadow-[#1a0f0a]/5 md:p-10">
              <h2 className="font-serif text-2xl font-light text-[#1a0f0a]">
                Send a Message
              </h2>
              <p className="mt-2 text-sm text-[#8a7b6b]">We&rsquo;ll get back to you within a day.</p>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-[#c8956c]/10 p-8 text-center">
                  <p className="font-serif text-xl text-[#1a0f0a]">Message Sent</p>
                  <p className="mt-2 text-sm text-[#8a7b6b]">Thanks for reaching out. We&rsquo;ll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1a0f0a]">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input id="contact-name" name="name" type="text" value={form.name} onChange={handleChange} onBlur={handleBlur}
                      className={inputClass('name')} placeholder="Your name" autoComplete="name" />
                    {touched.name && errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1a0f0a]">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur}
                      className={inputClass('email')} placeholder="you@example.com" autoComplete="email" />
                    {touched.email && errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1a0f0a]">Phone</label>
                    <input id="contact-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} onBlur={handleBlur}
                      className="mt-1.5 h-12 w-full rounded-xl border border-[#d4c4b0] bg-transparent px-4 text-[#1a0f0a] transition-all duration-300 placeholder:text-[#d4c4b0] focus:outline-none focus:ring-2 focus:ring-[#c8956c]/30 focus:border-[#c8956c]"
                      placeholder="+91 98765 43210" autoComplete="tel" />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1a0f0a]">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} onBlur={handleBlur}
                      rows={4}
                      className={`mt-1.5 w-full resize-y rounded-xl border bg-transparent px-4 py-3 text-[#1a0f0a] transition-all duration-300 placeholder:text-[#d4c4b0] focus:outline-none focus:ring-2 focus:ring-[#c8956c]/30 focus:border-[#c8956c] ${
                        touched.message && errors.message ? 'border-red-400' : 'border-[#d4c4b0]'
                      }`}
                      placeholder="How can we help?" autoComplete="off" />
                    {touched.message && errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                  </div>
                  <Button type="submit" variant="primary">Send Message</Button>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </div>

      <div className="h-20 md:hidden" />
    </div>
  )
}
