import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | REVQUIX",
  description:
    "Read how REVQUIX collects, uses, and protects personal information when you use our website and software development services.",
  alternates: {
    canonical: "https://revquix.com/privacy-policy",
  },
  robots: "index, follow",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-4 border-b border-gray-800 pb-8">
          <Link href="/" className="text-green-soft hover:text-green-lighter transition-colors text-sm">
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-gray-300 leading-relaxed">
            This Privacy Policy explains how REVQUIX (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, stores,
            and protects your personal information when you visit our website or engage our services.
          </p>
          <p className="text-sm text-gray-400">Effective date: March 11, 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p className="text-gray-300">We may collect the following information:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Contact details such as name, email, phone number, and business details.</li>
            <li>Project details you provide through inquiry forms, calls, or email.</li>
            <li>Technical data such as IP address, browser type, and usage behavior.</li>
            <li>Payment and invoicing details required for service delivery.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">2. How We Use Information</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>To respond to inquiries and provide requested services.</li>
            <li>To prepare proposals, statements of work, and project updates.</li>
            <li>To improve website performance, usability, and security.</li>
            <li>To process payments and maintain legal/accounting records.</li>
            <li>To send service-related communications and updates.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">3. Legal Basis and Consent</h2>
          <p className="text-gray-300 leading-relaxed">
            We process information based on your consent, our legitimate interest in operating and improving
            our business, and where necessary to fulfill contractual or legal obligations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">4. Sharing of Data</h2>
          <p className="text-gray-300 leading-relaxed">
            We do not sell personal information. We may share limited data with trusted third-party providers
            (such as cloud hosting, analytics, communication, or payment tools) only as needed to operate
            our services and subject to appropriate safeguards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">5. Data Retention</h2>
          <p className="text-gray-300 leading-relaxed">
            We retain information only for as long as required to provide services, comply with legal
            obligations, resolve disputes, and enforce agreements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">6. Security</h2>
          <p className="text-gray-300 leading-relaxed">
            We use reasonable technical and organizational measures to protect your information. However,
            no system is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">7. Your Rights</h2>
          <p className="text-gray-300 leading-relaxed">
            Depending on applicable law, you may request access, correction, deletion, portability, or
            restriction of your personal data. To make a request, contact us using the details below.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">8. Children&apos;s Privacy</h2>
          <p className="text-gray-300 leading-relaxed">
            Our services are not directed to children under 13, and we do not knowingly collect personal
            information from children.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">9. Policy Updates</h2>
          <p className="text-gray-300 leading-relaxed">
            We may update this policy to reflect changes in law, technology, or our services. Updates are
            effective when posted on this page.
          </p>
        </section>

        <section className="space-y-3 border-t border-gray-800 pt-8">
          <h2 className="text-2xl font-semibold">10. Contact Us</h2>
          <p className="text-gray-300 leading-relaxed">
            For questions about this Privacy Policy, contact REVQUIX at
            <a href="mailto:rohitparih@gmail.com" className="text-green-soft hover:text-green-lighter transition-colors ml-1">
              rohitparih@gmail.com
            </a>
            or call +91 9571406506.
          </p>
        </section>
      </div>
    </main>
  );
}
