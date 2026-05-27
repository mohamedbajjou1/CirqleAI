"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Container from "@/components/landing/Container";
import Button from "@/components/landing/Button";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Process", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 80],
    ["rgba(5,5,6,0)", "rgba(5,5,6,0.78)"]
  );
  const border = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"]
  );

  return (
    <motion.header
      style={{ backgroundColor: background, borderColor: border }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="CirqleAI home">
          <span className="grid size-9 place-items-center rounded-xl border border-white/[0.12] bg-white/[0.06] shadow-glow">
            <span className="size-3 rounded-full bg-gradient-to-br from-aqua via-mint to-gold" />
          </span>
          <span className="text-sm font-semibold tracking-wide text-ink">CirqleAI</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-muted transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#pricing" className="min-h-10 px-4">
            Get started
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-white/[0.12] bg-white/[0.06] text-ink transition hover:bg-white/[0.1] md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-carbon/[0.92] backdrop-blur-xl md:hidden"
          >
            <Container className="flex flex-col gap-3 py-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm font-medium text-ink-muted transition hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <Button href="#pricing" className="mt-1 w-full" onClick={() => setOpen(false)}>
                Start free
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
