import { cafe } from "../data/cafe";
import SectionReveal from "../components/SectionReveal";
import { motion } from "framer-motion";

const FOUNDER_IMAGE =
  "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=687&auto=format&fit=crop";
const INTERIOR_IMAGES = [
  "https://images.unsplash.com/photo-1702677413541-ffc41d8c08b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-[#1a0f0a]">
        <img
          // src={INTERIOR_IMAGES[0]}
          src="https://images.unsplash.com/photo-1569251081532-cfb708f5f828?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] via-transparent to-[#1a0f0a]/60" />
        <div className="relative z-10 flex h-full items-end pb-16 md:pb-20">
          <div className="mx-auto max-w-[1200px] px-6 w-full">
            <SectionReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8956c]">
                About Us
              </p>
              <h1 className="font-serif mt-4 text-4xl font-light text-white md:text-5xl lg:text-6xl">
                More Than a Cafe
              </h1>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#faf6f1] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <SectionReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8956c]">
                Our Story
              </p>
              <h2 className="font-serif mt-4 text-3xl font-light text-[#1a0f0a] md:text-4xl leading-[1.2]">
                How It All Started
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-[#8a7b6b]">
                <p>
                  {cafe.name} began on a quiet street in Avaniyapuram with one idea:
                  give Madurai a corner where time slows down.
                </p>
                <p>
                  Every cup we serve is brewed from beans we trust. Every bite is made
                  fresh. We kept the menu simple so we could do it well.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                {INTERIOR_IMAGES.slice(0, 3).map((src, i) => (
                  <div
                    key={i}
                    className={`overflow-hidden rounded-2xl ${i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}
                  >
                    <img src={src} alt="Interior" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-[#1a0f0a] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-12 md:grid-cols-5 md:gap-16 items-center">
            <SectionReveal className="md:col-span-2">
              <div className="aspect-[3/4] overflow-hidden rounded-3xl">
                <img src={FOUNDER_IMAGE} alt="Founder" className="h-full w-full object-cover" />
              </div>
            </SectionReveal>
            <SectionReveal direction="right" delay={0.2} className="md:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8956c]">
                A Note From Our Founder
              </p>
              <h2 className="font-serif mt-4 text-3xl font-light text-white md:text-4xl leading-[1.2]">
                Why We Do This
              </h2>
              <p className="mt-8 max-w-[50ch] text-base leading-relaxed text-white/50">
                I opened this cafe because I missed the kind of place where you
                could sit for hours without feeling rushed. Where the barista
                remembers your order and the light in the afternoon is just right.
                That&rsquo;s what we&rsquo;re building here &mdash; for you, and for everyone who
                walks in.
              </p>
              <p className="mt-6 text-sm font-semibold text-[#c8956c] uppercase tracking-wider">
                &mdash; The {cafe.name} Family
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#faf6f1] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionReveal>
            <div className="text-center mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8956c]">
                What We Stand For
              </p>
              <h2 className="font-serif mt-4 text-3xl font-light text-[#1a0f0a] md:text-4xl">
                Vision & Mission
              </h2>
            </div>
          </SectionReveal>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              {
                title: "Vision",
                text: "To be the neighbourhood cafe that feels like home — where quality, warmth, and simplicity come first, and every visit leaves you a little lighter."
              },
              {
                title: "Mission",
                text: "We source with care, brew with intention, and serve with heart. We're here to make your everyday moments — whether work or rest — a bit better."
              }
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.15}>
                <div className="rounded-3xl bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1a0f0a]/5">
                  <h3 className="font-serif text-2xl font-light text-[#1a0f0a]">{item.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-[#8a7b6b]">{item.text}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Gallery */}
      <section className="bg-[#f5ebe0] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionReveal>
            <div className="text-center mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8956c]">
                The Space
              </p>
              <h2 className="font-serif mt-4 text-3xl font-light text-[#1a0f0a] md:text-4xl">
                Come See Us
              </h2>
            </div>
          </SectionReveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4"
          >
            {INTERIOR_IMAGES.map((src, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <img src={src} alt="Interior" className="h-full w-full object-cover transition duration-700 hover:scale-110" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="h-20 md:hidden" />
    </div>
  );
}
