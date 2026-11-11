// ============================================================
// EDIT YOUR DETAILS HERE
// Replace the placeholders below with real contact details
// when they are ready. Everything on the site pulls from here.
// ============================================================

const CONTACT = {
  phone: "+91 82082 14348",
  phoneHref: "tel:+918208214348",
  whatsapp: "https://wa.me/918208214348",
  mapsUrl: "https://maps.app.goo.gl/4xDWrFf1nqAcs3tn9",
};

import ContactForm from "./ContactForm";
import { Icon, ICONS } from "./icons";

// ---------- Page ----------

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container nav">
          <a href="#top" className="brand">
            <span className="dot" />
            Atul's Mukta Driving Instructor
          </a>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#why">Why me</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <div className="container">
            <span className="eyebrow">Personalized driving instructor</span>
            <h1>
              Learn to drive with <em>confidence</em>, at your own pace.
            </h1>
            <p className="sub">
              One-on-one driving lessons with a patient, experienced instructor.
              From your very first turn of the key to your driving test — I
              guide you every step of the way.
            </p>
            <div className="cta-row">
              <a href={CONTACT.phoneHref} className="btn btn-primary">
                <Icon path={ICONS.phone} size={18} />
                Call now
              </a>
              <a href="#contact" className="btn btn-ghost">
                <Icon path={ICONS.whatsapp} size={18} />
                WhatsApp me
              </a>
            </div>
          </div>
        </section>

        {/* ---------- Services ---------- */}
        <section className="section alt" id="services">
          <div className="container">
            <p className="section-label">Services</p>
            <h2>What I offer</h2>
            <p className="lede">
              Simple, focused lessons built around you — no batch, no rush.
            </p>
            <div className="grid">
              <div className="card">
                <div className="icon">
                  <Icon path={ICONS.car} />
                </div>
                <h3>Beginner lessons</h3>
                <p>
                  Start from absolute zero — clutch control, gears, steering,
                  and safe road habits from day one.
                </p>
              </div>
              <div className="card">
                <div className="icon">
                  <Icon path={ICONS.badge} />
                </div>
                <h3>RTO test preparation</h3>
                <p>
                  Practice on real test routes and learn exactly what examiners
                  look for on test day.
                </p>
              </div>
              <div className="card">
                <div className="icon">
                  <Icon path={ICONS.wheel} />
                </div>
                <h3>Refresher training</h3>
                <p>
                  Already have a license but nervous on the road? Regain
                  confidence in real traffic conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Why me ---------- */}
        <section className="section" id="why">
          <div className="container">
            <p className="section-label">Why me</p>
            <h2>Why learners choose Atul</h2>
            <p className="lede">
              A calm car, a patient teacher, and a plan made just for you.
            </p>
            <ul className="check-list">
              <li>
                <Icon path={ICONS.check} size={18} />
                <div>
                  <strong>One-on-one attention</strong>
                  <span> — never a crowded batch</span>
                </div>
              </li>
              <li>
                <Icon path={ICONS.check} size={18} />
                <div>
                  <strong>Flexible timings</strong>
                  <span> — early mornings and evenings available</span>
                </div>
              </li>
              <li>
                <Icon path={ICONS.check} size={18} />
                <div>
                  <strong>Pickup &amp; drop</strong>
                  <span> — lessons start from your doorstep</span>
                </div>
              </li>
              <li>
                <Icon path={ICONS.check} size={18} />
                <div>
                  <strong>Calm, patient teaching</strong>
                  <span> — no shouting, no pressure</span>
                </div>
              </li>
              <li>
                <Icon path={ICONS.check} size={18} />
                <div>
                  <strong>Real road practice</strong>
                  <span> — city traffic, highways and parking</span>
                </div>
              </li>
              <li>
                <Icon path={ICONS.check} size={18} />
                <div>
                  <strong>Honest pricing</strong>
                  <span> — pay per lesson, no hidden fees</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section className="section alt" id="contact">
          <div className="container">
            <div className="contact-card">
              <p className="section-label">Contact</p>
              <h2>Ready to start driving?</h2>
              <p className="lede">
                Fill these quick details — WhatsApp will open with your message
                already typed. Just press send.
              </p>
              <ContactForm whatsapp={CONTACT.whatsapp} />
              <p className="direct-label">Or reach directly</p>
              <div className="contact-row">
                <a href={CONTACT.phoneHref} className="contact-chip">
                  <Icon path={ICONS.phone} size={18} />
                  {CONTACT.phone}
                </a>
                <a
                  href={CONTACT.whatsapp}
                  className="contact-chip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon path={ICONS.whatsapp} size={18} />
                  WhatsApp
                </a>
              </div>
              <p className="address">
                <Icon path={ICONS.pin} size={14} /> Driving school location:{" "}
                <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer">
                  View on Google Maps
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Sticky mobile action bar ---------- */}
      <div className="mobile-cta">
        <a href={CONTACT.phoneHref} className="call">
          <Icon path={ICONS.phone} size={18} />
          Call now
        </a>
        <a
          href={CONTACT.whatsapp}
          className="wa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon path={ICONS.whatsapp} size={18} />
          WhatsApp
        </a>
      </div>

      <footer className="footer">
        <div className="container">
          <strong>Atul's Mukta Driving Instructor</strong> ·{" "}
          {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
}
