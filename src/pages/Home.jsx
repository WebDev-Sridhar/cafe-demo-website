import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import { useReservation } from '../context/ReservationContext'
import { cafe, featuredMenu, galleryImages, reviews } from '../data/cafe'
import { getWhatsAppUrl } from '../utils/whatsapp'
import { motion } from 'framer-motion'
import LuxuryText from "../components/LuxuryText"


// const HERO_BG = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80'
const HERO_BG = 'https://plus.unsplash.com/premium_photo-1661875793803-92f4c8b6ae84?q=80&w=1119&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

function StarRating({ value }) {
  return (
    <div className="flex gap-0.5" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="h-4 w-4 text-amber-400"
          fill={star <= value ? 'currentColor' : 'none'}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ))}
    </div>
  )
}

const WHATSAPP_ORDER = getWhatsAppUrl("Hi, I'd like to order from your menu. Can you share today's options?")

export default function Home() {
  const { openReservation } = useReservation()
  const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}


  
  return (
    <div className="animate-fade-in-up">

      {/* 1. Hero */}
      <section className="relative min-h-[85vh] md:min-h-[90vh]">
      <div
           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{ backgroundImage: `url(${HERO_BG})`}}
            /> 
        <div className="absolute inset-0 bg-[#0F172A]/75" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-300 flex-col justify-center px-4 py-20 md:min-h-[90vh] md:px-6 md:py-28">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#27b371]">
            Premium cafe · Chennai
          </p>
       <LuxuryText
  text={cafe.name}
  className="max-w-[20ch] text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-6xl"
/>
          <p className="mt-5 max-w-[35ch] text-lg leading-relaxed text-neutral-200 md:text-xl">
            {cafe.tagline}
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link to="/menu">
              <Button variant="primary" className="px-7 py-3.5 text-lg shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/25">
                View Menu
              </Button>
            </Link>
            <a href={WHATSAPP_ORDER} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="border-white/40 bg-white/10 px-7 py-3.5 text-lg text-white hover:bg-white/20">
                Order Now
              </Button>
            </a>
            {/* <Button
              type="button"
              variant="ghost"
              onClick={openReservation}
              className="px-7 py-3.5 text-lg text-white hover:bg-white/10 hover:text-white"
            >
              Reserve Table
            </Button> */}
            <a href="#location" className="hidden sm:inline-block">
              <Button variant="ghost" className="px-7 py-3.5 text-lg text-white hover:bg-white/10 hover:text-white">
                Visit Us
              </Button>
            </a>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-amber-400">★</span>
              <span className="font-semibold text-white">{cafe.rating}</span>
              <span className="text-sm text-neutral-300">({cafe.reviewCount} reviews)</span>
            </div>
            <div className="text-sm text-neutral-300">
              <span className="font-medium text-white">Open today</span> · {cafe.hours.weekdays}
            </div>
          </div>
        </div>
      </section>

      {/* 2. About preview */}
     <motion.section
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="border-t border-neutral-100 bg-[#F9FAFB] py-24 md:py-32"
>
        <div className="mx-auto max-w-300 px-4 md:px-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Our story
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#111827] md:text-4xl">
          Handcrafted Coffee. A Space That Feels Like Home.
          </h2>
          <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-neutral-600">
            We started in the heart of Nungambakkam to bring you single-origin beans, fresh bakes, and a place that feels like a second home. Every cup is brewed with care.
          </p>
          <div className="mt-8">
            <Link to="/about">
              <Button variant="outline">Read More</Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* 3. Featured menu */}
      <section className="py-24 md:py-32 bg-[#f3f2f0] animate-fade-in-up" >
        <div className="mx-auto max-w-300 px-4 md:px-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Menu
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#111827] md:text-4xl">
            Featured picks
          </h2>
        <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  }}
  className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-6"
>
            {featuredMenu.map((item) => (
              <motion.div variants={fadeInUp}>
              <Card key={item.id} className="overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-4/3 overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-300 ease-out hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6 text-center">
                  <h3 className="font-semibold text-[#111827]">{item.name}</h3>
                  <p className="mt-1 text-lg font-medium text-accent">{item.price}</p>
                </div>
              </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-14 text-center">
            <Link to="/menu">
              <Button variant="outline" className="shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/30">
              Explore Today’s Menu →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Gallery preview */}
      <section className="border-t border-neutral-100 bg-[#F9FAFB] py-24 md:py-32" >
        <div className="mx-auto max-w-300 px-4 md:px-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Gallery
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#111827] md:text-4xl">
            The vibe
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-3 md:gap-4">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden   rounded-2xl bg-neutral-200 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg aspect-4/3"
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover transition duration-300 ease-out hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/gallery">
              <Button variant="outline" className="transition-all duration-200 hover:-translate-y-0.5">
                See full gallery
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Reviews */}
      <section className="py-24 md:py-32 bg-[#f3f2f0]">
        <div className="mx-auto max-w-300 px-4 md:px-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Reviews
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#111827] md:text-4xl">
            What our guests say
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((review, i) => (
              <Card key={i} className={`bg-white rounded-2xl p-8 shadow-lg ${i % 2 === 0 ? "animate-fade-in-left" : "animate-fade-in-right"}`}>
                <StarRating value={review.rating} />
                <p className="mt-4 leading-relaxed text-neutral-600">{review.text}</p>
                <p className="mt-4 font-medium text-[#111827]">— {review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Location */}
      <section id="location" className="border-t border-neutral-100 bg-[#F9FAFB] py-24 md:py-32">
        <div className="mx-auto max-w-300 px-4 md:px-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Find us
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#111827] md:text-4xl">
            Location & hours
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-5">
            <div className="aspect-4/3 overflow-hidden rounded-2xl bg-neutral-300 md:col-span-3">
              <div className="flex h-full w-full items-center justify-center text-neutral-500">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.055707502336!2d80.23631157481418!3d12.981012989251653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267237170378f%3A0x168c99f897f4a9d9!2sThe%20Brew%20Room!5e0!3m2!1sen!2sin!4v1740225180528!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

              </div>
            </div>
            <div className="md:col-span-2">
              <p className="font-medium text-[#111827]">{cafe.address}</p>
              <a
                href={`tel:${cafe.phone.replace(/\s/g, '')}`}
                className="mt-4 inline-block font-medium text-accent hover:underline"
              >
                {cafe.phone}
              </a>
              <div className="mt-6 space-y-1 text-sm text-neutral-600">
                <p><span className="font-medium text-[#111827]">Mon – Fri</span> {cafe.hours.weekdays}</p>
                <p><span className="font-medium text-[#111827]">Sat – Sun</span> {cafe.hours.weekend}</p>
              </div>
              <a
                href="https://maps.app.goo.gl/eekFsyvvZNpFFMd79"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block"
              >
                <Button variant="primary" className="shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/30">
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for sticky bar on mobile */}
      <div className="h-20 md:hidden" />
      
    </div>
  )
}
