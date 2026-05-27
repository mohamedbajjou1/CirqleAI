"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Sparkles } from "lucide-react";
import Button from "@/components/landing/Button";
import Container from "@/components/landing/Container";
import { fadeIn, fadeUp, stagger } from "@/lib/motion";

const metrics = [
  ["18 hrs", "saved per operator weekly"],
  ["94%", "automation accuracy after review"],
  ["42+", "native business integrations"]
];

const events = [
  { label: "Inbound lead captured", detail: "Source enriched from CRM", color: "bg-aqua" },
  { label: "Proposal drafted", detail: "Brand-safe copy generated", color: "bg-mint" },
  { label: "Approval requested", detail: "Finance policy matched", color: "bg-gold" }
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-32 sm:pb-28 sm:pt-40 lg:pb-32">
      <AnimatedBackdrop />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-4xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-ink-muted shadow-glow backdrop-blur"
          >
            <Sparkles size={14} className="text-aqua" />
            AI operations layer for high-output teams
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-5xl font-semibold tracking-normal text-ink sm:text-6xl lg:text-7xl"
          >
            Automate the busywork between every team and tool.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-ink-muted sm:text-xl"
          >
            CirqleAI turns repeatable operations into governed AI workflows that draft,
            route, verify, and update work across your stack.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="#pricing" className="gap-2">
              Start automating <ArrowRight size={17} />
            </Button>
            <Button href="#how-it-works" variant="secondary" className="gap-2">
              <Play size={16} /> See workflow
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-9 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 lg:max-w-xl"
            aria-label="CirqleAI impact metrics"
          >
            {metrics.map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur">
                <p className="text-2xl font-semibold text-ink">{value}</p>
                <p className="mt-1 text-sm leading-5 text-ink-muted">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <WorkflowPanel />
        </motion.div>
      </Container>
    </section>
  );
}

function AnimatedBackdrop() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-x-[-20%] top-[-24rem] h-[42rem] bg-[radial-gradient(ellipse_at_top,rgba(125,211,252,0.22),rgba(52,211,153,0.1)_38%,transparent_70%)] blur-3xl"
        animate={{ opacity: [0.48, 0.78, 0.48], scale: [1, 1.04, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-noise-grid bg-[size:56px_56px] opacity-[0.18]"
        animate={{ backgroundPosition: ["0px 0px", "56px 56px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,6,0)_0%,#050506_88%)]" />
    </div>
  );
}

function WorkflowPanel() {
  return (
    <div className="glass relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua/70 to-transparent" />
      <div className="rounded-[1.5rem] border border-white/10 bg-carbon-soft/[0.78] p-4 shadow-soft-xl sm:p-5">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="text-sm font-semibold text-ink">Revenue operations flow</p>
            <p className="mt-1 text-xs text-ink-muted">Live autonomous run</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-mint/25 bg-mint/10 px-3 py-1 text-xs font-medium text-mint">
            <span className="size-1.5 rounded-full bg-mint" />
            Active
          </div>
        </div>

        <div className="grid gap-4 py-5 md:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-3">
            {events.map((event, index) => (
              <motion.div
                key={event.label}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + index * 0.14, duration: 0.55 }}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
              >
                <div className="flex items-start gap-3">
                  <span className={`mt-1 size-2.5 rounded-full ${event.color}`} />
                  <div>
                    <p className="text-sm font-medium text-ink">{event.label}</p>
                    <p className="mt-1 text-xs leading-5 text-ink-muted">{event.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative min-h-[17rem] overflow-hidden rounded-3xl border border-white/10 bg-[#07090c] p-4">
            <motion.div
              className="absolute left-8 right-8 top-1/2 h-px bg-gradient-to-r from-aqua/0 via-aqua/70 to-mint/0"
              animate={{ opacity: [0.25, 0.9, 0.25] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative grid h-full grid-cols-3 items-center gap-3">
              {["Listen", "Reason", "Act"].map((label, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.16, duration: 0.5 }}
                  className="relative flex min-h-32 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-3"
                >
                  <span className="text-xs font-medium text-ink-muted">{label}</span>
                  <motion.span
                    className="mx-auto grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06]"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, delay: index * 0.45, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <CheckCircle2 size={20} className={index === 1 ? "text-gold" : "text-aqua"} />
                  </motion.span>
                  <span className="text-[11px] text-ink-muted">{index + 1}. verified</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-3">
          {["Policy match", "CRM updated", "Manager briefed"].map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-full bg-white/[0.045] px-3 py-2 text-xs text-ink-muted">
              <CheckCircle2 size={14} className="text-mint" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
