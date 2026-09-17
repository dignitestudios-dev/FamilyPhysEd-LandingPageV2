import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ShieldCheck, HeartHandshake, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Code of Conduct | Family Phys. Ed.",
  description:
    "Guidelines and expectations for staff, coaches, participants, and families at Family Phys. Ed.",
};

export default function CodeOfConductPage() {
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
              <HeartHandshake className="h-4 w-4 text-grass" />
              Community & Safety Guidelines
            </span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-balance text-ink">
              Code of Conduct for{" "}
              <span className="marker-hl">Family Phys. Ed.</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Upholding our mission of fostering health, family connection, and positive experiences.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="space-y-10 rounded-[2.5rem] border border-border bg-card p-6 sm:p-12 shadow-lift">
            <p className="border-l-4 border-primary bg-cream p-5 rounded-2xl text-base sm:text-lg font-medium leading-relaxed text-ink">
              At Family Phys. Ed., we are dedicated to creating a fun, inclusive, and healthy environment where families can bond through physical activity. This Code of Conduct outlines our expectations for all staff, coaches, participants, and families to ensure we uphold our mission of fostering health, family connection, and positive experiences.
            </p>

            <section className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3 border-b border-border pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  1
                </span>
                Respect and Inclusivity
              </h2>
              <ul className="list-disc list-inside space-y-2.5 pl-2 text-muted-foreground marker:text-primary">
                <li>
                  <strong className="text-ink">Treat Everyone with Kindness:</strong> Treat all participants, families, coaches, and staff with kindness, respect, and encouragement, regardless of age, skill level, or background.
                </li>
                <li>
                  <strong className="text-ink">Zero Tolerance for Discrimination:</strong> Create a welcoming environment free from discrimination, harassment, bullying, or exclusion, ensuring everyone feels valued and supported.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3 border-b border-border pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  2
                </span>
                Fun and Positive Engagement
              </h2>
              <ul className="list-disc list-inside space-y-2.5 pl-2 text-muted-foreground marker:text-primary">
                <li>
                  <strong className="text-ink">Joyful Atmosphere:</strong> Promote a joyful, family-friendly atmosphere by participating with enthusiasm and encouraging others.
                </li>
                <li>
                  <strong className="text-ink">Constructive Communication:</strong> Use positive, constructive communication to inspire teamwork, confidence, and growth during activities.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3 border-b border-border pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  3
                </span>
                Health and Safety
              </h2>
              <ul className="list-disc list-inside space-y-2.5 pl-2 text-muted-foreground marker:text-primary">
                <li>
                  <strong className="text-ink">Prioritize Participant Safety:</strong> Prioritize the physical and emotional safety of all participants by following safety guidelines and using equipment responsibly.
                </li>
                <li>
                  <strong className="text-ink">Immediate Reporting:</strong> Report any unsafe conditions, injuries, or concerns to a coach or staff member immediately.
                </li>
                <li>
                  <strong className="text-ink">Compliance:</strong> Adhere to all applicable laws, regulations, and Family Phys. Ed. policies to ensure a safe and compliant environment.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3 border-b border-border pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  4
                </span>
                Integrity and Professionalism
              </h2>
              <ul className="list-disc list-inside space-y-2.5 pl-2 text-muted-foreground marker:text-primary">
                <li>
                  <strong className="text-ink">Honesty & Transparency:</strong> Act with honesty and transparency in all interactions, whether with families, staff, or partners.
                </li>
                <li>
                  <strong className="text-ink">Protect Confidentiality:</strong> Protect confidential information, such as participant details or business operations, and use resources appropriately.
                </li>
                <li>
                  <strong className="text-ink">Role Models:</strong> Coaches and staff should model moral character traits, such as teamwork, resilience, and respect, to inspire participants.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3 border-b border-border pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  5
                </span>
                Family-Centered Collaboration
              </h2>
              <ul className="list-disc list-inside space-y-2.5 pl-2 text-muted-foreground marker:text-primary">
                <li>
                  <strong className="text-ink">Fostering Family Bonds:</strong> Support the mission of Family Phys. Ed. by fostering family bonding and creating memorable, teachable moments through shared activities.
                </li>
                <li>
                  <strong className="text-ink">Celebrate Effort:</strong> Encourage all family members to participate at their own pace, celebrating effort and togetherness over competition.
                </li>
              </ul>
            </section>

            <section className="space-y-4 pt-4 border-t border-border">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-2">
                <ShieldCheck className="h-7 w-7 text-grass" />
                Enforcement
              </h2>
              <p className="text-muted-foreground">
                Violations of this Code of Conduct may result in warnings, removal from activities, or other disciplinary actions, depending on the severity.
              </p>
              
              <div className="rounded-3xl bg-cream border border-border p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-6">
                <div>
                  <h4 className="font-display text-lg font-extrabold text-ink mb-1">Have concerns or questions?</h4>
                  <p className="text-muted-foreground text-sm">Contact our community support team anytime.</p>
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

              <p className="text-muted-foreground italic text-sm mt-4">
                Together, we build a joyful, safe, and healthy community where families can thrive, embodying the Family Phys. Ed. mission of combining health and family through joyful physical activity.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
