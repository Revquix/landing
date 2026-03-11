import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | REVQUIX",
  description:
    "Read the terms governing your use of REVQUIX website and software development, consulting, and delivery services.",
  alternates: {
    canonical: "https://revquix.com/terms-of-service",
  },
  robots: "index, follow",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-4 border-b border-gray-800 pb-8">
          <Link href="/" className="text-green-soft hover:text-green-lighter transition-colors text-sm">
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold">Terms of Service</h1>
          <p className="text-gray-300 leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) govern your use of the REVQUIX website and our software
            development, consulting, and related services.
          </p>
          <p className="text-sm text-gray-400">Effective date: March 11, 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            By accessing this website or engaging our services, you agree to these Terms. If you do not
            agree, please do not use the website or services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">2. Scope of Services</h2>
          <p className="text-gray-300 leading-relaxed">
            REVQUIX provides services including web development, mobile app development, AI integration,
            and technical mentoring. Specific deliverables, pricing, and timelines are defined in proposals,
            statements of work, or separate written agreements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">3. Client Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Provide accurate project information and timely feedback.</li>
            <li>Supply required content, assets, credentials, and approvals.</li>
            <li>Ensure lawful use of delivered software and content.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">4. Fees and Payment</h2>
          <p className="text-gray-300 leading-relaxed">
            Fees, invoicing milestones, and payment terms are defined in applicable agreements. Late payment
            may result in pause of services, delayed delivery, or applicable charges as permitted by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
          <p className="text-gray-300 leading-relaxed">
            Unless otherwise agreed in writing, pre-existing tools, frameworks, and know-how remain property
            of their respective owners. Project-specific deliverables are transferred or licensed according
            to the signed agreement and completion of payment obligations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">6. Confidentiality</h2>
          <p className="text-gray-300 leading-relaxed">
            Both parties agree to protect non-public information shared during collaboration and to use such
            information only for service-related purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">7. Warranties and Disclaimers</h2>
          <p className="text-gray-300 leading-relaxed">
            Services are provided on a commercially reasonable basis. Except as explicitly stated in writing,
            REVQUIX disclaims implied warranties, including merchantability and fitness for a particular
            purpose.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
          <p className="text-gray-300 leading-relaxed">
            To the maximum extent permitted by law, REVQUIX is not liable for indirect, incidental, special,
            consequential, or punitive damages, including lost profits or data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">9. Termination</h2>
          <p className="text-gray-300 leading-relaxed">
            Either party may terminate services according to the relevant agreement terms. Outstanding fees
            and obligations accrued before termination remain payable and enforceable.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">10. Governing Law</h2>
          <p className="text-gray-300 leading-relaxed">
            These Terms are governed by applicable laws of India, without regard to conflict-of-law rules,
            unless otherwise agreed in writing.
          </p>
        </section>

        <section className="space-y-3 border-t border-gray-800 pt-8">
          <h2 className="text-2xl font-semibold">11. Contact</h2>
          <p className="text-gray-300 leading-relaxed">
            For legal or service questions, contact REVQUIX at
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
