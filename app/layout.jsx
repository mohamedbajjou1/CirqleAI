import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://cirqle.ai"),
  title: {
    default: "CirqleAI | AI Automation for Modern Teams",
    template: "%s | CirqleAI"
  },
  description:
    "CirqleAI helps modern teams automate repetitive operations with secure AI agents, human approvals, and real-time workflow observability.",
  keywords: [
    "AI automation",
    "workflow automation",
    "AI agents",
    "SaaS automation",
    "enterprise AI"
  ],
  openGraph: {
    title: "CirqleAI | AI Automation for Modern Teams",
    description:
      "Deploy secure AI automations across your tools with human control and enterprise-grade observability.",
    url: "https://cirqle.ai",
    siteName: "CirqleAI",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "CirqleAI | AI Automation for Modern Teams",
    description:
      "Secure AI agents for the operational work between your teams, systems, and customers."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
