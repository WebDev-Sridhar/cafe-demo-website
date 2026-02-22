const variants = {
  primary:
    "bg-[#4a3728] text-white shadow-md shadow-[#4a3728]/30 hover:bg-[#3d2914] hover:shadow-lg hover:shadow-[#4a3728]/35 focus:ring-[#5c4033]",
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
