export default function Button({
  children,
  bgColor = "bg-primary",
  textColor = "text-white",
  size = "md",
  type = "button",
  className = "",
  onClick,
}) {
  const sizes = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${bgColor} ${textColor} ${sizes[size]} rounded-xl font-bold text-sm cursor-pointer transition-all duration-200 hover:opacity-90 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}