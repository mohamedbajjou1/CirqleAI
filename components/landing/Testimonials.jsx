"use client";

import { motion } from "framer-motion";
import Container from "@/components/landing/Container";
import SectionHeading from "@/components/landing/SectionHeading";
import { fadeUp, stagger } from "@/lib/motion";

const testimonials = [
  {
    quote:
      "CirqleAI gave our operations team the control plane we needed. We automated partner onboarding without losing approval quality.",
    name: "Maya Chen",
    role: "VP Operations, Northstar Cloud",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80"
  },
  {
    quote:
      "The audit trail is the reason this made it into production. Every AI action has context, policy checks, and a clean handoff.",
    name: "Daniel Reyes",
    role: "CIO, LatticeWorks",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80"
  },
  {
    quote:
      "Our sales team gets researched account briefs before calls, and support gets resolved-ticket summaries without leaving the queue.",
    name: "Amara Okafor",
    role: "Revenue Systems Lead, Vela",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="section-fade py-24 sm:py-28">
      <Container>
        <div className="mx-auto flex justify-center">
          <SectionHeading
            eyebrow="Customer proof"
            title="Built for teams that need automation they can trust."
            copy="Operators, IT leaders, and revenue teams use CirqleAI to move faster while preserving the controls that matter."
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-4 lg:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.article
              key={item.name}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={`${item.name} avatar`}
                  className="size-12 rounded-full border border-white/[0.15] object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold text-ink">{item.name}</h3>
                  <p className="mt-1 text-xs text-ink-muted">{item.role}</p>
                </div>
              </div>
              <p className="mt-7 text-pretty text-base leading-8 text-ink-muted">"{item.quote}"</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
