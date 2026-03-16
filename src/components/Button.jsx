const variants = {
  primary:
    "bg-[#1a0f0a] text-[#f5ebe0] shadow-lg shadow-[#1a0f0a]/20 hover:bg-[#2c1810] hover:shadow-xl hover:shadow-[#1a0f0a]/30",
  secondary:
    "bg-[#c8956c] text-white shadow-md shadow-[#c8956c]/20 hover:bg-[#b8855c] hover:shadow-lg hover:shadow-[#c8956c]/30",
  outline:
    "border-2 border-[#1a0f0a] text-[#1a0f0a] hover:bg-[#1a0f0a] hover:text-[#f5ebe0]",
  ghost:
    "text-[#5c4a3a] hover:text-[#1a0f0a] hover:bg-[#f5ebe0]",
  "outline-light":
    "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50",
  gold:
    "bg-[linear-gradient(135deg,#c8956c,#d4a574,#c8956c)] text-white shadow-lg shadow-[#c8956c]/30 hover:shadow-xl hover:shadow-[#c8956c]/40",
};

export default function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide uppercase transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-[#c8956c]/50 focus:ring-offset-2 focus:ring-offset-[#faf6f1] disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98] ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
