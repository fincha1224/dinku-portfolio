'use client';
import { useEffect, useState } from 'react';
import {
  ArrowUpRight, ArrowUp, Menu, X, Plus, Minus, Mail, Linkedin, Download,
  Server, ShieldCheck, FlaskConical, Factory, Fuel, Recycle, Bot, Truck, PaintBucket, BadgeCheck, Gauge, Sun, CircleDot, Leaf,
  type LucideIcon,
} from 'lucide-react';
import { domains, work, ventures, experience, insights, type Domain } from './data';

const nav = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#industries', label: 'Industries' },
  { href: '#ventures', label: 'Ventures' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#insights', label: 'Insights' },
  { href: '#contact', label: 'Contact' },
];

// Icons for ventures that don't have a logo file yet.
const ventureIcons: Record<string, LucideIcon> = {
  'OmniServe Labs': FlaskConical,
  AtronusEcoChem: Leaf,
  'Ascend Freight': Truck,
};

const expertise = [
  { icon: Server, label: 'Enterprise technology', note: 'Oracle, OBIEE, IAM' },
  { icon: ShieldCheck, label: 'Cybersecurity', note: 'DLP, endpoint, NIST' },
  { icon: Bot, label: 'AI & automation', note: 'Platforms in production' },
  { icon: FlaskConical, label: 'Laboratory quality', note: 'ISO/IEC 17025, ISO 9001' },
  { icon: Factory, label: 'Chemical manufacturing', note: 'Alkyd resins, coatings' },
  { icon: Fuel, label: 'Fuel & lubricant standards', note: 'ASTM, IP, Jet A-1' },
  { icon: Recycle, label: 'Waste reduction', note: 'Process efficiency' },
  { icon: Truck, label: 'Logistics & operations', note: '2 → 14 truck fleet' },
];

const industries = [
  { icon: Factory, title: 'Alkyd resin manufacturing', text: 'Chemist and production manager: process control, batch quality and scale-up.' },
  { icon: PaintBucket, title: 'Paints and coatings', text: 'Production and QA/QC of paints and coatings, from formulation through performance testing.' },
  { icon: Fuel, title: 'Petroleum and fuel quality', text: 'Jet A-1 and fuel testing to ASTM and IP methods; national fuel oil and lubricant standards.' },
  { icon: BadgeCheck, title: 'ISO/IEC 17025 and ISO 9001', text: 'Established an accredited testing laboratory and ran its quality management system.' },
  { icon: Gauge, title: 'Industrial QA and calibration', text: 'Laboratory operations, equipment calibration and quality leadership, including a jet fuel lab.' },
  { icon: Recycle, title: 'Waste reduction', text: 'Delivered World Bank-sponsored workshops helping factories cut waste and improve yield.' },
  { icon: CircleDot, title: 'Crown cork production QC', text: 'Production quality control in crown cork manufacturing, part of my international career.' },
  { icon: Sun, title: 'Renewable energy and biofuels', text: 'Renewable-energy and biofuels research abroad; led government delegations to Brazil and Kenya.' },
];

const arc = [
  {
    key: 'science',
    span: 'Earlier career',
    title: 'Chemical industries',
    points: ['Built an ISO/IEC 17025-accredited fuel lab', 'Ran alkyd resin and coatings production', 'Worked on national fuel and lubricant standards'],
  },
  {
    key: 'security',
    span: '2011 – 2017',
    title: 'Enterprise security',
    points: ['Accenture analyst, then consultant', 'DLP and endpoint security at 120 sites', 'Security policy for an 8M-user marketplace'],
  },
  {
    key: 'build',
    span: '2017 – today',
    title: 'Operator and builder',
    points: ['Scaled a trucking fleet from 2 to 14', 'Founded Atronus Technologies in 2023', 'Builds and ships AI platforms'],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<Domain | 'all'>('all');
  const [open, setOpen] = useState<string | null>(null);
  const [active, setActive] = useState('#top');
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
      let current = '#top';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = '#' + id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const shown = work.filter((w) => filter === 'all' || w.domain === filter);
  const count = (d: Domain | 'all') => (d === 'all' ? work.length : work.filter((w) => w.domain === d).length);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="masthead">
        <div className="wrap masthead-row">
          <a href="#top" className="wordmark">Dinku Adale</a>
          <nav className={menuOpen ? 'menu is-open' : 'menu'} aria-label="Main">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className={active === n.href ? 'is-active' : undefined} aria-current={active === n.href ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{n.label}</a>
            ))}
            <a className="menu-cta" href="/Dinku_Adale_Resume.pdf" download onClick={() => setMenuOpen(false)}>
              <Download size={15} aria-hidden /> Download CV
            </a>
          </nav>
          <button className="menu-toggle" aria-expanded={menuOpen} aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero">
          <div className="wrap hero-grid">
            <div className="hero-text">
              <p className="hero-kicker">Technology Leader &amp; AI Systems Architect · Chemical Manufacturing &amp; Petroleum Quality</p>
              <h1>Dinku Adale</h1>
              <p className="hero-lede">
                I build secure enterprise systems and AI platforms, drawing on six years of security consulting at
                Accenture and an earlier career in chemical manufacturing and accredited laboratory quality. Today I
                run the platforms and services I founded under Atronus Technologies.
              </p>
              <div className="hero-actions">
                <a className="btn btn-solid" href="#work">See selected work</a>
                <a className="btn btn-line" href="/Dinku_Adale_Resume.pdf" download>
                  <Download size={16} aria-hidden /> Download CV
                </a>
                <a className="btn btn-line" href="https://www.linkedin.com/in/dinkuadale/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} aria-hidden /> LinkedIn
                </a>
              </div>
            </div>
            <figure className="hero-portrait">
              <img src="/images/dinku-portrait-navy.webp" alt="Portrait of Dinku Adale" width={400} height={400} />
              <figcaption>Houston, Texas</figcaption>
            </figure>
          </div>

          <div className="wrap">
            <ul className="expertise" aria-label="Areas of expertise">
              {expertise.map(({ icon: Icon, label, note }) => (
                <li key={label}>
                  <Icon size={22} strokeWidth={1.6} aria-hidden />
                  <span className="ex-label">{label}</span>
                  <span className="ex-note">{note}</span>
                </li>
              ))}
            </ul>
            <ol className="arc" aria-label="Career arc">
              {arc.map((a) => (
                <li key={a.key} className={`arc-step arc-${a.key}`}>
                  <span className="arc-span">{a.span}</span>
                  <h2 className="arc-title">{a.title}</h2>
                  <ul>
                    {a.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="about" className="band band-paper">
          <div className="wrap about-grid">
            <h2 className="section-title">A scientist’s habits applied to technology and business</h2>
            <div className="prose">
              <p>
                Laboratory work taught me to trust measurements over opinions, to write procedures before scaling
                anything, and to treat quality as a system rather than an inspection. I took those habits into
                Accenture, where I spent six years and eight months on security programs for energy companies and a
                state health-insurance marketplace serving more than eight million people.
              </p>
              <p>
                Since then I have run businesses myself: a transportation company I grew from two trucks to fourteen, and
                now Atronus Technologies, where I architect and ship AI products for document verification,
                multilingual customer service, consulting and laboratory compliance.
              </p>
              <p>
                I hold a Master of Computer Science from Howard University, an MBA, and a degree in industrial
                chemistry.
              </p>
            </div>
          </div>
          <div className="wrap">
            <dl className="figures">
              <div><dt>Security consulting at Accenture</dt><dd>6 yrs 8 mos</dd></div>
              <div><dt>Sites in a global DLP and endpoint rollout</dt><dd>120</dd></div>
              <div><dt>Marketplace users covered by the security policy I wrote</dt><dd>8M+</dd></div>
              <div><dt>Ventures in the Atronus portfolio</dt><dd>9</dd></div>
            </dl>
          </div>
        </section>

        <section id="work" className="band band-white">
          <div className="wrap">
            <div className="section-head">
              <h2 className="section-title">Selected work</h2>
              <p>Programs I delivered, products I built and operations I ran. Open any item for my role and the details.</p>
            </div>
            <div className="filters" role="group" aria-label="Filter work by area">
              {domains.map((d) => (
                <button
                  key={d.id}
                  className={filter === d.id ? 'chip is-on' : 'chip'}
                  aria-pressed={filter === d.id}
                  onClick={() => { setFilter(d.id); setOpen(null); }}
                >
                  {d.label} <span className="chip-n">{count(d.id)}</span>
                </button>
              ))}
            </div>

            <ul className="work-list">
              {shown.map((w) => {
                const isOpen = open === w.title;
                const id = 'w-' + w.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
                return (
                  <li key={w.title} className={`work-item d-${w.domain}${isOpen ? ' is-open' : ''}`}>
                    <button className="work-row" aria-expanded={isOpen} aria-controls={id} onClick={() => setOpen(isOpen ? null : w.title)}>
                      <span className="work-period">{w.period}</span>
                      <span className="work-main">
                        <span className="work-title">{w.title}</span>
                        <span className="work-context">{w.context}</span>
                      </span>
                      <span className="work-outcome">{w.outcome}</span>
                      <span className="work-icon" aria-hidden>{isOpen ? <Minus size={18} /> : <Plus size={18} />}</span>
                    </button>
                    <div id={id} className="work-detail" hidden={!isOpen}>
                      <p className="work-summary">{w.summary}</p>
                      <ul>
                        {w.details.map((d) => <li key={d}>{d}</li>)}
                      </ul>
                      {(w.tools || w.link) && (
                        <p className="work-foot">
                          {w.tools && <span>{w.tools}</span>}
                          {w.link && (
                            <a href={w.link.href} target="_blank" rel="noopener noreferrer">
                              {w.link.label} <ArrowUpRight size={14} aria-hidden />
                            </a>
                          )}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section id="industries" className="band band-paper">
          <div className="wrap">
            <div className="section-head">
              <h2 className="section-title">Chemical industry experience</h2>
              <p>Before technology, I spent my early career in chemical manufacturing and laboratory quality. It still shapes how I build: measure first, document the process, and treat quality as a system.</p>
            </div>
            <ul className="industries">
              {industries.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span className="ind-icon"><Icon size={24} strokeWidth={1.6} aria-hidden /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
              <li className="ind-more">
                <button onClick={() => { setFilter('industrial'); setOpen(null); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <strong>See the project details</strong>
                  <span>Open the chemical-industry case studies in Selected work.</span>
                </button>
              </li>
            </ul>
          </div>
        </section>

        <section id="ventures" className="band band-ink">
          <div className="wrap">
            <div className="section-head">
              <h2 className="section-title">Ventures</h2>
              <p>Platforms, services and research I have built, with their current status.</p>
            </div>
            <div className="parent">
              <img src="/images/atronus-logo.png" alt="" width={56} height={67} />
              <div>
                <h3>Atronus Technologies</h3>
                <p>The technology brand of OmniServe Texas LLC, founded in Houston in 2023. My platforms, advisory practices and research are built and run under it.</p>
              </div>
              <a href="https://atronus.com" target="_blank" rel="noopener noreferrer">atronus.com <ArrowUpRight size={14} aria-hidden /></a>
            </div>
            <div className="featured">
              <div>
                <span className="v-status s-live">Live · try it now</span>
                <h3>AI &amp; Automation Assessment</h3>
                <p>
                  A conversational assessment I built for OmniServe Texas. Answer a few questions about how your business
                  runs and get an automation-readiness score straight away, with a detailed report available.
                </p>
              </div>
              <a className="btn btn-solid" href="https://omniservetexas.com/assessment-agent" target="_blank" rel="noopener noreferrer">
                Start the assessment <ArrowUpRight size={16} aria-hidden />
              </a>
            </div>
            <ul className="ventures">
              {ventures.map((v) => {
                const inner = (
                  <>
                    <span className="v-mark" aria-hidden>
                      {v.logo ? (
                        <img src={v.logo} alt="" />
                      ) : ventureIcons[v.name] ? (
                        (() => { const I = ventureIcons[v.name]; return <I size={24} strokeWidth={1.6} className="v-icon" />; })()
                      ) : (
                        <span>{v.mono}</span>
                      )}
                    </span>
                    <span className="v-body">
                      <span className="v-name">{v.name}</span>
                      <span className="v-what">{v.what}</span>
                    </span>
                    <span className={`v-status s-${v.status.replace(' ', '-').toLowerCase()}`}>{v.status}</span>
                  </>
                );
                return (
                  <li key={v.name}>
                    {v.href ? (
                      <a className="venture" href={v.href} target="_blank" rel="noopener noreferrer" aria-label={`${v.name}, ${v.status}. Opens in a new tab`}>{inner}</a>
                    ) : (
                      <div className="venture">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section id="experience" className="band band-paper">
          <div className="wrap exp-grid">
            <div>
              <h2 className="section-title">Experience</h2>
              <p className="side-note">Most recent first.</p>
              <a className="text-link" href="/Dinku_Adale_Resume.pdf" download><Download size={16} aria-hidden /> Download the full CV (PDF)</a>
            </div>
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.role + e.when}>
                  <span className="t-when">{e.when}</span>
                  <h3>{e.role}</h3>
                  <p className="t-org">{e.org}</p>
                  <p>{e.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="education" className="band band-white">
          <div className="wrap">
            <h2 className="section-title">Education and credentials</h2>
            <div className="edu-grid">
              <article className="degree degree-feature">
                <h3>Master of Computer Science</h3>
                <p className="d-org">Howard University, Washington, DC · 2011</p>
                <p>
                  Thesis: <cite>Hybrid Information Security Models: Crypto-Steg and Steg-Crypto Systems</cite>.
                  Award-recognized and published by ProQuest (UMI 1490521). Served as a teaching assistant and system
                  administrator throughout the program.
                </p>
              </article>
              <article className="degree">
                <h3>Master of Business Administration</h3>
                <p className="d-org">Western Governors University</p>
              </article>
              <article className="degree">
                <h3>B.S. Industrial Chemistry</h3>
                <p className="d-org">Addis Ababa University</p>
              </article>
              <article className="degree certs">
                <h3>Certifications and training</h3>
                <ul>
                  <li>Machine Learning, Duke University (Coursera)</li>
                  <li>Splunk</li>
                  <li>Tableau</li>
                  <li>CompTIA A+</li>
                  <li>AIGP (IAPP), in progress</li>
                  <li>CISSP, in progress</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="insights" className="band band-paper">
          <div className="wrap">
            <div className="section-head">
              <h2 className="section-title">Insights</h2>
              <p>Articles, research and notes on secure AI, enterprise systems and industrial quality. New pieces are added here as they are published.</p>
            </div>
            <ul className="insights">
              {insights.map((i) => (
                <li key={i.title}>
                  <span className="in-kind">{i.kind}</span>
                  <h3>{i.title}</h3>
                  <p className="in-where">{i.where}</p>
                  <p>{i.summary}</p>
                  {i.href && (
                    <a href={i.href} target="_blank" rel="noopener noreferrer">
                      {i.linkLabel ?? 'Read more'} <ArrowUpRight size={14} aria-hidden />
                    </a>
                  )}
                </li>
              ))}
              <li className="in-next">
                <span className="in-kind">Coming next</span>
                <h3>More articles and blog posts</h3>
                <p>Follow along on LinkedIn for new writing as it is published.</p>
                <a href="https://www.linkedin.com/in/dinkuadale/" target="_blank" rel="noopener noreferrer">
                  Follow on LinkedIn <ArrowUpRight size={14} aria-hidden />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="contact" className="band band-ink contact">
          <div className="wrap contact-grid">
            <h2 className="section-title">Let’s talk</h2>
            <div>
              <p>
                I’m open to technology leadership roles, enterprise security and AI architecture engagements, and
                partnerships with the ventures above.
              </p>
              <div className="hero-actions">
                <a className="btn btn-solid" href="mailto:info@atronus.com"><Mail size={16} aria-hidden /> info@atronus.com</a>
                <a className="btn btn-line" href="/Dinku_Adale_Resume.pdf" download><Download size={16} aria-hidden /> CV (PDF)</a>
                <a className="btn btn-line" href="https://www.linkedin.com/in/dinkuadale/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} aria-hidden /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a href="#top" className={showTop ? 'to-top is-visible' : 'to-top'} aria-label="Back to top" tabIndex={showTop ? 0 : -1}>
        <ArrowUp size={18} aria-hidden />
      </a>

      <footer className="foot">
        <div className="wrap foot-row">
          <span>© {new Date().getFullYear()} Dinku Adale</span>
          <span>Houston, Texas</span>
        </div>
      </footer>
    </>
  );
}
