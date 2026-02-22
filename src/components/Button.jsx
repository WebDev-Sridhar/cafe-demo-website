const variants = {
primary:
  "bg-[linear-gradient(52deg,rgba(171,124,80,1)_0%,rgba(115,70,10,1)_59%,rgba(107,50,6,1)_100%)] text-white shadow-md shadow-[#73460a]/30 hover:brightness-110 hover:shadow-lg hover:shadow-[#73460a]/40 focus:ring-[#ab7c50]",
  secondary:
    "border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50",
  outline:
    "border border-[#4a3728] text-[#4a3728] hover:bg-[#4a3728]/5 focus:ring-[#5c4033]",
  ghost:
    "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 focus:ring-neutral-400",
};

export default function Button({
  children,
  variant = "primary",
  type = "button",
  className='',
  ...props
}) {
  return (
    <button
      type={type}
      className={`md:inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-bold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 hover:scale-[1.03] active:scale-[0.99] ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
