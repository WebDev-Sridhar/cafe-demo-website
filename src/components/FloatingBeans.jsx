const beans = [
  { top: "6%", left: "10%", size: 32, opacity: 0.06, rotate: -30, anim: "animate-float" },
  { top: "15%", left: "82%", size: 26, opacity: 0.05, rotate: 45, anim: "animate-float-delayed" },
  { top: "45%", left: "5%", size: 20, opacity: 0.04, rotate: -15, anim: "animate-float-slow" },
  { top: "65%", left: "88%", size: 28, opacity: 0.06, rotate: 60, anim: "animate-float" },
  { top: "30%", left: "95%", size: 18, opacity: 0.04, rotate: -45, anim: "animate-float-delayed" },
  { top: "80%", left: "15%", size: 24, opacity: 0.05, rotate: 30, anim: "animate-float-slow" },
  { top: "50%", left: "50%", size: 14, opacity: 0.03, rotate: 20, anim: "animate-float-delayed" },
  { top: "10%", left: "45%", size: 16, opacity: 0.03, rotate: -60, anim: "animate-float-slow" },
];

function BeanSVG({ size, opacity, rotate }) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 24 34"
      fill="none"
      style={{ opacity, transform: `rotate(${rotate}deg)` }}
    >
      <ellipse cx="12" cy="17" rx="9" ry="14" fill="#1a0f0a" />
      <path
        d="M10 5C9 12 15 22 14 29"
        stroke="#faf6f1"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}

export default function FloatingBeans({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {beans.map((bean, i) => (
        <div
          key={i}
          className={`absolute ${bean.anim}`}
          style={{ top: bean.top, left: bean.left }}
        >
          <BeanSVG size={bean.size} opacity={bean.opacity} rotate={bean.rotate} />
        </div>
      ))}
    </div>
  );
}
