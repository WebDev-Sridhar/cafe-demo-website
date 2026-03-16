export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1a0f0a]/8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
