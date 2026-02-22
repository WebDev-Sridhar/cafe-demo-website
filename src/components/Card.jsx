export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-lg  p-2 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:p-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
