"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Container from "@/components/landing/Container";
import SectionHeading from "@/components/landing/SectionHeading";

const faqs = [
  {
    question: "How is CirqleAI different from a normal automation builder?",
    answer:
      "Traditional builders move data through rigid steps. CirqleAI combines workflow logic with AI agents that can read context, draft work, request approvals, and adapt to exceptions."
  },
  {
    question: "Can humans approve sensitive actions before they run?",
    answer:
      "Yes. You can require approvals by workflow, action type, confidence threshold, customer tier, policy match, or any field from your connected systems."
  },
  {
    question: "Which tools can we connect?",
    answer:
      "CirqleAI supports common CRM, support, messaging, documentation, analytics, and finance systems, plus webhooks and API connectors for custom internal tools."
  },
  {
    question: "Does CirqleAI train on our company data?",
    answer:
      "No. Your data is used to execute your workflows and maintain your approved context. Enterprise customers can configure retention, residency, and model routing."
  },
  {
    question: "How fast can a team launch a first workflow?",
    answer:
      "Most teams launch their first controlled workflow in a few hours after connecting source tools, selecting an approval path, and testing the run log."
  },
  {
    question: "Do you support enterprise security reviews?",
    answer:
      "Yes. Enterprise plans include security documentation, SSO, SCIM, admin controls, audit exports, and dedicated implementation support."
  }
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="section-fade py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions teams ask before putting AI in the workflow."
            copy="The short version: CirqleAI is built for controlled execution, not black-box automation."
          />

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = active === index;
              return (
                <article key={faq.question} className="rounded-3xl border border-white/10 bg-white/[0.045] backdrop-blur-xl">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    onClick={() => setActive(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-ink">{faq.question}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0 text-ink-muted">
                      <ChevronDown size={19} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-7 text-ink-muted">{faq.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
