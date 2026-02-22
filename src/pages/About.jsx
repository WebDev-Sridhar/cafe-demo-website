import { cafe } from "../data/cafe";

const FOUNDER_IMAGE =
  "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const INTERIOR_IMAGES = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
];

export default function About() {
  return (
    <div className="mx-auto max-w-300 px-4 md:px-6 animate-fade-in-up">
      {/* Hero / Page title */}
      <section className="pt-16 pb-14 md:pt-24 md:pb-20">
        <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
          About us
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-[#111827] md:text-4xl lg:text-5xl">
          More than a cafe
        </h1>
        <p className="mt-4 max-w-[65ch] text-lg leading-relaxed text-neutral-600">
          A place where slow mornings and honest coffee matter.
        </p>
      </section>

      {/* 1. Cafe Story */}
      <section className="border-t border-neutral-100 py-16 md:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
          Our story
        </p>
        <h2 className="mt-2 text-2xl font-semibold leading-tight text-[#111827] md:text-3xl">
          How we started
        </h2>
        <div className="mt-8 max-w-[65ch] space-y-6 text-lg leading-relaxed text-neutral-600">
          <p>
            {cafe.name} began on a quiet street in Nungambakkam with one idea:
            give Chennai a corner where time slows down. We wanted a space that
            felt like a second home—warm, unpretentious, and built around great
            coffee.
          </p>
          <p>
            Every cup we serve is brewed from beans we trust. Every bite is made
            fresh. We kept the menu simple so we could do it well, and we kept
            the doors open so you could stay as long as you need.
          </p>
        </div>
      </section>

      {/* 2. Founder Message */}
      <section className="border-t border-neutral-100 bg-[#F9FAFB] py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-5 md:gap-14">
          <div className="md:col-span-2">
            <div className="aspect-4/5 overflow-hidden rounded-2xl bg-neutral-200 shadow-sm">
              <img
                src={FOUNDER_IMAGE}
                alt="Founder"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3 md:flex md:flex-col md:justify-center">
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              A note from our founder
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-[#111827] md:text-3xl">
              Why we do this
            </h2>
            <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-neutral-600">
              I opened this cafe because I missed the kind of place where you
              could sit for hours without feeling rushed. Where the barista
              remembers your order and the light in the afternoon is just right.
              That’s what we’re building here—for you, and for everyone who
              walks in.
            </p>
            <p className="mt-4 font-semibold text-[#111827]">
              — The Brew Room family
            </p>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="border-t border-neutral-100 py-16 md:py-24 ">
        <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
          What we stand for
        </p>
        <h2 className="mt-2 text-2xl font-semibold leading-tight text-[#111827] md:text-3xl">
          Vision & mission
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-[#111827]">Vision</h3>
            <p className="mt-4 leading-relaxed text-neutral-600">
              To be the neighbourhood cafe that feels like home—where quality,
              warmth, and simplicity come first, and every visit leaves you a
              little lighter.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-[#111827]">Mission</h3>
            <p className="mt-4 leading-relaxed text-neutral-600">
              We source with care, brew with intention, and serve with heart.
              We’re here to make your everyday moments—whether work or rest—a
              bit better.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Interior photo layout */}
      <section className="border-t border-neutral-100 bg-[#F9FAFB] py-16 md:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
          The space
        </p>
        <h2 className="mt-2 text-2xl font-semibold leading-tight text-[#111827] md:text-3xl">
          Come see us
        </h2>
        <p className="mt-4 max-w-[65ch] text-lg leading-relaxed text-neutral-600">
          A calm, uncluttered space in the heart of Chennai. Natural light, good
          coffee, and a seat with your name on it.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {INTERIOR_IMAGES.map((src, i) => (
            <div
              key={i}
              className="aspect-4/3 overflow-hidden rounded-2xl bg-neutral-200 shadow-sm transition duration-300 hover:shadow-md"
            >
              <img
                src={src}
                alt="Cafe interior"
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="h-20 md:hidden" />
    </div>
  );
}
