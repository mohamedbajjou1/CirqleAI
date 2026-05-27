"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import Button from "@/components/landing/Button";
import Container from "@/components/landing/Container";
import { fadeUp, stagger } from "@/lib/motion";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="section-fade py-24 sm:py-28">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] px-6 py-14 text-center shadow-soft-xl backdrop-blur-xl sm:px-10 lg:px-16"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint/70 to-transparent" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(125,211,252,0.14),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(247,185,85,0.11),transparent_58%)]" />
          <motion.p variants={fadeUp} className="text-sm font-medium uppercase tracking-[0.18em] text-aqua">
            Put AI to work this quarter
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-normal text-ink sm:text-5xl"
          >
            Build your first governed automation in days, then scale it safely.
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-ink-muted sm:text-lg">
            Bring one repetitive workflow. CirqleAI will help map it, launch it, and prove the impact with a live run history.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="mailto:hello@cirqle.ai" className="gap-2">
              Book a demo <CalendarDays size={17} />
            </Button>
            <Button href="#features" variant="secondary" className="gap-2">
              Explore features <ArrowRight size={17} />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
