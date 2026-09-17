import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, RefreshCw, Clock, AlertCircle, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy | Family Phys. Ed.",
  description:
    "Transparent refund and cancellation guidelines for users and coaches at Family Phys. Ed.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      <main className="flex-1 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:shadow-lift"
            >
              <ArrowLeft className="h-4 w-4 text-ink transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase text-ink">
              <RefreshCw className="h-4 w-4 text-grass" />
              Transparent Booking Policies
            </span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-balance text-ink">
              Refund & Cancellation Policy for{" "}
              <span className="marker-hl">Family Phys. Ed.</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Fair and transparent booking, cancellation, and refund rules designed for both families and coaches.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="space-y-10 rounded-[2.5rem] border border-border bg-card p-6 sm:p-12 shadow-lift">
            <p className="border-l-4 border-primary bg-cream p-5 rounded-2xl text-base sm:text-lg font-medium leading-relaxed text-ink">
              At Family Phys. Ed., we strive to provide a fair and transparent cancellation and refund policy for both users and coaches. Please review the following guidelines:
            </p>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3 border-b border-border pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  1
                </span>
                User Cancellations
              </h2>
              <div className="bg-cream p-6 rounded-2xl border border-border/70 space-y-4">
                <ul className="list-disc list-inside space-y-3 pl-2 text-muted-foreground marker:text-primary">
                  <li>
                    <strong className="text-ink">Full Refund (24+ Hours Notice):</strong> Users may cancel their scheduled session up to <strong className="text-ink font-bold">24 hours</strong> before the scheduled start time to receive a 100% full refund.
                  </li>
                  <li>
                    <strong className="text-ink">Within 24 Hours:</strong> Cancellations made within 24 hours of the start time will not be eligible for a standard refund. This policy is in place to protect our certified coaches from lost time and reserved field/equipment opportunities.
                  </li>
                  <li>
                    <strong className="text-ink">Case-by-Case Review:</strong> Partial refunds or session credits may be considered for cancellations made within 24 hours due to emergencies, and will be evaluated on a case-by-case basis by the Family Phys. Ed. support team.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3 border-b border-border pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  2
                </span>
                Coach Cancellations
              </h2>
              <div className="bg-cream p-6 rounded-2xl border border-border/70 space-y-4">
                <ul className="list-disc list-inside space-y-3 pl-2 text-muted-foreground marker:text-primary">
                  <li>
                    <strong className="text-ink">Standard Notice:</strong> Coaches may cancel a session up to 24 hours before the scheduled start time without penalty.
                  </li>
                  <li>
                    <strong className="text-ink">Guaranteed User Refund:</strong> If a coach cancels within 24 hours of the scheduled start time, the user will automatically receive an immediate 100% full refund or priority rescheduling credit.
                  </li>
                  <li>
                    <strong className="text-ink">Quality Assurance System:</strong> Coaches who cancel within 24 hours will be subject to account warnings. Coaches may receive up to three warnings before further disciplinary action is taken, including potential suspension or removal from the platform to maintain highest quality reliability for families.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3 border-b border-border pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  3
                </span>
                Exceptional Circumstances
              </h2>
              <div className="bg-cream border border-border p-6 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-ink font-extrabold font-display">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  <span>Unforeseen Events & Emergencies</span>
                </div>
                <p className="text-muted-foreground">
                  We understand that unpredictable life events, sudden illness, or extreme weather can sometimes interfere with plans. If a user or coach needs to cancel within 24 hours under special circumstances, we encourage you to reach out via our in-app chat or email to explain the situation.
                </p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2 font-medium">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Responses to special cancellation requests typically take 24–48 business hours.</span>
                </div>
              </div>
            </section>

            {/* Support CTA */}
            <section className="pt-4 border-t border-border">
              <div className="rounded-3xl bg-cream border border-border p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h4 className="font-display text-lg font-extrabold text-ink mb-1">Need help with a booking or refund?</h4>
                  <p className="text-muted-foreground text-sm">Our support team is ready to assist you.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:info@familyphysed.com"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm font-extrabold text-primary-foreground shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Mail className="h-4 w-4" />
                    info@familyphysed.com
                  </a>
                  <a
                    href="tel:+12156697955"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 font-display text-sm font-extrabold text-ink transition-colors duration-300 hover:bg-ink hover:text-background"
                  >
                    <Phone className="h-4 w-4" />
                    (215) 669-7955
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
