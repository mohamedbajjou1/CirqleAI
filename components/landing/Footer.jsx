import { Github, Linkedin, Twitter } from "lucide-react";
import Container from "@/components/landing/Container";

const nav = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
];

const socials = [
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "GitHub", href: "https://github.com", icon: Github }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label="CirqleAI home">
              <span className="grid size-9 place-items-center rounded-xl border border-white/[0.12] bg-white/[0.06]">
                <span className="size-3 rounded-full bg-gradient-to-br from-aqua via-mint to-gold" />
              </span>
              <span className="text-sm font-semibold tracking-wide text-ink">CirqleAI</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-ink-muted">
              Secure AI automation for the operational work that slows modern teams down.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-muted">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-ink-muted transition hover:border-white/[0.18] hover:bg-white/[0.08] hover:text-ink"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 CirqleAI. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-ink">
              Privacy
            </a>
            <a href="#" className="transition hover:text-ink">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
