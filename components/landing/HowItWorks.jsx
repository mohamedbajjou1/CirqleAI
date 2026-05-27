"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileSearch, Rocket, SlidersHorizontal } from "lucide-react";
import Container from "@/components/landing/Container";
import SectionHeading from "@/components/landing/SectionHeading";
import { fadeUp, stagger } from "@/lib/motion";

const steps = [
  {
    title: "Map the process",
    copy: "Connect the tools, define the outcome, and let CirqleAI discover handoffs, policies, and edge cases.",
    icon: FileSearch
  },
  {
    title: "Deploy controlled agents",
    copy: "Launch AI workers with explicit permissions, human checkpoints, and run-level evidence for every action.",
    icon: Rocket
  },
  {
    title: "Improve from every run",
    copy: "Review exceptions, tune policies, and expand the automation with measured gains after each cycle.",
    icon: SlidersHorizontal
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-fade py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeading
            align="left"
            eyebrow="How it works"
            title="Launch governed automations without rebuilding your stack."
            copy="CirqleAI wraps existing systems in a predictable operating model, so teams can automate quickly while keeping control."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            <div className="absolute left-6 top-10 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-aqua via-mint to-gold md:block" />
            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.article
                    key={step.title}
                    variants={fadeUp}
                    className="relative rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl md:ml-16"
                  >
                    <div className="absolute -left-[4.65rem] top-6 hidden size-12 place-items-center rounded-2xl border border-white/[0.12] bg-carbon-soft shadow-glow md:grid">
                      <Icon size={20} className={index === 2 ? "text-gold" : index === 1 ? "text-mint" : "text-aqua"} />
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-medium text-aqua">Step {index + 1}</p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-normal text-ink">{step.title}</h3>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-muted">{step.copy}</p>
                      </div>
                      {index < steps.length - 1 ? (
                        <ArrowRight className="hidden shrink-0 text-white/25 lg:block" size={22} />
                      ) : null}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
