"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Button from "@/components/landing/Button";
import Container from "@/components/landing/Container";
import SectionHeading from "@/components/landing/SectionHeading";
import { fadeUp, stagger } from "@/lib/motion";

const plans = [
  {
    name: "Starter",
    price: "$49",
    cadence: "per seat / month",
    description: "For lean teams automating everyday workflows.",
    cta: "Start free",
    features: ["5 active workflows", "10 connected tools", "Approval inbox", "Basic run history"]
  },
  {
    name: "Scale",
    price: "$149",
    cadence: "per seat / month",
    description: "For growing teams standardizing AI operations.",
    cta: "Choose Scale",
    popular: true,
    features: [
      "Unlimited workflows",
      "Advanced policy controls",
      "Shared agent memory",
      "Priority execution",
      "Workflow analytics"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual contract",
    description: "For organizations with strict governance needs.",
    cta: "Talk to sales",
    features: ["SSO and SCIM", "Custom data residency", "Dedicated success team", "Security review support"]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-fade py-24 sm:py-28">
      <Container>
        <div className="mx-auto flex justify-center">
          <SectionHeading
            eyebrow="Pricing"
            title="Start small, then expand across every operation."
            copy="Transparent plans for teams building reliable AI automation, with enterprise controls available when you need them."
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-4 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={fadeUp}
              className={`relative rounded-3xl border p-6 backdrop-blur-xl ${
                plan.popular
                  ? "border-aqua/[0.35] bg-aqua/[0.08] shadow-glow"
                  : "border-white/10 bg-white/[0.045]"
              }`}
            >
              {plan.popular ? (
                <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-aqua/30 bg-aqua/10 px-3 py-1 text-xs font-medium text-aqua">
                  <Sparkles size={13} />
                  Popular
                </div>
              ) : null}
              <h3 className="text-xl font-semibold text-ink">{plan.name}</h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-ink-muted">{plan.description}</p>
              <div className="mt-8 flex items-end gap-2">
                <span className="text-4xl font-semibold tracking-normal text-ink">{plan.price}</span>
                <span className="pb-1 text-sm text-ink-muted">{plan.cadence}</span>
              </div>
              <Button
                href="#final-cta"
                variant={plan.popular ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {plan.cta}
              </Button>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-ink-muted">
                    <Check size={17} className="mt-0.5 shrink-0 text-mint" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
