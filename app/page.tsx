import Image from "next/image";
import Link from "next/link";

const appStoreUrl = "https://apps.apple.com/app/id6770096564?mt=12";
const sourcePrivacyUrl = "https://tarunag10.github.io/MacCareStudio-Privacy-Policy/";

const features = [
  {
    title: "Smart local review",
    body: "Review cleanup options locally before taking action."
  },
  {
    title: "Safer cleanup decisions",
    body: "Files are shown for review before cleanup, with user-selected folders respected."
  },
  {
    title: "Startup and app leftovers",
    body: "Inspect startup load and app-related leftovers from one native macOS workspace."
  },
  {
    title: "Privacy-aware browser review",
    body: "Review browser traces with clear context before deciding what to clean."
  }
];

const screenshots = [
  {
    src: "/assets/screenshots/dashboard.jpg",
    title: "Dashboard",
    body: "A calm starting point for scan planning and review."
  },
  {
    src: "/assets/screenshots/smart-care.jpg",
    title: "Smart Care",
    body: "Local cleanup guidance gathered into one review flow."
  },
  {
    src: "/assets/screenshots/system-junk.jpg",
    title: "System Junk",
    body: "Inspect clutter candidates before cleanup."
  },
  {
    src: "/assets/screenshots/storage-triage.jpg",
    title: "Storage Triage",
    body: "Understand storage usage with focused review surfaces."
  },
  {
    src: "/assets/screenshots/uninstaller.jpg",
    title: "App Leftovers",
    body: "Review app-related files and leftovers clearly."
  },
  {
    src: "/assets/screenshots/subscription-review.jpg",
    title: "Review Details",
    body: "Keep decisions visible before anything changes."
  }
];

function AppleLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path
        fill="currentColor"
        d="M16.37 1.42c0 1.08-.43 2.08-1.14 2.85-.77.83-2.03 1.47-3.03 1.39-.13-1.04.37-2.14 1.05-2.91.75-.85 2.1-1.5 3.12-1.33Zm3.31 16.79c-.56 1.29-.84 1.87-1.56 3.01-1.02 1.56-2.45 3.51-4.23 3.53-1.58.02-1.99-1.03-4.13-1.02-2.14.01-2.59 1.04-4.18 1.02-1.78-.02-3.13-1.77-4.15-3.33-2.86-4.38-3.16-9.52-1.39-12.25 1.26-1.94 3.25-3.08 5.13-3.08 1.91 0 3.11 1.04 4.69 1.04 1.53 0 2.46-1.05 4.67-1.05 1.67 0 3.44.91 4.69 2.48-4.12 2.26-3.45 8.14.46 9.65Z"
      />
    </svg>
  );
}

function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <a className={`app-store-button ${className}`} href={appStoreUrl} aria-label="Download Care Studio on the Mac App Store">
      <AppleLogo />
      <span>
        <small>Download on the</small>
        Mac App Store
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Care Studio home">
          <Image src="/assets/icons/app-icon-1024.jpg" alt="" width={34} height={34} priority />
          <span>Care Studio</span>
        </Link>
        <nav aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#screenshots">Screenshots</a>
          <Link href="/privacy">Privacy</Link>
          <a href="#download">Download</a>
        </nav>
        <AppStoreButton className="header-download" />
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <Image className="app-icon" src="/assets/icons/app-icon-1024.jpg" alt="Care Studio app icon" width={84} height={84} priority />
          <p className="eyebrow">Local Mac cleanup review</p>
          <h1>Care Studio</h1>
          <p className="hero-lede">
            Care Studio is a privacy-first cleanup utility for people who want a calm, careful way to understand cleanup options for their Mac.
          </p>
          <p className="hero-support">
            Review system junk, browser traces, startup load, app leftovers, synced folders, and storage usage with local, safe-first cleanup guidance.
          </p>
          <div className="hero-actions">
            <AppStoreButton />
            <Link className="secondary-link" href="/privacy">
              View privacy policy
            </Link>
          </div>
        </div>
        <div className="hero-media" aria-label="Care Studio dashboard screenshot">
          <Image src="/assets/screenshots/dashboard.jpg" alt="Care Studio dashboard showing local Mac cleanup review modules" width={1280} height={800} priority />
        </div>
      </section>

      <section className="feature-band" id="features">
        <div className="section-heading">
          <p className="eyebrow">Safe-first workspace</p>
          <h2>Understand what needs attention before anything changes.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="screenshots section-shell" id="screenshots">
        <div className="section-heading">
          <p className="eyebrow">App Store assets</p>
          <h2>Native macOS surfaces built for review, not rush.</h2>
        </div>
        <div className="screenshot-grid">
          {screenshots.map((shot) => (
            <figure className="screenshot-card" key={shot.src}>
              <Image src={shot.src} alt={`Care Studio ${shot.title} screenshot`} width={1280} height={800} />
              <figcaption>
                <strong>{shot.title}</strong>
                <span>{shot.body}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="details-band">
        <div className="section-heading">
          <p className="eyebrow">App details</p>
          <h2>Care Studio for macOS.</h2>
        </div>
        <dl className="details-list">
          <div>
            <dt>App name</dt>
            <dd>Care Studio</dd>
          </div>
          <div>
            <dt>Platform</dt>
            <dd>macOS</dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>Utilities</dd>
          </div>
          <div>
            <dt>Availability</dt>
            <dd>Mac App Store</dd>
          </div>
          <div>
            <dt>Price</dt>
            <dd>Free to download</dd>
          </div>
          <div>
            <dt>Privacy policy</dt>
            <dd>
              <Link href="/privacy">Read the Care Studio privacy policy</Link>
            </dd>
          </div>
        </dl>
      </section>

      <section className="privacy-preview section-shell" id="privacy">
        <div>
          <p className="eyebrow">Privacy</p>
          <h2>Local-first by design.</h2>
          <p>
            Care Studio is designed as a private, local-first macOS utility. Scans, cleanup previews, storage reviews, privacy reviews, and local guidance are processed on your Mac.
          </p>
        </div>
        <div className="privacy-actions">
          <Link className="button-link" href="/privacy">
            Open privacy policy
          </Link>
          <a className="text-link" href={sourcePrivacyUrl}>
            View GitHub source policy
          </a>
        </div>
      </section>

      <section className="download-cta" id="download">
        <p className="eyebrow">Download</p>
        <h2>Get Care Studio on the Mac App Store</h2>
        <p>Download Care Studio and review cleanup options for your Mac with local, safe-first guidance.</p>
        <AppStoreButton />
      </section>

      <footer className="site-footer">
        <span>Care Studio</span>
        <a href={appStoreUrl}>Mac App Store</a>
        <Link href="/privacy">Privacy Policy</Link>
        <a href={sourcePrivacyUrl}>Source privacy policy</a>
        <span>© 2026 Care Studio. All rights reserved.</span>
      </footer>
    </main>
  );
}
