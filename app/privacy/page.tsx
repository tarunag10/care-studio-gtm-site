import type { Metadata } from "next";
import Link from "next/link";

const sourcePrivacyUrl = "https://tarunag10.github.io/MacCareStudio-Privacy-Policy/";

export const metadata: Metadata = {
  title: "Care Studio Privacy Policy",
  description: "Privacy policy for Care Studio for macOS.",
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <main className="policy-page">
      <header className="policy-hero">
        <Link className="back-link" href="/">
          Back to Care Studio
        </Link>
        <p className="eyebrow">Effective date: May 17, 2026</p>
        <h1>Care Studio Privacy Policy</h1>
        <p className="policy-summary">
          This privacy policy is based on the GitHub privacy policy previously used for Care Studio on the Mac App Store.
        </p>
        <a className="source-policy" href={sourcePrivacyUrl}>
          View source privacy policy
        </a>
      </header>

      <article className="policy-content">
        <section>
          <h2>Data Collection</h2>
          <p>
            Care Studio does not collect personal data from the app. Scans, cleanup previews, storage reviews, privacy reviews, and local guidance are processed on the user's Mac.
          </p>
        </section>

        <section>
          <h2>Local Files and Permissions</h2>
          <p>
            The app may ask for permission to inspect user-selected folders or macOS-protected locations so it can show cleanup and maintenance recommendations. File names, scan results, and local settings remain on the user's device unless the user independently chooses to export or share them.
          </p>
        </section>

        <section>
          <h2>Subscriptions and Payments</h2>
          <p>
            Care Studio may offer premium access through Apple App Store subscriptions. Purchases, free trials, renewals, cancellation, and payment processing are handled by Apple. The developer does not receive or store payment card details.
          </p>
        </section>

        <section>
          <h2>Analytics, Advertising, and Tracking</h2>
          <p>
            Care Studio does not include third-party advertising SDKs, cross-app tracking, or developer-operated analytics collection.
          </p>
        </section>

        <section>
          <h2>Support</h2>
          <p>
            If a user contacts support by email or through a website form, the information they choose to provide is used only to respond to the request.
          </p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>
            This policy may be updated if Care Studio's privacy practices change. The effective date above will be updated when material changes are made.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For privacy questions, contact <a href="mailto:tarun@codecounsel.co">tarun@codecounsel.co</a>.
          </p>
        </section>
      </article>

      <footer className="site-footer policy-footer">
        <span>Care Studio</span>
        <Link href="/">Home</Link>
        <a href={sourcePrivacyUrl}>GitHub source privacy policy</a>
        <span>© 2026 Care Studio. All rights reserved.</span>
      </footer>
    </main>
  );
}
