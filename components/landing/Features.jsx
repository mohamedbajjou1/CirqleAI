"use client";

import { motion } from "framer-motion";
import {
  Bot,
  DatabaseZap,
  Gauge,
  MessagesSquare,
  ShieldCheck,
  Workflow
} from "lucide-react";
import Container from "@/components/landing/Container";
import SectionHeading from "@/components/landing/SectionHeading";
import { fadeUp, stagger } from "@/lib/motion";

const features = [
  {
    title: "Autonomous workflow builder",
    copy: "Describe the outcome and CirqleAI assembles triggers, branches, retries, and approval gates.",
    icon: Workflow,
    accent: "text-aqua"
  },
  {
    title: "Context-aware agents",
    copy: "Agents read account history, documents, and internal notes before taking action.",
    icon: Bot,
    accent: "text-mint"
  },
  {
    title: "Human approval rails",
    copy: "Route sensitive decisions to the right owner with reason summaries and audit trails.",
    icon: ShieldCheck,
    accent: "text-gold"
  },
  {
    title: "Live process observability",
    copy: "Track every run, exception, latency spike, and handoff from one operational control room.",
    icon: Gauge,
    accent: "text-rose"
  },
  {
    title: "Enterprise integrations",
    copy: "Connect CRM, help desk, finance, analytics, and internal tools without brittle scripts.",
    icon: DatabaseZap,
    accent: "text-aqua"
  },
  {
    title: "Customer-ready responses",
    copy: "Generate polished replies, briefs, and follow-ups that match your team tone and policies.",
    icon: MessagesSquare,
    accent: "text-mint"
  }
];

export default function Features() {
  return (
    <section id="features" className="section-fade py-24 sm:py-28">
      <Container>
        <div className="mx-auto flex justify-center">
          <SectionHeading
            eyebrow="Automation layer"
            title="Everything needed to run AI work in production."
            copy="Move past one-off prompts with secure automation primitives designed for real teams, real tools, and real accountability."
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.35] to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="mb-8 grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.055]">
                  <Icon size={23} className={feature.accent} />
                </div>
                <h3 className="text-xl font-semibold tracking-normal text-ink">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-muted">{feature.copy}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
