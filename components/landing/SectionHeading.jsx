export default function SectionHeading({ eyebrow, title, copy, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-aqua">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-normal text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy ? <p className="text-pretty text-base leading-7 text-ink-muted sm:text-lg">{copy}</p> : null}
    </div>
  );
}
