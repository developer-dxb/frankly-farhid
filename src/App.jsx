import React, { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight, Mail, Phone, Instagram, Linkedin, Facebook,
  Youtube, MapPin, TrendingUp, Megaphone, FileText, Landmark,
  Sparkles, Cpu, Code2, Video, Menu, X, ExternalLink, Camera, Palette, Wand2, Play,
} from "lucide-react";

/* ---------------------------------------------------------
   CONTACT CONSTANTS
--------------------------------------------------------- */
const WHATSAPP_NUMBER = "971544213231";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi Farhid — I came across your portfolio and would like to talk about a project."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const HERO_BG = "/images/hero-farhid.jpg";

const RESUME_PHOTO = "/images/resume-farhid.jpg";

// Official brand logo assets
const LOGO_WORDMARK = "/images/logo-wordmark.png";
const LOGO_ICON = "/images/logo-icon.png";
const LOGO_LOCKUP = "/images/logo-lockup.png";

/* ---------------------------------------------------------
   REAL WHATSAPP GLYPH (drawn, not the trademarked artwork —
   the familiar phone-in-bubble silhouette, in brand colors)
--------------------------------------------------------- */
function WhatsAppIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 4C9.4 4 4 9.4 4 16c0 2.2.6 4.3 1.7 6.1L4 28l6.1-1.6A11.9 11.9 0 0 0 16 28c6.6 0 12-5.4 12-12S22.6 4 16 4Z"
        fill="currentColor"
      />
      <path
        d="M12.1 10.6c-.3-.6-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .5-.3.4-1.3 1.2-1.3 3 0 1.8 1.3 3.5 1.5 3.7.2.3 2.5 4 6.2 5.5 3 1.2 3.6 1 4.3.9.7-.1 2.2-.9 2.5-1.7.3-.9.3-1.6.2-1.7-.1-.2-.4-.3-.8-.5-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.5-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.2-2.2-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.3 0-.5 0-.7-.1-.2-.8-2-1.1-2.7Z"
        fill="#0B0B0C"
      />
    </svg>
  );
}

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */
const STATS = [
  { value: 9, prefix: "", suffix: "+", label: "Years across marketing & business planning" },
  { value: 400, prefix: "", suffix: "+", label: "Startup business plans delivered" },
  { value: 1, prefix: "AED ", suffix: "M+", label: "Ad budgets handled across campaigns" },
  { value: 5, prefix: "", suffix: "\u00d7", label: "Peak ROAS (return on ad spend) generated" },
  { value: 4, prefix: "", suffix: "", label: "Markets — UAE, UK, Portugal, India" },
  { value: 50, prefix: "", suffix: "+", label: "Brands managed" },
];

const SERVICES = [
  { icon: TrendingUp, title: "Performance Marketing & Lead Generation", desc: "Meta and Google Ads campaigns built, tested, and optimized for real lead volume — not vanity metrics. Full funnel from ad to CRM." },
  { icon: Cpu, title: "AI & Automation Consultation and Implementation", desc: "Helping businesses fold AI and automation into actual day-to-day workflows — from strategy through hands-on implementation, not just the pitch deck." },
  { icon: Code2, title: "Apps, Websites & Software Solutions", desc: "Complete end-to-end builds — from choosing the right domain to handing over every development credential, so clients keep full ownership of their own assets, unlike most developers." },
  { icon: Video, title: "Scripting, Videography, Editing — End-to-End Video Creation", desc: "Scripted, shot, and edited content crafted to the latest trends — built to perform as both paid ads and organic posts across social and YouTube." },
  { icon: Megaphone, title: "Content & Social Media Management", desc: "Scripts, shoots, edits, and posting calendars that keep a brand's feed alive, on-message, and consistent month over month." },
  { icon: FileText, title: "SEO Content Curation and Online Reputation Management", desc: "Search engine and LLM rankings, Google My Business, video ranking, reviews management, and app rankings — the full discoverability and reputation stack." },
  { icon: Landmark, title: "Business Plans & Financial Modeling", desc: "Investor- and endorsement-ready business plans with full financial projections, built for founders across every industry." },
  { icon: Sparkles, title: "UK Innovator Business Founder Visa & Portugal D2 Visa", desc: "End-to-end service that carries through to Permanent Residency or passport — covering the business plan, application, and every stage after, not just the initial submission." },
];

const CASE_STUDIES = [
  { name: "Lodha Group", tag: "Lead Generation & Social Media" },
  { name: "Uddayan Aviation Academy", tag: "Paid Media & Content Strategy" },
  { name: "Synergy Properties", tag: "Performance Marketing" },
  { name: "TMB — The Marketing Boutique", tag: "Brand & Digital Strategy" },
  { name: "Intellectworks", tag: "UK Startup Visa Business Plans" },
];

// Client companies worked with
const LOGOS = [
  { name: "Baker & Co. Associates" },
  { name: "Royal Pearl Real Estate" },
  { name: "Nexus Capital" },
  { name: "Refinitiv (LSEG)" },
  { name: "Synergy Properties" },
  { name: "Abstract Digital World" },
  { name: "Akbar Travels" },
];

// Full work history, from Frank's CV
const EXPERIENCE = [
  { role: "Marketing Manager & Business Planner", org: "Baker & Co. Associates", period: "Sept 2024 — Present", points: [
    "Deployed marketing campaigns across Paid Ads, Social Media, Website, Landing Pages, and WhatsApp for targeted results.",
    "Coordinated with the tech team on Website, SEO, CRM, WordPress, CMS, and Email Forwarding.",
    "Analyzed campaign metrics and aligned marketing strategy with business plans for clients immigrating on a business visa.",
  ]},
  { role: "Marketing Manager", org: "Royal Pearl Real Estate", period: "Apr 2023 — Sept 2024", points: [
    "Deployed diverse marketing campaigns across Paid Ads, Social Media, Website, Landing Pages, and WhatsApp.",
    "Coordinated with the tech team on Website, SEO, CRM, WordPress, CMS, and Email Forwarding.",
    "Analyzed campaign metrics for insights, aligning with organizational goals.",
  ]},
  { role: "Sr. Marketing Manager", org: "Nexus Capital Real Estate Dubai", period: "May 2022 — Apr 2023", points: [
    "Utilized Paid Ads, Social Media, Website, Landing Pages, and WhatsApp channels.",
    "Monitored and optimized the marketing budget quarterly and annually.",
    "Planned and created marketing collateral — social media, paid-ad creatives, brochures.",
    "Analyzed performance metrics to implement effective lead-conversion strategies.",
    "Identified the latest trends and technologies affecting the company's ecosystem.",
  ]},
  { role: "Campaign Manager", org: "Refinitiv, an LSEG business", period: "March 2022 — Present", points: [
    "Optimized the Zawya website traffic flow and monthly engagement.",
    "Delivered results against goals defined by the Performance Manager.",
  ]},
  { role: "Marketing Manager", org: "Synergy.Properties", period: "May 2021 — May 2022", points: [
    "Ran aggressive marketing campaigns across Meta, Google Ads, and LinkedIn Ads.",
    "Created marketing collateral consistently and automated the monthly social media calendar.",
    "Experimented with organic and paid acquisition channels to increase productivity.",
    "Coordinated with the IT team to automate the lead generation funnel.",
  ]},
  { role: "Production Lead & UK Startup Consultant", org: "Devisers Immigration Advisers", period: "Nov 2019 — May 2021", points: [
    "Led the business plan production department for the UK Business Visa process.",
    "Created innovative business ideas across Crypto, Immersive Technology, and AI/ML industries.",
    "Researched startup ideas and developed pitch decks for endorsement bodies and the UK Home Office.",
    "Cleared a backlog of 400+ startup business plans and addressed due diligence.",
  ]},
  { role: "Content Management & Digital Marketing Specialist", org: "Abstract Digital World", period: "Jan 2019 — Nov 2019", points: [
    "Managed the digital marketing department and content curation activities.",
    "Delivered content marketing and digital solutions for 15+ clients while generating maximum ROI.",
  ]},
  { role: "Content Writer & SEO Analyst", org: "Akbar Travels Online", period: "Jul 2018 — Jan 2019", points: [
    "Improved website landing page rankings to 3rd position on Google SERPs.",
    "Created 150+ SEO-optimized blogs and landing pages.",
    "Implemented link building, website optimization, and keyword research best practices.",
  ]},
  { role: "Administrator & Educator", org: "Rizvi Coaching Institute", period: "Jun 2017 — Jul 2018", points: [
    "Handled correspondence, exams, and academic meetings.",
    "Managed staff and conducted interviews for recruitment of lecturers and teachers.",
  ]},
];

const SKILLS_EXPERTISE = [
  "Content Curation & Management", "Market Entry Strategy & Branding", "Recruitment & Selection",
  "Marketing Plan & Reporting", "Sales Pipeline Optimization", "Innovation & Research",
  "Business Development", "SEO", "SEM",
];

const SKILLS_TOOLS = [
  "CRM Software & Email Marketing", "Marketing Automation", "Google Ads & Analytics",
  "Microsoft Office", "HR & IT Support", "Graphic Design", "Photography", "Content Management Systems",
];

const LANGUAGES = [
  { name: "English", level: "Native / Bilingual" },
  { name: "Hindi", level: "Native / Bilingual" },
  { name: "Marathi", level: "Fluent" },
  { name: "Urdu", level: "Fluent" },
];

const EDUCATION = [
  { school: "University of Mumbai", degree: "BMM — Marketing & Advertisement Major", period: "2014 — 2018" },
  { school: "RST Junior College", degree: "HSC, Science", period: "2012 — 2014" },
];

const FREELANCE_PROJECTS = [
  { name: "TMB-me.com", desc: "Delivered bespoke digital marketing and business development solutions." },
  { name: "Intellectworks.co.uk", desc: "Conceptualized and developed business plans for expats pursuing UK startup visas." },
];

const NEW_SLOTS = 3;

// Real prototype platforms Frank conceptualized, business-planned, and
// helped build/consult on for founders taking these to market.
const PROJECTS = [
  {
    name: "Neeyat",
    tagline: "AI-powered ethical commerce intelligence for more confident purchase decisions.",
    tag: "Business Plan · Prototype Build · Ongoing Consultation",
    url: "https://malihazohebuk-neeyat.github.io/neeyat-web-app/",
  },
  {
    name: "HealtHives",
    tagline: "Connecting diaspora communities with culturally aligned, GMC-verified doctors across the UK.",
    tag: "Business Plan · Prototype Build · Ongoing Consultation",
    url: "https://healthives.com/",
  },
  {
    name: "OUTVUE",
    tagline: "The UK's first AI-driven growth-spend intelligence platform, automating blended ROI attribution.",
    tag: "Business Plan · Prototype Build · Ongoing Consultation",
    url: "https://www.outvue.io/",
  },
];

// Real edited/produced video shorts
const VIDEOS = [
  { id: "NOQX40dCMDc", label: "Edited Short — Content Production" },
  { id: "GuGSESnhuME", label: "Edited Short — Social Storytelling" },
  { id: "zHUiNzNjqcg", label: "Edited Short — Brand Content" },
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/farhid_shah/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/farhidshaikh/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/farhidshah/" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

// Real Instagram grid snippets — client accounts Frank manages content for
const IG_GRIDS = [
  {
    handle: "bakerandco_associates",
    name: "Baker & Co. Associates",
    url: "https://www.instagram.com/bakerandco_associates/",
    img: "/images/instagram-baker.jpg",
  },
  {
    handle: "snsluxuryproperties",
    name: "SNS Luxury Properties",
    url: "https://www.instagram.com/snsluxuryproperties/",
    img: "/images/instagram-sns-luxury.jpg",
  },
  {
    handle: "royalpearlre",
    name: "Royal Pearl Real Estate",
    url: "https://www.instagram.com/royalpearlre/",
    img: "/images/instagram-royal-pearl.jpg",
  },
];

/* ---------------------------------------------------------
   SCROLL-REVEAL HOOK
--------------------------------------------------------- */
function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, shown] = useReveal();
  return (
    <div
      ref={ref}
      className={`ff-reveal-wrap ${shown ? "is-shown" : ""} ${className}`}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function StatCounter({ value, prefix = "", suffix = "" }) {
  const [ref, shown] = useReveal();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!shown) return;
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) { setDisplay(value); return; }
    let start = null;
    const duration = 1400;
    let raf;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => raf && cancelAnimationFrame(raf);
  }, [shown, value]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

function Blob({ variant = "gold", style }) {
  return <div className={`ff-blob ff-blob--${variant}`} style={style} aria-hidden="true" />;
}

/* ---------------------------------------------------------
   WHATSAPP FLOATING BUTTON
--------------------------------------------------------- */
function WhatsAppButton() {
  return (
    <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="ff-whatsapp" aria-label="Chat with Farhid on WhatsApp">
      <WhatsAppIcon size={26} />
      <span className="ff-whatsapp__ring" aria-hidden="true" />
    </a>
  );
}

/* ---------------------------------------------------------
   SHARED UI
--------------------------------------------------------- */
function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = ["Home", "Services", "Case Studies", "Resume", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (label) => {
    setPage(label.toLowerCase().replace(" ", "-"));
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className={`ff-nav ${scrolled ? "ff-nav--solid" : ""}`}>
      <div className="ff-nav__inner">
        <button className="ff-logo" onClick={() => go("Home")} aria-label="Frankly Farhid — home">
          <img src={LOGO_WORDMARK} alt="Frankly Farhid" />
        </button>
        <nav className="ff-nav__links" aria-label="Primary">
          {items.map((it) => (
            <button
              key={it}
              className={`ff-nav__link ${page === it.toLowerCase().replace(" ", "-") ? "is-active" : ""}`}
              onClick={() => go(it)}
              aria-current={page === it.toLowerCase().replace(" ", "-") ? "page" : undefined}
            >
              {it}
            </button>
          ))}
        </nav>
        <button className="ff-nav__burger" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="ff-nav__mobile" aria-label="Mobile">
          {items.map((it) => <button key={it} onClick={() => go(it)}>{it}</button>)}
        </nav>
      )}
    </header>
  );
}

function Footer({ setPage }) {
  return (
    <footer className="ff-footer">
      <div className="ff-footer__top">
        <div>
          <div className="ff-logo ff-logo--footer">
            <img src={LOGO_LOCKUP} alt="Frankly Farhid — Marketing Expert & Business Planner" />
          </div>
          <p>Farhid Shaikh — Marketing Expert &amp; Business Planner, Dubai.</p>
        </div>
        <div className="ff-footer__socials">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}><s.icon size={18} /></a>
          ))}
        </div>
      </div>
      <div className="ff-footer__bottom">
        <span className="ff-footer__copy"><img src={LOGO_ICON} alt="" className="ff-footer__mark" aria-hidden="true" /> © {new Date().getFullYear()} Farhid Shaikh. All rights reserved.</span>
        <button onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>Let's talk →</button>
      </div>
    </footer>
  );
}

function SectionLabel({ children }) {
  return <div className="ff-section-label">{children}</div>;
}

function CtaButton({ as = "button", href, onClick, children, large, target, rel }) {
  const Tag = as;
  const props = as === "a" ? { href, target, rel } : { onClick };
  return (
    <Tag className={`ff-cta ${large ? "ff-cta--lg" : ""}`} {...props}>
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------
   HOME
--------------------------------------------------------- */
function Home({ setPage }) {
  const headlineRef = useRef(null);
  useEffect(() => { headlineRef.current?.classList.add("ff-reveal"); }, []);

  return (
    <>
      <section className="ff-hero" style={{ backgroundImage: `url(${HERO_BG})` }}>
        <div className="ff-hero__scrim" aria-hidden="true" />
        <div className="ff-hero__bg" aria-hidden="true" />
        <Blob variant="gold" style={{ top: "-8%", right: "-6%", width: 380, height: 380 }} />
        <Blob variant="gold-faint" style={{ bottom: "-12%", left: "-8%", width: 300, height: 300 }} />
        <div className="ff-hero__inner">
          <SectionLabel><Sparkles size={13} /> Marketing Expert &amp; Business Planner — Dubai, UAE</SectionLabel>
          <h1 ref={headlineRef} className="ff-hero__headline">
            I build the growth engine and the paperwork that gets you there.
          </h1>
          <p className="ff-hero__sub">
            Nine years running performance marketing, content, and full-scale business
            plans for founders relocating on the UK Innovator Founder and Portugal D2
            routes — plus everyone else who just wants their marketing to actually work.
          </p>
          <div className="ff-hero__cta">
            <CtaButton onClick={() => { setPage("case-studies"); window.scrollTo(0, 0); }}>See the work</CtaButton>
            <CtaButton onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>Start a project</CtaButton>
          </div>
        </div>
      </section>

      <section className="ff-stats" aria-label="Track record">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="ff-stat">
              <div className="ff-stat__value">
                <StatCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="ff-stat__label">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="ff-marquee" aria-label="Companies worked with">
        <div className="ff-marquee__track">
          {[...Array(2)].map((_, i) => (
            <div className="ff-marquee__group" key={i}>
              {LOGOS.map((l) => <span key={l.name + i}>{l.name}</span>)}
            </div>
          ))}
        </div>
      </section>

      <section className="ff-teaser">
        <Reveal>
          <div className="ff-teaser__head">
            <SectionLabel><Wand2 size={13} /> What I do</SectionLabel>
            <h2>Six disciplines. One person who actually connects them.</h2>
          </div>
        </Reveal>
        <div className="ff-teaser__grid">
          {SERVICES.slice(0, 3).map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="ff-teaser__card">
                <s.icon size={22} strokeWidth={1.5} aria-hidden="true" />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <button className="ff-link-btn" onClick={() => { setPage("services"); window.scrollTo(0, 0); }}>
          View all services <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </section>

      <ProjectsSection compact />
      <VideoSection compact />
      <InstagramSection compact />

      <CTAStrip setPage={setPage} />
    </>
  );
}

/* ---------------------------------------------------------
   SERVICES
--------------------------------------------------------- */
function Services({ setPage }) {
  return (
    <>
      <section className="ff-page-hero">
        <Blob variant="gold-faint" style={{ top: "-4%", right: "2%", width: 260, height: 260 }} />
        <SectionLabel><Palette size={13} /> Services</SectionLabel>
        <h1>Full-stack marketing, minus the six different vendors.</h1>
        <p>From the ad account to the endorsement-body-ready business plan — one person who understands how the pieces fit together.</p>
      </section>

      <section className="ff-services-list">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 70}>
            <div className="ff-service-row">
              <div className="ff-service-row__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</div>
              <div className="ff-service-row__icon"><s.icon size={26} strokeWidth={1.4} aria-hidden="true" /></div>
              <div className="ff-service-row__body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <CTAStrip setPage={setPage} />
    </>
  );
}

/* ---------------------------------------------------------
   PROJECTS (web development)
--------------------------------------------------------- */
function ProjectsSection({ compact }) {
  return (
    <section className="ff-projects">
      <Reveal>
        <div className="ff-teaser__head">
          <SectionLabel><ExternalLink size={13} /> Platforms I've built &amp; consult on</SectionLabel>
          <h2>From business plan to working prototype.</h2>
          <p className="ff-projects__intro">
            Conceptualized, business-planned, and prototyped end to end — with ongoing
            consultation as each founder moves toward launch.
          </p>
        </div>
      </Reveal>
      <div className="ff-projects__grid">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <a className="ff-project-card" href={p.url} target="_blank" rel="noreferrer">
              <div className="ff-project-card__glow" aria-hidden="true" />
              <div className="ff-project-card__top">
                <span className="ff-project-card__tag">{p.tag}</span>
                <ExternalLink size={16} aria-hidden="true" />
              </div>
              <h3>{p.name}</h3>
              <p>{p.tagline}</p>
              <span className="ff-project-card__visit">Visit live site <ArrowUpRight size={14} /></span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   VIDEO
--------------------------------------------------------- */
function VideoSection({ compact }) {
  const list = VIDEOS;
  return (
    <section className="ff-video-section">
      <Reveal>
        <div className="ff-teaser__head">
          <SectionLabel><Camera size={13} /> On camera</SectionLabel>
          <h2>Content, edited and produced by me.</h2>
        </div>
      </Reveal>
      <div className="ff-video-grid">
        {list.map((v, i) => (
          <Reveal key={v.id} delay={i * 100}>
            <a
              className="ff-video-card"
              href={`https://www.youtube.com/shorts/${v.id}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="ff-video-card__thumb">
                <span className="ff-video-card__glow" aria-hidden="true" />
                <span className="ff-video-card__play" aria-hidden="true"><Play size={20} fill="currentColor" /></span>
                <span className="ff-video-card__watch">Watch on YouTube</span>
              </div>
              <span className="ff-video-card__label">{v.label}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   INSTAGRAM (placeholder grid — see note in chat)
--------------------------------------------------------- */
function InstagramSection({ compact }) {
  return (
    <section className="ff-insta">
      <Reveal>
        <div className="ff-teaser__head">
          <SectionLabel><Instagram size={13} /> Social & content grids</SectionLabel>
          <h2>Feed strategy across client accounts.</h2>
          <p className="ff-projects__intro">
            Real grids from three accounts I manage content and strategy for.
          </p>
        </div>
      </Reveal>
      <div className="ff-insta__grid">
        {IG_GRIDS.map((g, i) => (
          <Reveal key={g.handle} delay={i * 100}>
            <a className="ff-insta__tile" href={g.url} target="_blank" rel="noreferrer">
              <img src={g.img} alt={`Instagram grid preview for ${g.name}`} loading="lazy" />
              <div className="ff-insta__tile-fade" aria-hidden="true" />
              <div className="ff-insta__tile-label">
                <span className="ff-insta__tile-name">{g.name}</span>
                <span className="ff-insta__tile-handle">@{g.handle}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   CASE STUDIES PAGE
--------------------------------------------------------- */
function CaseStudies({ setPage }) {
  return (
    <>
      <section className="ff-page-hero">
        <Blob variant="gold-faint" style={{ top: "-2%", right: "4%", width: 240, height: 240 }} />
        <SectionLabel><Sparkles size={13} /> Case Studies</SectionLabel>
        <h1>Recent work is being documented properly.</h1>
        <p>The most current projects — the ones I'm proudest of — are being written up as full case studies with real numbers. In the meantime, here's where I've delivered work, the platforms I've built, and the video library that backs it up.</p>
      </section>

      <section className="ff-cases-grid">
        {CASE_STUDIES.map((c, i) => (
          <Reveal key={c.name} delay={i * 60}>
            <div className="ff-case-card">
              <div className="ff-case-card__tag">{c.tag}</div>
              <h3>{c.name}</h3>
              <p>Full write-up coming soon.</p>
            </div>
          </Reveal>
        ))}
        {[...Array(NEW_SLOTS)].map((_, i) => (
          <Reveal key={`new-${i}`} delay={(CASE_STUDIES.length + i) * 60}>
            <div className="ff-case-card ff-case-card--empty">
              <div className="ff-case-card__tag">New project</div>
              <h3>Coming soon</h3>
              <p>Reserved for a recent highlight.</p>
            </div>
          </Reveal>
        ))}
      </section>

      <ProjectsSection />
      <VideoSection />
      <InstagramSection />

      <CTAStrip setPage={setPage} />
    </>
  );
}

/* ---------------------------------------------------------
   RESUME
--------------------------------------------------------- */
function Resume({ setPage }) {
  return (
    <>
      <section className="ff-resume-hero">
        <Blob variant="gold-faint" style={{ top: "-6%", right: "0%", width: 300, height: 300 }} />
        <div className="ff-resume-hero__grid">
          <Reveal>
            <div className="ff-resume-photo">
              <img src={RESUME_PHOTO} alt="Farhid Shaikh" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="ff-resume-hero__body">
              <SectionLabel><Sparkles size={13} /> Resume</SectionLabel>
              <h1>Farhid Shaikh</h1>
              <p className="ff-resume-hero__title">Marketing Expert &amp; Business Planner</p>
              <p className="ff-resume-hero__bio">
                Nine years of progressive experience across Real Estate, Fashion &amp; Leisure, and
                immigration-linked business planning — spanning Business Planning &amp; Analysis, AI &amp;
                Automation, Project Management, and Performance Marketing &amp; Lead Generation. Based in
                Dubai, UAE, with prior roles across companies in India.
              </p>
              <div className="ff-resume-hero__contact">
                <a href="mailto:farhidshah@gmail.com"><Mail size={16} /> farhidshah@gmail.com</a>
                <a href="tel:+971544213231"><Phone size={16} /> +971 544 213231</a>
                <span><MapPin size={16} /> Dubai, UAE</span>
              </div>
              <CtaButton onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>Get in touch</CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ff-resume-section">
        <Reveal>
          <div className="ff-teaser__head">
            <SectionLabel><Landmark size={13} /> Work Experience</SectionLabel>
            <h2>Nine years, nine roles, one throughline.</h2>
          </div>
        </Reveal>
        <div className="ff-timeline">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.role + job.org} delay={i * 60}>
              <div className="ff-timeline__item">
                <div className="ff-timeline__dot" aria-hidden="true" />
                <div className="ff-timeline__content">
                  <div className="ff-timeline__top">
                    <h3>{job.role}</h3>
                    <span className="ff-timeline__period">{job.period}</span>
                  </div>
                  <p className="ff-timeline__org">{job.org}</p>
                  <ul>
                    {job.points.map((pt, j) => <li key={j}>{pt}</li>)}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="ff-resume-section">
        <Reveal>
          <div className="ff-teaser__head">
            <SectionLabel><Sparkles size={13} /> Skills &amp; Languages</SectionLabel>
            <h2>The toolkit behind the work.</h2>
          </div>
        </Reveal>
        <div className="ff-skills-grid">
          <Reveal delay={0}>
            <div className="ff-skills-card">
              <h3>Expertise</h3>
              <div className="ff-tag-list">
                {SKILLS_EXPERTISE.map((s) => <span key={s} className="ff-tag">{s}</span>)}
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="ff-skills-card">
              <h3>Tools</h3>
              <div className="ff-tag-list">
                {SKILLS_TOOLS.map((s) => <span key={s} className="ff-tag">{s}</span>)}
              </div>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="ff-skills-card">
              <h3>Languages</h3>
              <div className="ff-lang-list">
                {LANGUAGES.map((l) => (
                  <div className="ff-lang-row" key={l.name}>
                    <span>{l.name}</span>
                    <span className="ff-lang-level">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ff-resume-section">
        <Reveal>
          <div className="ff-teaser__head">
            <SectionLabel><FileText size={13} /> Education &amp; Freelance</SectionLabel>
            <h2>Where it started, and what ran alongside it.</h2>
          </div>
        </Reveal>
        <div className="ff-edu-grid">
          <Reveal delay={0}>
            <div className="ff-edu-card">
              <h3>Education</h3>
              {EDUCATION.map((e) => (
                <div className="ff-edu-row" key={e.school}>
                  <div>
                    <p className="ff-edu-school">{e.school}</p>
                    <p className="ff-edu-degree">{e.degree}</p>
                  </div>
                  <span className="ff-edu-period">{e.period}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="ff-edu-card">
              <h3>Freelance Highlights</h3>
              {FREELANCE_PROJECTS.map((p) => (
                <div className="ff-freelance-row" key={p.name}>
                  <p className="ff-edu-school">{p.name}</p>
                  <p className="ff-edu-degree">{p.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTAStrip setPage={setPage} />
    </>
  );
}

/* ---------------------------------------------------------
   CONTACT
--------------------------------------------------------- */
function Contact() {
  return (
    <>
      <section className="ff-page-hero">
        <Blob variant="gold-faint" style={{ top: "-4%", left: "2%", width: 220, height: 220 }} />
        <SectionLabel><Mail size={13} /> Contact</SectionLabel>
        <h1>Tell me what you're building.</h1>
        <p>Marketing campaign, business plan, visa application, or all three — happy to talk it through.</p>
      </section>

      <section className="ff-contact-grid">
        <Reveal>
          <div className="ff-contact-info">
            <a className="ff-contact-row" href="mailto:farhidshah@gmail.com"><Mail size={20} aria-hidden="true" /><span>farhidshah@gmail.com</span></a>
            <a className="ff-contact-row" href="tel:+971544213231"><Phone size={20} aria-hidden="true" /><span>+971 544 213231</span></a>
            <a className="ff-contact-row" href={WHATSAPP_LINK} target="_blank" rel="noreferrer"><WhatsAppIcon size={20} /><span>Chat on WhatsApp</span></a>
            <div className="ff-contact-row ff-contact-row--static"><MapPin size={20} aria-hidden="true" /><span>Dubai, United Arab Emirates</span></div>
            <div className="ff-contact-socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}><s.icon size={18} aria-hidden="true" /><span>{s.label}</span></a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form className="ff-contact-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="ff-name">Name<input id="ff-name" type="text" placeholder="Your name" required /></label>
            <label htmlFor="ff-email">Email<input id="ff-email" type="email" placeholder="you@company.com" required /></label>
            <label htmlFor="ff-message">What do you need help with?<textarea id="ff-message" rows={4} placeholder="Marketing, business plan, visa application..." required /></label>
            <CtaButton as="button">Send message</CtaButton>
            <p className="ff-contact-form__note">Form is a preview — wire this to Formspree or a similar service once the site is live.</p>
          </form>
        </Reveal>
      </section>
    </>
  );
}

/* ---------------------------------------------------------
   SHARED CTA
--------------------------------------------------------- */
function CTAStrip({ setPage }) {
  return (
    <section className="ff-cta-strip">
      <Blob variant="gold-faint" style={{ top: "-20%", left: "30%", width: 420, height: 420 }} />
      <Reveal><h2>Ready to build the next thing?</h2></Reveal>
      <Reveal delay={100}>
        <div className="ff-cta-strip__actions">
          <CtaButton large onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>Get in touch</CtaButton>
          <CtaButton as="a" large href={WHATSAPP_LINK} target="_blank" rel="noreferrer">WhatsApp me</CtaButton>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------------------------------------------------
   APP
--------------------------------------------------------- */
export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="ff-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --ink: #0b0b0c;
          --ink-soft: #24242a;
          --paper: #fbfaf7;
          --paper-dim: #f0eee7;
          --gold: #b8912f;
          --gold-light: #e3c777;
          --gold-deep: #8f6f1f;
          --muted: #6b6b70;
          --line: rgba(11,11,12,0.12);
          --line-on-dark: rgba(251,250,247,0.14);
        }

        .ff-root { font-family: 'Inter', sans-serif; background: var(--paper); color: var(--ink); overflow-x: hidden; position: relative; }
        .ff-root *, .ff-root *::before, .ff-root *::after { box-sizing: border-box; }
        .ff-root h1, .ff-root h2, .ff-root h3 { font-family: 'Playfair Display', serif; margin: 0; letter-spacing: -0.005em; font-weight: 600; }
        .ff-root p { margin: 0; color: var(--muted); line-height: 1.65; }
        .ff-root button { font-family: 'Inter', sans-serif; cursor: pointer; border: none; background: none; }
        .ff-root a { color: inherit; text-decoration: none; }
        .ff-root :focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) {
          .ff-root * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
        }

        /* SCROLL REVEAL */
        .ff-reveal-wrap { opacity: 0; transform: translateY(22px); transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1); }
        .ff-reveal-wrap.is-shown { opacity: 1; transform: translateY(0); }

        /* DECORATIVE BLOBS */
        .ff-blob { position: absolute; border-radius: 50%; filter: blur(60px); pointer-events: none; z-index: 0; animation: ffFloat 9s ease-in-out infinite; }
        .ff-blob--gold { background: radial-gradient(circle, rgba(184,145,47,0.35), transparent 70%); }
        .ff-blob--gold-faint { background: radial-gradient(circle, rgba(184,145,47,0.14), transparent 70%); }
        @keyframes ffFloat { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-18px) scale(1.05); } }

        /* NAV */
        .ff-nav { position: sticky; top: 0; z-index: 60; background: transparent; transition: background 0.25s ease, border-color 0.25s ease; border-bottom: 1px solid transparent; }
        .ff-nav--solid { background: rgba(251,250,247,0.94); backdrop-filter: blur(10px); border-color: var(--line); }
        .ff-nav__inner { max-width: 1160px; margin: 0 auto; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; }
        .ff-logo { display: inline-flex; align-items: center; background: var(--paper); padding: 7px 14px; border-radius: 100px; box-shadow: 0 2px 10px rgba(11,11,12,0.08); transition: box-shadow 0.2s ease; }
        .ff-logo:hover { box-shadow: 0 4px 14px rgba(184,145,47,0.25); }
        .ff-logo img { height: 20px; width: auto; display: block; }
        .ff-logo--footer { background: none; padding: 0; box-shadow: none; margin-bottom: 12px; }
        .ff-logo--footer img { height: 34px; }
        .ff-nav__links { display: flex; gap: 4px; }
        .ff-nav__link { padding: 9px 16px; font-size: 14px; font-weight: 500; color: var(--ink-soft); border-radius: 2px; transition: color 0.15s; border-bottom: 1px solid transparent; position: relative; }
        .ff-nav__link:hover { color: var(--gold-deep); }
        .ff-nav__link.is-active { color: var(--ink); border-bottom-color: var(--gold); }
        .ff-nav__burger { display: none; color: var(--ink); }
        .ff-nav__mobile { display: none; }
        @media (max-width: 760px) {
          .ff-nav__links { display: none; }
          .ff-nav__burger { display: block; }
          .ff-nav__mobile { display: flex; flex-direction: column; padding: 8px 24px 20px; background: var(--paper); border-bottom: 1px solid var(--line); }
          .ff-nav__mobile button { text-align: left; padding: 13px 0; font-size: 16px; border-bottom: 1px solid var(--line); }
        }

        /* HERO */
        .ff-hero { position: relative; padding: 110px 24px 92px; overflow: hidden; background: var(--ink); color: var(--paper); background-size: cover; background-position: right center; background-repeat: no-repeat; }
        @media (max-width: 600px) { .ff-hero { padding: 84px 20px 64px; background-position: 78% center; } }
        .ff-hero__scrim { position: absolute; inset: 0; background: linear-gradient(100deg, rgba(11,11,12,0.97) 0%, rgba(11,11,12,0.92) 36%, rgba(11,11,12,0.62) 62%, rgba(11,11,12,0.28) 100%); }
        .ff-hero__bg { position: absolute; inset: 0; pointer-events: none; background: radial-gradient(circle at 82% 12%, rgba(184,145,47,0.18), transparent 55%), radial-gradient(circle at 8% 90%, rgba(184,145,47,0.08), transparent 50%); }
        .ff-hero__inner { max-width: 880px; margin: 0 auto; position: relative; z-index: 1; display: flex; flex-direction: column; }
        .ff-hero .ff-section-label { color: var(--gold-light); margin-bottom: 16px; }
        .ff-hero__headline { max-width: 660px; font-size: clamp(34px, 5.2vw, 60px); font-weight: 600; line-height: 1.16; margin: 0 0 22px; color: var(--paper); opacity: 0; transform: translateY(14px); text-wrap: balance; }
        .ff-hero__headline.ff-reveal { animation: ffRise 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }
        @keyframes ffRise { to { opacity: 1; transform: translateY(0); } }
        .ff-hero__sub { max-width: 520px; font-size: 17px; line-height: 1.7; margin: 0 0 38px; color: rgba(251,250,247,0.72); }
        .ff-hero__cta { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }

        .ff-section-label { font-size: 13px; font-weight: 600; color: var(--gold-deep); display: inline-flex; align-items: center; gap: 8px; margin-bottom: 2px; text-transform: uppercase; letter-spacing: 0.09em; }
        .ff-hero .ff-section-label svg { color: var(--gold-light); }

        /* UNIFIED CTA BUTTON — black bg, gold border, curved corners */
        .ff-cta {
          padding: 15px 32px; border-radius: 14px; font-size: 14.5px; font-weight: 600;
          background: var(--ink-soft); color: var(--gold-light); border: 1.75px solid var(--gold);
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          box-shadow: 0 4px 18px rgba(184,145,47,0.18), inset 0 1px 0 rgba(251,250,247,0.05);
          transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          position: relative;
        }
        .ff-cta:hover { background: var(--gold); color: var(--ink); border-color: var(--gold-light); box-shadow: 0 8px 26px rgba(184,145,47,0.4); }
        .ff-cta:active { transform: scale(0.97); }
        .ff-cta--lg { padding: 18px 40px; font-size: 15.5px; }

        /* STATS */
        .ff-stats { max-width: 1160px; margin: 0 auto; padding: 44px 24px 76px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px 16px; }
        .ff-stat { border-top: 2px solid var(--gold); padding-top: 16px; }
        .ff-stat__value { font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 600; color: var(--ink); font-variant-numeric: tabular-nums; }
        .ff-stat__label { font-size: 13px; color: var(--muted); margin-top: 6px; max-width: 18ch; }
        @media (max-width: 900px) { .ff-stats { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 560px) { .ff-stats { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 400px) { .ff-stats { grid-template-columns: 1fr; gap: 14px; } .ff-stat__label { max-width: none; } }

        /* MARQUEE */
        .ff-marquee { background: var(--ink); padding: 22px 0; overflow: hidden; border-top: 1px solid var(--line-on-dark); border-bottom: 1px solid var(--line-on-dark); }
        .ff-marquee__track { display: flex; width: max-content; animation: ffScroll 28s linear infinite; }
        .ff-marquee__group { display: flex; }
        .ff-marquee__group span { color: var(--gold-light); opacity: 0.75; font-size: 14.5px; font-weight: 500; letter-spacing: 0.02em; padding: 0 30px; white-space: nowrap; border-right: 1px solid var(--line-on-dark); }
        @keyframes ffScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* TEASER / GENERIC SECTIONS */
        .ff-teaser, .ff-video-section, .ff-projects, .ff-insta { max-width: 1160px; margin: 0 auto; padding: 84px 24px; position: relative; }
        .ff-teaser__head { max-width: 620px; margin-bottom: 42px; }
        .ff-teaser__head h2 { font-size: clamp(26px, 3.4vw, 38px); font-weight: 600; margin-top: 10px; }
        .ff-projects__intro { margin-top: 12px; font-size: 14.5px; }
        .ff-teaser__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); margin-bottom: 32px; border: 1px solid var(--line); }
        .ff-teaser__card { padding: 30px 26px; background: var(--paper); transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .ff-teaser__card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(11,11,12,0.08); z-index: 1; }
        .ff-teaser__card svg { color: var(--gold-deep); margin-bottom: 18px; }
        .ff-teaser__card h3 { font-size: 17.5px; font-weight: 600; margin-bottom: 9px; }
        .ff-teaser__card p { font-size: 14px; }
        @media (max-width: 760px) { .ff-teaser__grid { grid-template-columns: 1fr; } }

        .ff-link-btn { display: inline-flex; align-items: center; gap: 7px; font-weight: 600; font-size: 14.5px; color: var(--ink); border-bottom: 1px solid var(--gold); padding-bottom: 3px; transition: color 0.15s, gap 0.15s; }
        .ff-link-btn:hover { color: var(--gold-deep); gap: 11px; }

        /* PROJECTS (web dev) */
        .ff-projects__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .ff-project-card {
          position: relative; display: block; padding: 30px 26px; border-radius: 18px;
          background: var(--ink); color: var(--paper); overflow: hidden;
          border: 1px solid rgba(184,145,47,0.3); transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .ff-project-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(11,11,12,0.25); border-color: var(--gold); }
        .ff-project-card__glow { position: absolute; top: -40%; right: -20%; width: 200px; height: 200px; border-radius: 50%; background: radial-gradient(circle, rgba(184,145,47,0.3), transparent 70%); pointer-events: none; }
        .ff-project-card__top { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; color: var(--gold-light); margin-bottom: 18px; position: relative; }
        .ff-project-card__top svg { flex-shrink: 0; margin-top: 1px; }
        .ff-project-card__tag { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.85; max-width: 75%; }
        .ff-project-card h3 { font-size: 21px; font-weight: 600; margin-bottom: 10px; position: relative; color: var(--paper); }
        .ff-project-card p { font-size: 14px; color: rgba(251,250,247,0.68); position: relative; margin-bottom: 20px; }
        .ff-project-card__visit { display: inline-flex; align-items: center; gap: 6px; font-size: 13.5px; font-weight: 600; color: var(--gold-light); position: relative; }
        @media (max-width: 900px) { .ff-projects__grid { grid-template-columns: 1fr; } }

        /* VIDEO */
        .ff-video-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .ff-video-card { display: flex; flex-direction: column; gap: 10px; }
        .ff-video-card__thumb {
          position: relative; width: 100%; aspect-ratio: 9 / 16; border-radius: 16px; overflow: hidden;
          border: 1px solid rgba(184,145,47,0.3);
          background: linear-gradient(150deg, var(--ink-soft) 0%, var(--ink) 55%, #000 100%);
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .ff-video-card:hover .ff-video-card__thumb { box-shadow: 0 18px 36px rgba(11,11,12,0.22); transform: translateY(-3px); }
        .ff-video-card__glow {
          position: absolute; top: -20%; right: -20%; width: 60%; height: 60%; border-radius: 50%;
          background: radial-gradient(circle, rgba(184,145,47,0.3), transparent 70%); pointer-events: none;
        }
        .ff-video-card__play {
          position: relative; width: 52px; height: 52px; border-radius: 50%; background: rgba(184,145,47,0.16);
          border: 1.5px solid var(--gold-light); color: var(--gold-light);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .ff-video-card:hover .ff-video-card__play { background: var(--gold); color: var(--ink); transform: scale(1.08); }
        .ff-video-card__watch {
          position: relative; font-size: 12px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase;
          color: rgba(251,250,247,0.5);
        }
        .ff-video-card__label { font-size: 13.5px; font-weight: 500; color: var(--ink-soft); text-align: center; }
        @media (max-width: 760px) { .ff-video-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; } }
        @media (max-width: 480px) { .ff-video-grid { grid-template-columns: 1fr; max-width: 280px; margin: 0 auto; } }

        /* INSTAGRAM GRID TILES */
        .ff-insta__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .ff-insta__tile {
          position: relative; display: block; aspect-ratio: 1; border-radius: 18px; overflow: hidden;
          border: 1px solid rgba(184,145,47,0.35); transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .ff-insta__tile:hover { transform: translateY(-6px) scale(1.01); box-shadow: 0 20px 40px rgba(11,11,12,0.25); }
        .ff-insta__tile img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
        .ff-insta__tile:hover img { transform: scale(1.06); }
        .ff-insta__tile-fade { position: absolute; inset: 0; background: linear-gradient(to top, rgba(11,11,12,0.85), rgba(11,11,12,0) 42%); }
        .ff-insta__tile-label { position: absolute; left: 16px; right: 16px; bottom: 14px; display: flex; flex-direction: column; gap: 2px; }
        .ff-insta__tile-name { color: var(--paper); font-size: 14.5px; font-weight: 600; }
        .ff-insta__tile-handle { color: var(--gold-light); font-size: 12.5px; }
        @media (max-width: 760px) { .ff-insta__grid { grid-template-columns: repeat(2, 1fr); gap: 12px; } }
        @media (max-width: 460px) { .ff-insta__grid { grid-template-columns: 1fr; } }

        /* CTA STRIP */
        .ff-cta-strip { position: relative; background: var(--ink); color: var(--paper); text-align: center; padding: 96px 24px; display: flex; flex-direction: column; align-items: center; gap: 30px; overflow: hidden; }
        .ff-cta-strip h2 { font-size: clamp(26px, 4vw, 42px); font-weight: 600; max-width: 640px; color: var(--paper); position: relative; }
        .ff-cta-strip__actions { display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; position: relative; }

        /* FOOTER */
        .ff-footer { max-width: 1160px; margin: 0 auto; padding: 58px 24px 32px; }
        .ff-footer__top { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 24px; margin-bottom: 42px; }
        .ff-footer__top p { font-size: 14px; max-width: 34ch; }
        .ff-footer__socials { display: flex; gap: 10px; }
        .ff-footer__socials a { width: 38px; height: 38px; border: 1px solid var(--line); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--ink); transition: border-color 0.2s, color 0.2s, transform 0.2s; }
        .ff-footer__socials a:hover { border-color: var(--gold); color: var(--gold-deep); transform: translateY(-2px); }
        .ff-footer__bottom { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; padding-top: 24px; border-top: 1px solid var(--line); font-size: 13px; color: var(--muted); }
        .ff-footer__copy { display: inline-flex; align-items: center; gap: 8px; }
        .ff-footer__mark { height: 16px; width: auto; opacity: 0.85; }
        .ff-footer__bottom button { font-weight: 600; color: var(--gold-deep); font-size: 13.5px; }

        /* PAGE HERO */
        .ff-page-hero { position: relative; max-width: 760px; margin: 0 auto; padding: 92px 24px 58px; overflow: visible; }
        .ff-page-hero h1 { font-size: clamp(32px, 5vw, 52px); font-weight: 600; margin: 18px 0 20px; line-height: 1.1; position: relative; }
        .ff-page-hero p { font-size: 16.5px; max-width: 560px; position: relative; }
        @media (max-width: 600px) { .ff-page-hero { padding: 68px 20px 40px; } }

        /* SERVICES LIST */
        .ff-services-list { max-width: 900px; margin: 0 auto 44px; padding: 0 24px; }
        .ff-service-row { display: grid; grid-template-columns: 50px 50px 1fr; gap: 20px; align-items: start; padding: 32px 0; border-top: 1px solid var(--line); transition: padding-left 0.25s ease; }
        .ff-service-row:hover { padding-left: 10px; }
        .ff-service-row:last-child { border-bottom: 1px solid var(--line); }
        .ff-service-row__num { font-family: 'Playfair Display', serif; font-size: 15px; color: var(--gold); font-weight: 600; padding-top: 4px; }
        .ff-service-row__icon { color: var(--gold-deep); }
        .ff-service-row__body h3 { font-size: 19.5px; font-weight: 600; margin-bottom: 7px; }
        .ff-service-row__body p { font-size: 14.5px; max-width: 60ch; }
        @media (max-width: 600px) { .ff-service-row { grid-template-columns: 36px 1fr; } .ff-service-row__icon { display: none; } }

        /* CASE STUDIES */
        .ff-cases-grid { max-width: 1160px; margin: 0 auto 32px; padding: 0 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); }
        .ff-case-card { padding: 28px; background: var(--paper); min-height: 156px; display: flex; flex-direction: column; justify-content: space-between; border-top: 2px solid transparent; transition: background 0.2s ease; }
        .ff-case-card:not(.ff-case-card--empty):hover { background: var(--paper-dim); }
        .ff-case-card:not(.ff-case-card--empty) { border-top-color: var(--gold); }
        .ff-case-card--empty { background: var(--paper-dim); }
        .ff-case-card__tag { font-size: 12px; font-weight: 600; color: var(--gold-deep); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.06em; }
        .ff-case-card h3 { font-size: 18.5px; font-weight: 600; margin-bottom: 7px; }
        .ff-case-card p { font-size: 13.5px; }
        @media (max-width: 760px) { .ff-cases-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) { .ff-cases-grid { grid-template-columns: 1fr; } }

        /* CONTACT */
        .ff-contact-grid { max-width: 1000px; margin: 0 auto; padding: 0 24px 104px; display: grid; grid-template-columns: 1fr 1.2fr; gap: 52px; }
        .ff-contact-info { display: flex; flex-direction: column; gap: 18px; }
        .ff-contact-row { display: flex; align-items: center; gap: 14px; font-size: 15.5px; font-weight: 500; color: var(--ink); padding-bottom: 16px; border-bottom: 1px solid var(--line); transition: color 0.15s, gap 0.15s; }
        .ff-contact-row svg { color: var(--gold-deep); flex-shrink: 0; }
        .ff-contact-row:not(.ff-contact-row--static):hover { color: var(--gold-deep); gap: 18px; }
        .ff-contact-socials { display: flex; flex-direction: column; gap: 12px; margin-top: 8px; }
        .ff-contact-socials a { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--muted); transition: color 0.15s; }
        .ff-contact-socials a:hover { color: var(--gold-deep); }
        .ff-contact-form { display: flex; flex-direction: column; gap: 18px; }
        .ff-contact-form label { display: flex; flex-direction: column; gap: 8px; font-size: 13.5px; font-weight: 600; color: var(--ink-soft); }
        .ff-contact-form input, .ff-contact-form textarea { font-family: 'Inter', sans-serif; font-size: 15px; padding: 12px 14px; border: 1px solid var(--line); border-radius: 10px; background: #fff; resize: vertical; color: var(--ink); transition: border-color 0.15s; }
        .ff-contact-form input:focus, .ff-contact-form textarea:focus { outline: 2px solid var(--gold); outline-offset: 1px; border-color: var(--gold); }
        .ff-contact-form__note { font-size: 12.5px; }
        @media (max-width: 700px) { .ff-contact-grid { grid-template-columns: 1fr; } }

        /* RESUME PAGE */
        .ff-resume-hero { position: relative; max-width: 1160px; margin: 0 auto; padding: 92px 24px 40px; overflow: visible; }
        .ff-resume-hero__grid { display: grid; grid-template-columns: 300px 1fr; gap: 52px; align-items: center; position: relative; }
        .ff-resume-photo { border-radius: 20px; overflow: hidden; border: 1px solid rgba(184,145,47,0.3); }
        .ff-resume-photo img { width: 100%; display: block; }
        .ff-resume-hero__title { font-size: 17px; font-weight: 600; color: var(--gold-deep); margin: 4px 0 16px; }
        .ff-resume-hero__bio { font-size: 15.5px; max-width: 640px; margin-bottom: 24px; }
        .ff-resume-hero__contact { display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 26px; }
        .ff-resume-hero__contact a, .ff-resume-hero__contact span { display: inline-flex; align-items: center; gap: 7px; font-size: 14px; font-weight: 500; color: var(--ink-soft); }
        .ff-resume-hero__contact svg { color: var(--gold-deep); }
        @media (max-width: 760px) { .ff-resume-hero__grid { grid-template-columns: 1fr; } .ff-resume-photo { max-width: 220px; margin: 0 auto; } }

        .ff-resume-section { max-width: 1000px; margin: 0 auto; padding: 60px 24px; }

        /* TIMELINE */
        .ff-timeline { display: flex; flex-direction: column; gap: 0; border-left: 2px solid var(--line); margin-left: 6px; }
        .ff-timeline__item { position: relative; padding: 0 0 34px 30px; }
        .ff-timeline__dot { position: absolute; left: -7px; top: 4px; width: 12px; height: 12px; border-radius: 50%; background: var(--gold); border: 2px solid var(--paper); }
        .ff-timeline__top { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; align-items: baseline; }
        .ff-timeline__top h3 { font-size: 17.5px; font-weight: 600; }
        .ff-timeline__period { font-size: 12.5px; font-weight: 600; color: var(--gold-deep); white-space: nowrap; }
        .ff-timeline__org { font-size: 14px; font-weight: 500; color: var(--muted); margin: 3px 0 10px; }
        .ff-timeline__content ul { margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 5px; }
        .ff-timeline__content li { font-size: 13.5px; color: var(--muted); line-height: 1.5; }

        /* SKILLS */
        .ff-skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .ff-skills-card { padding: 26px; border: 1px solid var(--line); border-radius: 16px; background: #fff; }
        .ff-skills-card h3 { font-size: 16px; font-weight: 600; margin-bottom: 16px; }
        .ff-tag-list { display: flex; flex-wrap: wrap; gap: 8px; }
        .ff-tag { font-size: 12.5px; font-weight: 500; padding: 6px 12px; border-radius: 100px; background: var(--paper-dim); color: var(--ink-soft); border: 1px solid var(--line); }
        .ff-lang-list { display: flex; flex-direction: column; gap: 10px; }
        .ff-lang-row { display: flex; justify-content: space-between; font-size: 14px; padding-bottom: 8px; border-bottom: 1px solid var(--line); }
        .ff-lang-level { color: var(--gold-deep); font-weight: 600; font-size: 12.5px; }
        @media (max-width: 760px) { .ff-skills-grid { grid-template-columns: 1fr; } }

        /* EDUCATION / FREELANCE */
        .ff-edu-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .ff-edu-card { padding: 26px; border: 1px solid var(--line); border-radius: 16px; background: #fff; }
        .ff-edu-card h3 { font-size: 16px; font-weight: 600; margin-bottom: 16px; }
        .ff-edu-row, .ff-freelance-row { display: flex; justify-content: space-between; gap: 12px; padding: 12px 0; border-top: 1px solid var(--line); }
        .ff-edu-row:first-of-type, .ff-freelance-row:first-of-type { border-top: none; padding-top: 0; }
        .ff-edu-school { font-size: 14.5px; font-weight: 600; margin-bottom: 2px; }
        .ff-edu-degree { font-size: 13px; color: var(--muted); }
        .ff-edu-period { font-size: 12.5px; color: var(--gold-deep); font-weight: 600; white-space: nowrap; }
        @media (max-width: 700px) { .ff-edu-grid { grid-template-columns: 1fr; } }

        /* WHATSAPP FLOATING BUTTON */
        .ff-whatsapp { position: fixed; bottom: 24px; right: 24px; z-index: 70; width: 58px; height: 58px; border-radius: 50%; background: linear-gradient(135deg, var(--gold-light), var(--gold)); color: var(--ink); display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(11,11,12,0.28); transition: transform 0.15s ease; }
        .ff-whatsapp:hover { transform: scale(1.08) rotate(-4deg); }
        .ff-whatsapp:active { transform: scale(0.97); }
        .ff-whatsapp__ring { position: absolute; inset: -6px; border-radius: 50%; border: 1.5px solid var(--gold-light); opacity: 0.6; animation: ffPulse 2.4s ease-out infinite; }
        @keyframes ffPulse { 0% { transform: scale(0.9); opacity: 0.55; } 100% { transform: scale(1.4); opacity: 0; } }
        @media (max-width: 480px) { .ff-whatsapp { width: 52px; height: 52px; bottom: 18px; right: 18px; } }
      `}</style>

      <a href="#ff-main" style={{ position: "absolute", left: "-9999px" }}
         onFocus={(e) => { e.target.style.left = "16px"; e.target.style.top = "16px"; e.target.style.zIndex = "999"; e.target.style.background = "#fff"; e.target.style.padding = "10px 16px"; }}
         onBlur={(e) => { e.target.style.left = "-9999px"; }}>
        Skip to main content
      </a>

      <Nav page={page} setPage={setPage} />
      <main id="ff-main">
        {page === "home" && <Home setPage={setPage} />}
        {page === "services" && <Services setPage={setPage} />}
        {page === "case-studies" && <CaseStudies setPage={setPage} />}
        {page === "resume" && <Resume setPage={setPage} />}
        {page === "contact" && <Contact />}
      </main>
      <Footer setPage={setPage} />
      <WhatsAppButton />
    </div>
  );
}
