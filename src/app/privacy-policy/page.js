import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Shield, Calendar, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Family Phys. Ed.",
  description:
    "Privacy Policy for Family Phys. Ed. explaining how we collect, use, store, and protect your personal information in compliance with CCPA and COPPA.",
};

export default function PrivacyPolicyPage() {
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
              <Shield className="h-4 w-4 text-grass" />
              Privacy & Data Protection
            </span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-balance text-ink">
              Privacy Policy for{" "}
              <span className="marker-hl">Family Phys. Ed.</span>
            </h1>
            <div className="mt-4 flex items-center gap-2 text-muted-foreground font-medium text-sm sm:text-base">
              <Calendar className="h-4 w-4 text-primary" />
              <span>Effective Date: <strong className="text-ink">07/18/2025</strong></span>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="space-y-10 rounded-[2.5rem] border border-border bg-card p-6 sm:p-12 shadow-lift">
            <p className="border-l-4 border-primary bg-cream p-5 rounded-2xl text-base sm:text-lg font-medium leading-relaxed text-ink">
              Family Phys. Ed. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy and security of our users&apos; personal information. This Privacy Policy explains how we collect, use, store, and protect your information in compliance with applicable laws, including the California Consumer Privacy Act (CCPA) and the Children&apos;s Online Privacy Protection Act (COPPA).
            </p>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3 border-b border-border pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  1
                </span>
                Information We Collect
              </h2>
              <p className="text-muted-foreground">We collect the following types of information to provide and enhance our services:</p>

              <div className="space-y-4 mt-4">
                <div className="bg-cream p-5 rounded-2xl border border-border/70">
                  <h3 className="font-display text-base font-extrabold text-ink mb-2">
                    Personal Identifiable Information (PII)
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 pl-2 text-muted-foreground marker:text-primary">
                    <li><strong className="text-ink">For Customers:</strong> Name or username, email address, phone number, mailing address, profile picture, and activity level.</li>
                    <li><strong className="text-ink">For Coaches:</strong> Name, email address, phone number, mailing address, profile picture, certifications, and experience-related data that you upload.</li>
                  </ul>
                </div>

                <div className="bg-cream p-5 rounded-2xl border border-border/70">
                  <h3 className="font-display text-base font-extrabold text-ink mb-2">
                    Usage Data
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 pl-2 text-muted-foreground marker:text-primary">
                    <li>While we do not directly collect data about your device (such as IP address or browser information), certain data may be collected by the app stores (Apple App Store, Google Play Store) as per their respective privacy policies.</li>
                    <li>We store your booking history and upcoming sessions, which can be viewed through your profile.</li>
                    <li>We utilize general analytics to track customer numbers and coach availability. This data helps us ensure that the appropriate number of coaches are hired in each area.</li>
                  </ul>
                </div>

                <div className="bg-cream p-5 rounded-2xl border border-border/70">
                  <h3 className="font-display text-base font-extrabold text-ink mb-2">
                    Transaction Data
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 pl-2 text-muted-foreground marker:text-primary">
                    <li>We collect payment information (e.g., credit card details) and other transaction-related data when making or receiving payments within the app.</li>
                    <li>Stripe handles payment processing securely through its API. Coaches and users enter their payment information directly into the app, and they have the ability to update, add, or delete their card information at any time via the app&apos;s account settings.</li>
                  </ul>
                </div>

                <div className="bg-cream p-5 rounded-2xl border border-border/70">
                  <h3 className="font-display text-base font-extrabold text-ink mb-2">
                    Communication Data
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 pl-2 text-muted-foreground marker:text-primary">
                    <li>We store chat logs between customers and coaches to facilitate communication and service delivery.</li>
                    <li>We also maintain reviews left by customers for coaches.</li>
                    <li>Customers can contact us directly via email through the app for any issues or inquiries.</li>
                  </ul>
                </div>

                <div className="bg-cream p-5 rounded-2xl border border-border/70">
                  <h3 className="font-display text-base font-extrabold text-ink mb-2">
                    Location Data
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 pl-2 text-muted-foreground marker:text-primary">
                    <li>We use location services to show coaches within a customer&apos;s set radius and enable coaches to set session locations.</li>
                    <li>Customers can create private session requests that are sent as bids to coaches within their radius, or view a list of public sessions created by coaches that they can sign up for.</li>
                    <li>Coaches can create public sessions or respond to private session requests and see the location of the session for logistical purposes.</li>
                    <li><strong className="text-ink">Location Visibility:</strong> Only the location selected for the session will be visible to both the customer and the coach. Addresses are not publicly visible, and location data is only shared as necessary to facilitate the booking and scheduling of sessions.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3 border-b border-border pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  2
                </span>
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground">We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-3 pl-2 text-muted-foreground marker:text-primary">
                <li>
                  <strong className="text-ink">To provide and manage services:</strong>
                  <ul className="list-disc list-inside ml-6 mt-1.5 space-y-1 text-muted-foreground">
                    <li>Facilitate the creation of private sessions by matching customers with coaches within their location radius.</li>
                    <li>Allow coaches to set and manage public sessions and respond to private requests.</li>
                    <li>Process payments and facilitate any related financial transactions securely via Stripe. Coaches and users can add, update, or delete their payment information at any time via the app&apos;s account settings.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-ink">For marketing and promotional communications:</strong>
                  <ul className="list-disc list-inside ml-6 mt-1.5 space-y-1 text-muted-foreground">
                    <li>With your consent, we may send marketing and promotional emails related to our services, including new features, offers, or updates.</li>
                    <li>You may opt-out of these communications at any time via the settings in the app or through the unsubscribe link in emails.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-ink">For operational and legal communications:</strong>
                  <ul className="list-disc list-inside ml-6 mt-1.5 space-y-1 text-muted-foreground">
                    <li>Send alerts related to changes or updates in the Terms of Service, Privacy Policy, or other important operational matters.</li>
                    <li>Communicate with customers and coaches about session details, cancellations, or updates.</li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3 border-b border-border pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  3
                </span>
                Legal Basis for Processing (for Users in the U.S.)
              </h2>
              <p className="text-muted-foreground">We process your personal data based on the following legal bases:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-cream p-5 rounded-2xl border border-border">
                  <h3 className="font-display text-base font-extrabold text-ink mb-2">1. Consent</h3>
                  <p className="text-sm text-muted-foreground">
                    We process personal data for marketing communications only with your explicit consent. You can opt-out at any time via the unsubscribe button or app settings.
                  </p>
                </div>
                <div className="bg-cream p-5 rounded-2xl border border-border">
                  <h3 className="font-display text-base font-extrabold text-ink mb-2">2. Performance of a Contract</h3>
                  <p className="text-sm text-muted-foreground">
                    Facilitating private sessions, processing payments via Stripe, and managing coach-customer communication.
                  </p>
                </div>
                <div className="bg-cream p-5 rounded-2xl border border-border">
                  <h3 className="font-display text-base font-extrabold text-ink mb-2">3. Legal Obligations</h3>
                  <p className="text-sm text-muted-foreground">
                    Complying with statutory requirements such as transaction records for accounting, taxes, and dispute resolution.
                  </p>
                </div>
                <div className="bg-cream p-5 rounded-2xl border border-border">
                  <h3 className="font-display text-base font-extrabold text-ink mb-2">4. Legitimate Business Interests</h3>
                  <p className="text-sm text-muted-foreground">
                    Improving app quality, capacity planning for coach availability, and maintaining customer support logs.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3 border-b border-border pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  4
                </span>
                Data Sharing and Disclosure
              </h2>
              <p className="text-muted-foreground">We do not sell, rent, or lease your personal data. We may share your information with trusted third-party service providers solely for operational purposes, under strict confidentiality agreements:</p>
              
              <ul className="list-disc list-inside space-y-2.5 pl-2 text-muted-foreground marker:text-primary">
                <li><strong className="text-ink">Payment Processing (Stripe):</strong> Stripe securely processes in-app payments under PCI-DSS standards and its own privacy terms.</li>
                <li><strong className="text-ink">App Maintenance & Engineering (Dignite Studios):</strong> Contracted under strict non-disclosure to perform maintenance, updates, and troubleshooting.</li>
                <li><strong className="text-ink">Legal Obligations:</strong> Disclosed only if required by valid subpoena, court order, or fraud prevention authority.</li>
                <li><strong className="text-ink">No Other Sharing:</strong> We do not share your personal data with any outside advertisers or third-party brokers.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3 border-b border-border pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  5
                </span>
                Data Retention & Deletion
              </h2>
              <p className="text-muted-foreground">We retain your personal data for as long as necessary to provide services, comply with accounting and tax regulations, and resolve disputes.</p>
              <div className="bg-cream p-5 rounded-2xl border border-border">
                <h3 className="font-display text-base font-extrabold text-ink mb-2">Your Deletion Rights</h3>
                <p className="text-muted-foreground text-sm">
                  You have the right to request deletion of your personal data at any time through your account settings or by contacting our team.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3 border-b border-border pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  6
                </span>
                Security Measures
              </h2>
              <ul className="list-disc list-inside space-y-2 pl-2 text-muted-foreground marker:text-primary">
                <li><strong className="text-ink">Data Encryption:</strong> End-to-end TLS encryption during transmission.</li>
                <li><strong className="text-ink">Access Controls:</strong> Role-based least-privilege access restricted to authorized personnel.</li>
                <li><strong className="text-ink">Third-Party Compliance:</strong> SOC and PCI-DSS verified payment partners.</li>
                <li><strong className="text-ink">Regular Audits & Training:</strong> Routine vulnerability assessments and security training for staff.</li>
                <li><strong className="text-ink">Incident Response:</strong> Swift breach mitigation and user notification procedures.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3 border-b border-border pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  7
                </span>
                Your Rights and Choices
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-sm">
                <div className="p-4 rounded-2xl bg-cream border border-border">
                  <strong className="font-display font-extrabold text-ink block mb-1">1. Right to Access</strong>
                  <span className="text-muted-foreground">Request a copy of your stored records.</span>
                </div>
                <div className="p-4 rounded-2xl bg-cream border border-border">
                  <strong className="font-display font-extrabold text-ink block mb-1">2. Right to Correct</strong>
                  <span className="text-muted-foreground">Update incomplete or outdated info via app.</span>
                </div>
                <div className="p-4 rounded-2xl bg-cream border border-border">
                  <strong className="font-display font-extrabold text-ink block mb-1">3. Right to Delete</strong>
                  <span className="text-muted-foreground">Request full account and data removal.</span>
                </div>
                <div className="p-4 rounded-2xl bg-cream border border-border">
                  <strong className="font-display font-extrabold text-ink block mb-1">4. Opt-Out of Marketing</strong>
                  <span className="text-muted-foreground">Unsubscribe with one click anytime.</span>
                </div>
                <div className="p-4 rounded-2xl bg-cream border border-border">
                  <strong className="font-display font-extrabold text-ink block mb-1">5. Data Portability</strong>
                  <span className="text-muted-foreground">Receive records in machine-readable format.</span>
                </div>
                <div className="p-4 rounded-2xl bg-cream border border-border">
                  <strong className="font-display font-extrabold text-ink block mb-1">6. Lodge a Complaint</strong>
                  <span className="text-muted-foreground">Contact the FTC or your local state attorney.</span>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3 border-b border-border pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  8
                </span>
                Children&apos;s Privacy (COPPA Compliance)
              </h2>
              <p className="text-muted-foreground">
                Our services are not intended for unsupervised individuals under the age of 13, and we do not knowingly collect personal information directly from children under 13 in accordance with COPPA. Children are welcome to participate in family physical education sessions when registered by a parent or legal guardian.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-muted-foreground marker:text-primary">
                <li><strong className="text-ink">Parental Consent:</strong> Parents/guardians provide session details on behalf of participating children.</li>
                <li><strong className="text-ink">Coach Training:</strong> Coaches adhere strictly to child safety guidelines and background check protocols.</li>
                <li><strong className="text-ink">No Direct Account Creation:</strong> Children under 13 cannot register standalone accounts.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3 border-b border-border pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  9
                </span>
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. If material changes are made, we will notify users through in-app alerts or email. Continued use of the platform constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-4 pt-4 border-t border-border">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary font-display font-extrabold text-primary-foreground text-sm">
                  10
                </span>
                Contact Information
              </h2>
              <p className="text-muted-foreground">If you have any questions or requests regarding your personal data, reach out to us directly:</p>
              
              <div className="rounded-3xl bg-cream border border-border p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-4">
                <div>
                  <h4 className="font-display text-lg font-extrabold text-ink mb-1">Family Phys. Ed. Privacy Team</h4>
                  <p className="text-muted-foreground text-sm">Dedicated data protection assistance.</p>
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
