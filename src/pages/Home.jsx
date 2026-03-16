import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { useReservation } from '../context/ReservationContext'
import { cafe, featuredMenu, reviews } from '../data/cafe'
import { getWhatsAppUrl } from '../utils/whatsapp'
import { motion } from 'framer-motion'
import LuxuryText from "../components/LuxuryText"
import FloatingBeans from "../components/FloatingBeans"
import SectionReveal from "../components/SectionReveal"
import TestimonialSlider from "../components/TestimonialSlider"

const HERO_IMG = 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80'
const ABOUT_IMG = 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&q=80'
const WHATSAPP_ORDER = getWhatsAppUrl("Hi, I'd like to order from your menu.")

export default function Home() {
  const { openReservation } = useReservation()

  return (
    <div>

      {/* ============================================================
          HERO — Full-screen cinematic
          ============================================================ */}
      <section className="relative min-h-screen overflow-hidden bg-[#1a0f0a]">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt=""
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f0a]/60 via-[#1a0f0a]/30 to-[#1a0f0a]" />
        </div>

        <FloatingBeans className="opacity-30" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1200px] flex-col items-center justify-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8956c]"
          >
            Est. Madurai &mdash; Premium Coffee Experience
          </motion.p>

          <LuxuryText
            text="Where Every Sip Tells a Story"
            className="max-w-[16ch] text-4xl font-light leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-[5.5rem]"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 max-w-[45ch] text-base leading-relaxed text-white/50 md:text-lg"
          >
            {cafe.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/menu">
              <Button variant="gold" className="px-10 py-4 text-sm">
                Explore Menu
              </Button>
            </Link>
            <Button variant="outline-light" onClick={openReservation} className="px-10 py-4 text-sm">
              Reserve a Table
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
              <div className="h-10 w-px bg-gradient-to-b from-white/30 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          PHILOSOPHY — Horizontal split with large image
          ============================================================ */}
      <section className="bg-[#faf6f1]">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <SectionReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl">
                  <img src={ABOUT_IMG} alt="Coffee shop interior" className="h-full w-full object-cover" />
                </div>
                {/* Floating stats card */}
                <div className="absolute -bottom-6 -right-4 md:-right-8 rounded-2xl bg-white p-6 shadow-2xl shadow-[#1a0f0a]/8">
                  <p className="text-3xl font-serif font-light text-[#1a0f0a]">{cafe.reviewCount}+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#8a7b6b]">Happy Reviews</p>
                  <div className="mt-2 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#c8956c] text-sm">&#9733;</span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.2}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8956c]">
                Our Philosophy
              </p>
              <h2 className="font-serif mt-4 text-3xl font-light leading-[1.15] text-[#1a0f0a] md:text-4xl lg:text-5xl">
                Crafted with<br />Intention
              </h2>
              <p className="mt-6 max-w-[45ch] text-base leading-relaxed text-[#8a7b6b]">
                We started in the heart of Avaniyapuram to bring you single-origin beans,
                fresh bakes, and a place that feels like a second home. Every cup is brewed
                with care — from bean selection to the final pour.
              </p>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <p className="text-2xl font-serif text-[#1a0f0a]">100%</p>
                  <p className="text-xs uppercase tracking-wider text-[#8a7b6b]">Arabica Beans</p>
                </div>
                <div className="h-10 w-px bg-[#d4c4b0]" />
                <div>
                  <p className="text-2xl font-serif text-[#1a0f0a]">Fresh</p>
                  <p className="text-xs uppercase tracking-wider text-[#8a7b6b]">Daily Roasted</p>
                </div>
                <div className="h-10 w-px bg-[#d4c4b0]" />
                <div>
                  <p className="text-2xl font-serif text-[#1a0f0a]">Local</p>
                  <p className="text-xs uppercase tracking-wider text-[#8a7b6b]">From Madurai</p>
                </div>
              </div>
              <div className="mt-10">
                <Link to="/about">
                  <Button variant="outline">Our Story</Button>
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURED MENU — Horizontal scroll cards
          ============================================================ */}
      <section className="bg-[#1a0f0a] py-24 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8956c]">
                  The Menu
                </p>
                <h2 className="font-serif mt-4 text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
                  Featured Picks
                </h2>
              </div>
              <Link to="/menu">
                <Button variant="outline-light" className="text-xs">
                  View Full Menu
                </Button>
              </Link>
            </div>
          </SectionReveal>
        </div>

        <div className="mt-14 px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="flex gap-5 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:max-w-[1200px] md:mx-auto"
          >
            {featuredMenu.map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="group min-w-[280px] snap-center md:min-w-0"
              >
                <Link to={`/menu/${item.id}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-[#2c1810]">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] via-[#1a0f0a]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-lg font-serif text-white">{item.name}</p>
                      <p className="mt-1 text-sm font-medium text-[#c8956c]">{item.price}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          EXPERIENCE — Full-width image band
          ============================================================ */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80"
          alt="Cafe experience"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a0f0a]/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <SectionReveal direction="scale">
            <div className="text-center px-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8956c]">
                The Experience
              </p>
              <h2 className="font-serif mt-4 text-3xl font-light text-white md:text-5xl lg:text-6xl max-w-[20ch] mx-auto leading-[1.1]">
                More Than Just Coffee
              </h2>
              <p className="mt-6 text-white/50 max-w-[40ch] mx-auto">
                A calm, uncluttered space where time slows down and every moment is yours.
              </p>
              <div className="mt-8">
                <Link to="/gallery">
                  <Button variant="outline-light">
                    View Gallery
                  </Button>
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS — Elegant slider
          ============================================================ */}
      <section className="bg-[#faf6f1] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionReveal>
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8956c]">
                Testimonials
              </p>
              <h2 className="font-serif mt-4 text-3xl font-light text-[#1a0f0a] md:text-4xl">
                Words from Our Guests
              </h2>
            </div>
          </SectionReveal>
          <div className="mt-14">
            <TestimonialSlider reviews={reviews} />
          </div>
        </div>
      </section>

      {/* ============================================================
          RESERVATION CTA — Dramatic dark section
          ============================================================ */}
      <section className="relative bg-[#1a0f0a] py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#c8956c]/30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#c8956c]/20" />
        </div>
        <SectionReveal direction="scale">
          <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8956c]">
              Reserve Your Spot
            </p>
            <h2 className="font-serif mt-6 text-4xl font-light text-white md:text-5xl lg:text-6xl leading-[1.1] max-w-[18ch] mx-auto">
              Your Table is Waiting
            </h2>
            <p className="mx-auto mt-6 max-w-[45ch] text-white/40 text-base">
              Experience the warmth of handcrafted coffee in a space designed for slow mornings and meaningful moments.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button variant="gold" onClick={openReservation} className="px-10 py-4">
                Reserve Now
              </Button>
              <a href={WHATSAPP_ORDER} target="_blank" rel="noopener noreferrer">
                <Button variant="outline-light" className="px-10 py-4">
                  Order via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ============================================================
          LOCATION — Clean minimal
          ============================================================ */}
      <section className="bg-[#faf6f1] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionReveal>
            <div className="text-center mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8956c]">
                Find Us
              </p>
              <h2 className="font-serif mt-4 text-3xl font-light text-[#1a0f0a] md:text-4xl">
                Visit Our Space
              </h2>
            </div>
          </SectionReveal>

          <div className="grid gap-10 md:grid-cols-5">
            <SectionReveal className="md:col-span-3">
              <div className="aspect-video overflow-hidden rounded-3xl bg-[#f5ebe0] shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.055707502336!2d80.23631157481418!3d12.981012989251653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267237170378f%3A0x168c99f897f4a9d9!2sThe%20Brew%20Room!5e0!3m2!1sen!2sin!4v1740225180528!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.2} className="md:col-span-2 flex flex-col justify-center">
              <h3 className="font-serif text-xl text-[#1a0f0a]">{cafe.name}</h3>
              <p className="mt-2 text-sm text-[#8a7b6b] leading-relaxed">{cafe.address}</p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5ebe0]">
                    <svg className="h-4 w-4 text-[#c8956c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#8a7b6b]">Weekdays</p>
                    <p className="text-sm font-medium text-[#1a0f0a]">{cafe.hours.weekdays}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5ebe0]">
                    <svg className="h-4 w-4 text-[#c8956c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#8a7b6b]">Weekends</p>
                    <p className="text-sm font-medium text-[#1a0f0a]">{cafe.hours.weekend}</p>
                  </div>
                </div>
              </div>

              <a
                href={`tel:${cafe.phone.replace(/\s/g, '')}`}
                className="mt-6 text-sm font-medium text-[#c8956c] hover:underline underline-offset-4"
              >
                {cafe.phone}
              </a>

              <div className="mt-8">
                <a
                  href="https://maps.app.goo.gl/eekFsyvvZNpFFMd79"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">Get Directions</Button>
                </a>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <div className="h-20 md:hidden" />
    </div>
  )
}
