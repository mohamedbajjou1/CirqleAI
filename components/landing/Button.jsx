export default function Button({ children, href = "#", variant = "primary", className = "", ...props }) {
  const styles = {
    primary:
      "border-white/[0.15] bg-ink text-carbon shadow-[0_18px_60px_rgba(247,248,251,0.18)] hover:bg-white",
    secondary:
      "border-white/[0.12] bg-white/[0.06] text-ink hover:border-white/20 hover:bg-white/[0.1]"
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-5 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-aqua/60 focus:ring-offset-2 focus:ring-offset-carbon ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
