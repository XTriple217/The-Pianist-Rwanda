import { useMemo, useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  CalendarDays,
  GraduationCap,
  Headphones,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Mic2,
  Music2,
  Phone,
  PlayCircle,
  School,
  ShoppingBag,
  Sparkles,
  Trophy,
  Users,
  Wrench,
  X,
  ChevronDown,
  Star,
  Award,
  Zap,
} from "lucide-react";
import singerImage from "./assets/singer.jpg";
import trumpetImage from "./assets/trumpet.jpg";
import celloImage from "./assets/cello.jpg";
import violinImage from "./assets/violin.jpg";
import saxophoneImage from "./assets/saxophone.webp";
import pianoImage from "./assets/piano.jpg";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Programs", "#services"],
  ["Schools", "#for-schools"],
  ["Individuals", "#individuals"],
  ["Instruments", "#instruments"],
  ["Events", "#events"],
  ["Contact", "#contact"],
] as const;

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "12+", label: "School Partners" },
  { value: "200+", label: "Events Delivered" },
  { value: "8+", label: "Years of Excellence" },
];

const highlights = [
  "School music partnerships with performance outcomes",
  "Private coaching for children, adults, and families",
  "Live ensembles for weddings, galas, and premium events",
];

const servicePillars = [
  {
    icon: School,
    title: "School Programs",
    text: "In-school music education built around timetables, term goals, and student growth.",
    items: ["Keyboard and piano", "Choir and vocals", "Strings, brass, and theory"],
    accent: "#C9A84C",
  },
  {
    icon: GraduationCap,
    title: "Individual Lessons",
    text: "Structured learning for beginners through advanced students across ages and instruments.",
    items: ["Private 1-on-1 lessons", "Family and group sessions", "Exam and recital preparation"],
    accent: "#4A9EFF",
  },
  {
    icon: Mic2,
    title: "Events & Performances",
    text: "Polished live music for elegant celebrations, corporate moments, and cultural events.",
    items: ["Weddings and proposals", "Corporate events", "Traditional and live band sets"],
    accent: "#C9A84C",
  },
  {
    icon: Sparkles,
    title: "Talent Development",
    text: "Programs that move students from raw ability to confident stage-ready performers.",
    items: ["Band training", "Concert preparation", "Showcases and competitions"],
    accent: "#4A9EFF",
  },
];

const schoolPrograms = [
  "Keyboard & Piano",
  "Guitar & Modern Band",
  "Strings Program",
  "Percussion & Drums",
  "Vocal & Choir Training",
  "Music Theory & Academics",
];

const schoolSteps = [
  { number: "01", title: "Consultation", text: "We map your calendar, student groups, and the exact program scope your school needs." },
  { number: "02", title: "Program Design", text: "We assign instructors, instruments, and a practical weekly structure that fits the school day." },
  { number: "03", title: "Weekly Delivery", text: "Students learn on real instruments through consistent guided sessions and tracked progress." },
  { number: "04", title: "Showcase", text: "Each term closes with a polished performance that gives families and schools visible results." },
];

const learnerPaths = [
  {
    title: "Children & Teens",
    text: "Age-based training that builds technique, discipline, creativity, and joy from the very first lessons.",
    items: ["Ages 3 to 17", "Beginner to grade pathways", "Recitals and ensemble growth"],
    image: violinImage,
  },
  {
    title: "Adults",
    text: "Flexible coaching for adult beginners and returning musicians who want serious progress without pressure.",
    items: ["Evening and weekend options", "Goal-focused learning", "Piano, guitar, voice, and more"],
    image: pianoImage,
  },
  {
    title: "Families",
    text: "Shared music programs that let siblings, parents, and children learn together in a warm structure.",
    items: ["Parent and child sessions", "Sibling group lessons", "Family showcase moments"],
    image: celloImage,
  },
  {
    title: "All Skill Levels",
    text: "From complete beginner to professional polish, every student enters at the right level and grows from there.",
    items: ["Foundation building", "Intermediate refinement", "Performance-ready coaching"],
    image: trumpetImage,
  },
];

const instrumentServices = [
  { icon: ShoppingBag, title: "Buy", text: "Guidance and sourcing for student, intermediate, and professional instruments." },
  { icon: Users, title: "Sell", text: "We help owners place quality instruments into the right hands." },
  { icon: Wrench, title: "Repair", text: "Setup, tuning, servicing, and restoration for instruments that need attention." },
  { icon: Music2, title: "Consult", text: "Clear recommendations on what instrument suits a learner's age, level, and goals." },
];

const instrumentFocus = [
  { title: "Piano & Keyboard", image: pianoImage },
  { title: "Violin & Strings", image: violinImage },
  { title: "Brass & Woodwind", image: trumpetImage },
  { title: "Cello Studies", image: celloImage },
];

const gallery = [
  { title: "Vocal Showcase", image: singerImage, span: "col-span-2 row-span-2" },
  { title: "Trumpet Training", image: trumpetImage, span: "" },
  { title: "Cello Studies", image: celloImage, span: "" },
  { title: "Violin Practice", image: violinImage, span: "col-span-2" },
  { title: "Saxophone Performance", image: saxophoneImage, span: "" },
];

const eventFormats = [
  {
    title: "Weddings",
    text: "Ceremony, reception, and refined live music shaped around the couple and the atmosphere.",
    items: ["Processional music", "Cocktail ambience", "Live band reception sets"],
    image: singerImage,
  },
  {
    title: "Proposals & Serenades",
    text: "Solo saxophone, violin, piano, or vocals for intimate, unforgettable romantic settings.",
    items: ["Custom songs", "Venue coordination", "Elegant solo performance"],
    image: violinImage,
  },
  {
    title: "Corporate Events",
    text: "Professional entertainment that elevates launches, dinners, and premium guest experiences.",
    items: ["Gala dinners", "Networking ambience", "Award-night performance"],
    image: saxophoneImage,
  },
  {
    title: "Traditional & Cultural",
    text: "Authentic performance for community events, family ceremonies, and culturally rooted moments.",
    items: ["Traditional crew", "Live cultural sets", "Celebration-focused delivery"],
    image: trumpetImage,
  },
];

const talentJourney = [
  { title: "Assessment & Goals", text: "We identify the student's level, artistic direction, and performance objectives from the start.", icon: Star },
  { title: "Technique & Repertoire", text: "Students build musical depth through stronger technique, better listening, and curated repertoire.", icon: Award },
  { title: "Ensemble & Stage Craft", text: "Band practice, rehearsal discipline, and audience connection turn learning into performance confidence.", icon: Zap },
  { title: "Showcase & Competition", text: "Students step into concerts, showcases, and competition moments with structured coaching.", icon: Trophy },
];

const testimonials = [
  {
    quote: "Pianistar transformed our school music program. Students who had never touched an instrument are now performing at school galas.",
    author: "Head of Arts",
    school: "Green Hills Academy, Kigali",
  },
  {
    quote: "My daughter started at age 6 with zero experience. Within a year she was performing on stage. The instructors are exceptional.",
    author: "Parent",
    school: "Private Lessons Client",
  },
  {
    quote: "The live ensemble at our corporate gala was absolutely flawless. Elegant, professional, and perfectly matched to the occasion.",
    author: "Events Director",
    school: "MTN Rwanda",
  },
];

const emailTarget = "pianistarmusic@gmail.com";
const whatsappTarget = "https://wa.me/250790359656";

// ─── ICONS ────────────────────────────────────────────────────────────────────

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.68h-3.13v12.14a2.9 2.9 0 1 1-2.9-2.9c.23 0 .45.03.66.08V8.15a6.03 6.03 0 1 0 5.37 5.99V8.02a7.9 7.9 0 0 0 4.77 1.6V6.69Z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.67V8.33L15.87 12 9.6 15.67Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.94 1.35a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 6.85A5.15 5.15 0 1 1 6.85 12 5.16 5.16 0 0 1 12 6.85Zm0 1.8A3.35 3.35 0 1 0 15.35 12 3.35 3.35 0 0 0 12 8.65Z" />
    </svg>
  );
}

// ─── ANIMATION HOOK ───────────────────────────────────────────────────────────

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── SECTION LABEL ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C9A84C]" />
      <span style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.22em", fontSize: "0.7rem", textTransform: "uppercase", color: "#C9A84C" }}>
        {children}
      </span>
      <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#C9A84C]" />
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "School Partnership", message: "" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial(prev => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Pianistar inquiry from ${form.name || "Website visitor"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterest: ${form.interest}\n\nMessage:\n${form.message}`);
    return `mailto:${emailTarget}?subject=${subject}&body=${body}`;
  }, [form]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(c => ({ ...c, [name]: value }));
  };

  const handleSubmit = () => { window.location.href = mailtoHref; setModalOpen(false); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --gold: #C9A84C;
          --gold-light: #E8C96A;
          --gold-dim: rgba(201,168,76,0.18);
          --ink: #06080E;
          --ink-2: #090C16;
          --surface: rgba(255,255,255,0.025);
          --border: rgba(255,255,255,0.08);
          --border-gold: rgba(201,168,76,0.22);
          --text-muted: rgba(210,215,230,0.6);
          --text-body: rgba(210,215,230,0.82);
          --blue: #2B7FFF;
          --blue-dim: rgba(43,127,255,0.14);
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--ink);
          color: #E8EAF2;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          line-height: 1.7;
          overflow-x: hidden;
        }

        ::selection { background: var(--gold-dim); color: var(--gold-light); }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--ink); }
        ::-webkit-scrollbar-thumb { background: var(--gold-dim); border-radius: 2px; }

        .display-font { font-family: 'Cormorant Garamond', serif; }

        /* Grain overlay */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.028;
          pointer-events: none;
          z-index: 9999;
        }

        /* Hero line animation */
        @keyframes slideIn { from { width: 0; opacity: 0; } to { width: 100%; opacity: 1; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-gold { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .hero-title { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-sub { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
        .hero-cta { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.3s both; }
        .hero-stats { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.45s both; }

        .gold-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          animation: slideIn 1.2s ease 0.6s both;
        }

        .card-hover {
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(201,168,76,0.06);
          border-color: rgba(201,168,76,0.28);
        }

        .img-hover img {
          transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .img-hover:hover img { transform: scale(1.04); }

        .btn-gold {
          background: linear-gradient(135deg, #D4A843 0%, #A87B28 60%, #C9A84C 100%);
          border: 1px solid rgba(255,220,120,0.3);
          box-shadow: 0 0 30px rgba(201,168,76,0.2), inset 0 1px 0 rgba(255,255,255,0.12);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-gold::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%);
        }
        .btn-gold:hover {
          box-shadow: 0 0 50px rgba(201,168,76,0.35), 0 8px 30px rgba(0,0,0,0.3);
          transform: translateY(-1px);
        }

        .btn-ghost {
          border: 1px solid var(--border-gold);
          background: rgba(201,168,76,0.05);
          transition: all 0.3s ease;
        }
        .btn-ghost:hover {
          background: rgba(201,168,76,0.1);
          border-color: rgba(201,168,76,0.45);
        }

        .nav-link {
          position: relative;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: var(--gold-light); }

        .testimonial-item {
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .step-connector {
          position: absolute;
          top: 28px;
          right: -50%;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, var(--gold-dim), transparent);
        }

        .instrument-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(6,8,14,0.95) 100%);
          z-index: 1;
        }

        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border-gold), transparent);
          margin: 0;
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: "var(--ink)" }}>

        {/* ── NAVIGATION ─────────────────────────────────────────────────────── */}
        <header style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
          background: scrolled ? "rgba(6,8,14,0.95)" : "rgba(6,8,14,0.0)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.22)" : "1px solid transparent",
        }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

              {/* Logo */}
              <a href="#home" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", zIndex: 60 }}>
                <div style={{ width: 40, height: 40, borderRadius: "11px", background: "linear-gradient(135deg, #D4A843, #8B5E1A)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(201,168,76,0.28)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 600, color: "#fff", flexShrink: 0 }}>P</div>
                <div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.28em", color: "#E8EAF2", lineHeight: 1.2 }}>PIANISTAR</p>
                  <p style={{ fontSize: "0.55rem", letterSpacing: "0.42em", color: "var(--gold)", marginTop: "1px" }}>MUSIC GROUP</p>
                </div>
              </a>

              {/* Desktop Nav */}
              <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hidden-mobile">
                {navItems.map(([label, href]) => (
                  <a key={label} href={href} className="nav-link"
                    style={{ fontSize: "0.73rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(232,234,242,0.65)", textDecoration: "none" }}>
                    {label}
                  </a>
                ))}
              </nav>

              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <button onClick={() => setModalOpen(true)} className="btn-gold hidden-mobile"
                  style={{ padding: "10px 20px", borderRadius: "10px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.73rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff", cursor: "pointer", fontWeight: 500 }}>
                  Book Now
                </button>
                {/* Hamburger — always solid so it's visible on hero */}
                <button onClick={() => setMenuOpen(v => !v)}
                  style={{ display: "none", width: 42, height: 42, borderRadius: "10px", border: "1px solid rgba(201,168,76,0.35)", background: "rgba(6,8,14,0.85)", backdropFilter: "blur(12px)", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#E8EAF2", flexShrink: 0, zIndex: 60 }}
                  className="menu-btn" aria-label="Toggle menu">
                  {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* ── MOBILE FULL-SCREEN MENU (outside header so it covers everything) ── */}
        {menuOpen && (
          <div style={{
            position: "fixed", inset: 0, zIndex: 49,
            background: "rgba(4,5,10,0.98)",
            backdropFilter: "blur(24px)",
            display: "flex", flexDirection: "column",
            paddingTop: "88px", paddingBottom: "2rem",
            overflowY: "auto",
          }}>
            {/* Gold top accent line */}
            <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)", marginBottom: "0.5rem" }} />

            {/* Nav links */}
            <nav style={{ padding: "1rem 1.5rem", display: "grid", gap: "2px", flex: 1 }}>
              {navItems.map(([label, href], i) => (
                <a key={label} href={href} onClick={() => setMenuOpen(false)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "16px 20px",
                    fontSize: "1.1rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, letterSpacing: "0.12em",
                    color: "rgba(232,234,242,0.85)", textDecoration: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    transition: "color 0.2s, padding-left 0.2s",
                    animationDelay: `${i * 40}ms`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--gold-light)"; e.currentTarget.style.paddingLeft = "26px"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(232,234,242,0.85)"; e.currentTarget.style.paddingLeft = "20px"; }}>
                  <span>{label}</span>
                  <ArrowRight size={14} style={{ color: "rgba(201,168,76,0.45)" }} />
                </a>
              ))}
            </nav>

            {/* Bottom CTA block */}
            <div style={{ padding: "1.5rem", margin: "0 1.5rem", border: "1px solid rgba(201,168,76,0.22)", borderRadius: "16px", background: "linear-gradient(135deg, rgba(201,168,76,0.07), rgba(6,8,14,0.6))" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "rgba(232,234,242,0.6)", marginBottom: "1rem", letterSpacing: "0.04em" }}>Ready to start your music journey?</p>
              <button onClick={() => { setMenuOpen(false); setModalOpen(true); }} className="btn-gold"
                style={{ width: "100%", padding: "14px", borderRadius: "12px", fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff", cursor: "pointer", fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                Book Now <ArrowRight size={15} />
              </button>
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <a href="tel:+250790359656"
                  style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "11px", borderRadius: "10px", border: "1px solid rgba(201,168,76,0.22)", background: "rgba(201,168,76,0.05)", color: "rgba(232,234,242,0.75)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  <Phone size={13} /> Call
                </a>
                <a href={whatsappTarget} target="_blank" rel="noreferrer"
                  style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "11px", borderRadius: "10px", border: "1px solid rgba(201,168,76,0.22)", background: "rgba(201,168,76,0.05)", color: "rgba(232,234,242,0.75)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  <MessageCircle size={13} /> WhatsApp
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", padding: "1.5rem 1.5rem 0" }}>
              {[
                { Icon: YouTubeIcon, href: "https://www.youtube.com/@pianistars", label: "YouTube" },
                { Icon: TikTokIcon, href: "https://www.tiktok.com/@kevinpianistar", label: "TikTok" },
                { Icon: InstagramIcon, href: "https://www.instagram.com/kevinpianistar?igsh=dmRoMjh4cmxwdTB3", label: "Instagram" },
                { Icon: MessageCircle, href: whatsappTarget, label: "WhatsApp" },
              ].map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}
                  style={{ width: 42, height: 42, borderRadius: "10px", border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(201,168,76,0.7)", textDecoration: "none" }}>
                  <item.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        )}

        <main>

          {/* ── HERO ───────────────────────────────────────────────────────────── */}
          <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
            {/* Background image */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
              <img src={singerImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(6,8,14,0.97) 0%, rgba(6,8,14,0.88) 45%, rgba(6,8,14,0.55) 100%)" }} />
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)" }} />
            </div>

            {/* Decorative gold ring */}
            <div style={{ position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)", width: 420, height: 420, border: "1px solid rgba(201,168,76,0.12)", borderRadius: "50%", zIndex: 1, animation: "spin-slow 40s linear infinite" }} />
            <div style={{ position: "absolute", right: "10%", top: "50%", transform: "translateY(-50%)", width: 320, height: 320, border: "1px solid rgba(201,168,76,0.08)", borderRadius: "50%", zIndex: 1, animation: "spin-slow 28s linear infinite reverse" }} />

            <div style={{ position: "relative", zIndex: 2, maxWidth: "1400px", margin: "0 auto", padding: "0 2rem", paddingTop: "80px", width: "100%" }}>
              <div style={{ maxWidth: "680px" }}>
                <div className="hero-title">
                  <SectionLabel>Kigali, Rwanda</SectionLabel>
                </div>

                <h1 className="display-font hero-title" style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)", fontWeight: 300, lineHeight: 0.9, letterSpacing: "-0.01em", marginTop: "1.5rem", color: "#F4F0E8" }}>
                  Where Music<br />
                  <em style={{ fontStyle: "italic", color: "var(--gold-light)", fontWeight: 300 }}>Becomes</em><br />
                  Excellence
                </h1>

                <div className="gold-line" style={{ marginTop: "2rem", marginBottom: "1.5rem" }} />

                <p className="hero-sub" style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-body)", maxWidth: "520px" }}>
                  A professional music school and performance company serving schools, learners, families, and event clients — with structure, polish, and depth.
                </p>

                <div className="hero-cta" style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "2.5rem" }}>
                  <a href="#for-schools" className="btn-gold" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "12px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", textDecoration: "none", fontWeight: 500 }}>
                    <School size={16} />
                    Explore Programs
                  </a>
                  <button onClick={() => setModalOpen(true)} className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "12px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#E8EAF2", cursor: "pointer", fontWeight: 400 }}>
                    <PlayCircle size={16} />
                    Book Live Music
                  </button>
                </div>

                {/* Stats */}
                <div className="hero-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", marginTop: "3.5rem", background: "var(--border-gold)", borderRadius: "16px", overflow: "hidden", maxWidth: "560px" }}>
                  {stats.map(stat => (
                    <div key={stat.label} style={{ padding: "20px 16px", background: "rgba(6,8,14,0.8)", textAlign: "center" }}>
                      <p className="display-font" style={{ fontSize: "1.8rem", fontWeight: 500, color: "var(--gold-light)", lineHeight: 1 }}>{stat.value}</p>
                      <p style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--text-muted)", marginTop: "4px", textTransform: "uppercase" }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", animation: "float 2.5s ease-in-out infinite" }}>
              <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)" }}>Scroll</span>
              <ChevronDown size={16} style={{ color: "var(--gold)" }} />
            </div>
          </section>

          <div className="section-divider" />

          {/* ── ABOUT ──────────────────────────────────────────────────────────── */}
          <section id="about" style={{ padding: "8rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
              <Reveal>
                <div style={{ position: "relative" }}>
                  <div className="img-hover" style={{ borderRadius: "24px", overflow: "hidden", aspectRatio: "3/4", position: "relative" }}>
                    <img src={pianoImage} alt="Piano lesson" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,8,14,0.6) 0%, transparent 50%)" }} />
                  </div>
                  {/* Floating accent card */}
                  <div style={{ position: "absolute", bottom: "-2rem", right: "-2rem", padding: "1.5rem 2rem", background: "rgba(6,8,14,0.95)", border: "1px solid var(--border-gold)", borderRadius: "16px", backdropFilter: "blur(20px)" }}>
                    <p className="display-font" style={{ fontSize: "2.5rem", fontWeight: 500, color: "var(--gold-light)", lineHeight: 1 }}>8+</p>
                    <p style={{ fontSize: "0.72rem", letterSpacing: "0.12em", color: "var(--text-muted)", textTransform: "uppercase", marginTop: "4px" }}>Years of Excellence</p>
                  </div>
                  {/* Gold corner accent */}
                  <div style={{ position: "absolute", top: "-1px", left: "-1px", width: "80px", height: "80px", borderTop: "2px solid var(--gold)", borderLeft: "2px solid var(--gold)", borderRadius: "24px 0 0 0" }} />
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div>
                  <SectionLabel>Who We Are</SectionLabel>
                  <h2 className="display-font" style={{ fontSize: "clamp(2.5rem, 4vw, 3.8rem)", fontWeight: 400, lineHeight: 1.1, marginTop: "1.5rem", letterSpacing: "-0.01em" }}>
                    A music institution built for{" "}
                    <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>learning, discipline, and real performance.</em>
                  </h2>
                  <p style={{ marginTop: "1.5rem", fontSize: "1rem", lineHeight: 1.9, color: "var(--text-body)" }}>
                    Pianistar Music Group brings together school partnerships, private education, talent development, and premium live performance under one professional standard — built for Rwanda and beyond.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "2.5rem" }}>
                    {[
                      { icon: School, title: "Structured Delivery", text: "Clear pathways for schools, families, and developing artists." },
                      { icon: CalendarDays, title: "Performance Culture", text: "Training connected to rehearsals, showcases, and live moments." },
                      { icon: Headphones, title: "Professional Standard", text: "Serious, refined, and student-centered from first lesson to stage." },
                      { icon: Award, title: "Proven Results", text: "Hundreds of students developed into confident performers." },
                    ].map(item => (
                      <div key={item.title} className="card-hover" style={{ padding: "1.5rem", border: "1px solid var(--border)", borderRadius: "16px", background: "var(--surface)" }}>
                        <item.icon size={18} style={{ color: "var(--gold)" }} />
                        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 500, marginTop: "12px", marginBottom: "6px" }}>{item.title}</h3>
                        <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "var(--text-muted)" }}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <div className="section-divider" />

          {/* ── SERVICES ───────────────────────────────────────────────────────── */}
          <section id="services" style={{ padding: "8rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                <SectionLabel>What We Do</SectionLabel>
                <h2 className="display-font" style={{ fontSize: "clamp(2.5rem, 4vw, 3.8rem)", fontWeight: 400, lineHeight: 1.1, marginTop: "1.5rem" }}>
                  A complete music ecosystem,<br /><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>merged into one experience.</em>
                </h2>
              </div>
            </Reveal>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5px", background: "var(--border-gold)", borderRadius: "24px", overflow: "hidden" }}>
              {servicePillars.map((service, i) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.title} delay={i * 80}>
                    <div className="card-hover" style={{ padding: "2.5rem", background: "var(--ink-2)", height: "100%", cursor: "default" }}>
                      <div style={{ width: 56, height: 56, borderRadius: "14px", background: `linear-gradient(135deg, ${service.accent}22, ${service.accent}44)`, border: `1px solid ${service.accent}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={24} style={{ color: service.accent }} />
                      </div>
                      <h3 className="display-font" style={{ fontSize: "1.7rem", fontWeight: 500, marginTop: "1.5rem", marginBottom: "0.75rem" }}>{service.title}</h3>
                      <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "1.5rem" }}>{service.text}</p>
                      <ul style={{ listStyle: "none", display: "grid", gap: "8px" }}>
                        {service.items.map(item => (
                          <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.82rem", color: "var(--text-body)" }}>
                            <span style={{ width: 5, height: 5, borderRadius: "50%", background: service.accent, flexShrink: 0 }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>

          <div className="section-divider" />

          {/* ── FOR SCHOOLS ────────────────────────────────────────────────────── */}
          <section id="for-schools" style={{ padding: "8rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                <SectionLabel>For Schools</SectionLabel>
                <h2 className="display-font" style={{ fontSize: "clamp(2.5rem, 4vw, 3.8rem)", fontWeight: 400, lineHeight: 1.1, marginTop: "1.5rem" }}>
                  A school partnership model with<br /><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>real program depth.</em>
                </h2>
                <p style={{ maxWidth: "580px", margin: "1.5rem auto 0", fontSize: "1rem", lineHeight: 1.8, color: "var(--text-body)" }}>
                  We build music programs that integrate seamlessly into your school calendar — with structured delivery, professional instructors, and visible term results.
                </p>
              </div>
            </Reveal>

            {/* Programs grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "3rem" }}>
              {schoolPrograms.map((program, i) => (
                <Reveal key={program} delay={i * 50}>
                  <div style={{ padding: "18px 22px", border: "1px solid var(--border)", borderRadius: "14px", background: "var(--surface)", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.85rem", letterSpacing: "0.05em", color: "var(--text-body)", fontWeight: 400 }}>{program}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Steps */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5px", background: "var(--border-gold)", borderRadius: "20px", overflow: "hidden", marginBottom: "2.5rem" }}>
              {schoolSteps.map((step, i) => (
                <Reveal key={step.number} delay={i * 80}>
                  <div style={{ padding: "2.5rem 2rem", background: "var(--ink-2)", textAlign: "center", height: "100%" }}>
                    <div className="display-font" style={{ fontSize: "3rem", fontWeight: 300, color: "var(--gold-dim)", lineHeight: 1, borderColor: "var(--border-gold)" }}>
                      {step.number}
                    </div>
                    <h3 className="display-font" style={{ fontSize: "1.4rem", fontWeight: 500, marginTop: "1rem", marginBottom: "0.75rem" }}>{step.title}</h3>
                    <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-muted)" }}>{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* CTA bar */}
            <Reveal>
              <div style={{ padding: "2.5rem 3rem", border: "1px solid var(--border-gold)", borderRadius: "20px", background: "linear-gradient(135deg, rgba(201,168,76,0.06), rgba(6,8,14,0.9))", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
                <div style={{ maxWidth: "600px" }}>
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "8px" }}>Partnership Note</p>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-body)" }}>
                    Flexible school pricing structured around program size and institutional needs, including partnership-model arrangements tailored to your school's budget.
                  </p>
                </div>
                <button onClick={() => setModalOpen(true)} className="btn-gold" style={{ padding: "14px 28px", borderRadius: "12px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontWeight: 500, whiteSpace: "nowrap" }}>
                  Request a School Plan <ArrowRight size={16} />
                </button>
              </div>
            </Reveal>
          </section>

          <div className="section-divider" />

          {/* ── INDIVIDUALS ────────────────────────────────────────────────────── */}
          <section id="individuals" style={{ padding: "8rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                <SectionLabel>Individuals & Families</SectionLabel>
                <h2 className="display-font" style={{ fontSize: "clamp(2.5rem, 4vw, 3.8rem)", fontWeight: 400, lineHeight: 1.1, marginTop: "1.5rem" }}>
                  Lessons for toddlers, teens, adults,<br /><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>and whole families.</em>
                </h2>
              </div>
            </Reveal>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {learnerPaths.map((path, i) => (
                <Reveal key={path.title} delay={i * 80}>
                  <div className="img-hover card-hover" style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border)", position: "relative", minHeight: "420px", cursor: "default" }}>
                    <img src={path.image} alt={path.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,8,14,0.97) 0%, rgba(6,8,14,0.3) 60%, transparent 100%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem" }}>
                      <h3 className="display-font" style={{ fontSize: "1.8rem", fontWeight: 500, marginBottom: "0.75rem" }}>{path.title}</h3>
                      <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "var(--text-body)", marginBottom: "1rem" }}>{path.text}</p>
                      <ul style={{ listStyle: "none", display: "grid", gap: "6px" }}>
                        {path.items.map(item => (
                          <li key={item} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.78rem", color: "rgba(201,168,76,0.9)" }}>
                            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <div className="section-divider" />

          {/* ── INSTRUMENTS ────────────────────────────────────────────────────── */}
          <section id="instruments" style={{ padding: "8rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
              <Reveal>
                <div>
                  <SectionLabel>Instrument Support</SectionLabel>
                  <h2 className="display-font" style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.3rem)", fontWeight: 400, lineHeight: 1.15, marginTop: "1.5rem" }}>
                    Buy, sell, repair, or choose<br /><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>the right instrument.</em>
                  </h2>
                  <p style={{ marginTop: "1.5rem", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--text-body)" }}>
                    From sourcing a first instrument for a young learner to professional-grade restoration and expert consultation — we support every stage of the musical journey.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "2.5rem" }}>
                    {instrumentServices.map(item => (
                      <div key={item.title} className="card-hover" style={{ padding: "1.5rem", border: "1px solid var(--border)", borderRadius: "16px", background: "var(--surface)" }}>
                        <item.icon size={20} style={{ color: "var(--gold)" }} />
                        <h3 className="display-font" style={{ fontSize: "1.2rem", fontWeight: 500, marginTop: "12px", marginBottom: "6px" }}>{item.title}</h3>
                        <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "var(--text-muted)" }}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  {instrumentFocus.map(item => (
                    <div key={item.title} className="instrument-card img-hover" style={{ borderRadius: "18px", overflow: "hidden", aspectRatio: "3/4", position: "relative", border: "1px solid var(--border)" }}>
                      <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(6,8,14,0.95) 100%)" }} />
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem", zIndex: 2 }}>
                        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#E8EAF2" }}>{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          <div className="section-divider" />

          {/* ── GALLERY ────────────────────────────────────────────────────────── */}
          <section style={{ padding: "8rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                <SectionLabel>Pianistar In Action</SectionLabel>
                <h2 className="display-font" style={{ fontSize: "clamp(2.5rem, 4vw, 3.8rem)", fontWeight: 400, lineHeight: 1.1, marginTop: "1.5rem" }}>
                  Real training. Real instruments.<br /><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Real performance energy.</em>
                </h2>
              </div>
            </Reveal>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gridTemplateRows: "repeat(2, 280px)", gap: "12px" }}>
              {[
                { image: singerImage, title: "Vocal Showcase", style: { gridColumn: "1 / 6", gridRow: "1 / 3" } },
                { image: trumpetImage, title: "Trumpet Training", style: { gridColumn: "6 / 9", gridRow: "1 / 2" } },
                { image: celloImage, title: "Cello Studies", style: { gridColumn: "9 / 13", gridRow: "1 / 2" } },
                { image: violinImage, title: "Violin Practice", style: { gridColumn: "6 / 10", gridRow: "2 / 3" } },
                { image: saxophoneImage, title: "Saxophone", style: { gridColumn: "10 / 13", gridRow: "2 / 3" } },
              ].map(item => (
                <div key={item.title} className="img-hover" style={{ ...item.style, borderRadius: "18px", overflow: "hidden", position: "relative", border: "1px solid var(--border)" }}>
                  <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,8,14,0.8) 0%, transparent 50%)" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem" }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(232,234,242,0.9)" }}>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="section-divider" />

          {/* ── EVENTS ─────────────────────────────────────────────────────────── */}
          <section id="events" style={{ padding: "8rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                <SectionLabel>Events & Performances</SectionLabel>
                <h2 className="display-font" style={{ fontSize: "clamp(2.5rem, 4vw, 3.8rem)", fontWeight: 400, lineHeight: 1.1, marginTop: "1.5rem" }}>
                  Premium live music<br /><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>for unforgettable occasions.</em>
                </h2>
              </div>
            </Reveal>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
              {eventFormats.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="img-hover card-hover" style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border)", position: "relative", minHeight: "380px" }}>
                    <img src={item.image} alt={item.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,8,14,0.98) 0%, rgba(6,8,14,0.4) 60%, transparent 100%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem" }}>
                      <h3 className="display-font" style={{ fontSize: "1.6rem", fontWeight: 500, marginBottom: "0.6rem" }}>{item.title}</h3>
                      <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "var(--text-body)", marginBottom: "1rem" }}>{item.text}</p>
                      <ul style={{ listStyle: "none", display: "grid", gap: "5px" }}>
                        {item.items.map(detail => (
                          <li key={detail} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.76rem", color: "var(--gold-light)" }}>
                            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Ensemble feature */}
            <Reveal>
              <div style={{ borderRadius: "24px", overflow: "hidden", position: "relative", minHeight: "320px", border: "1px solid var(--border-gold)" }}>
                <img src={pianoImage} alt="Piano ensemble" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(6,8,14,0.97) 40%, rgba(6,8,14,0.6) 100%)" }} />
                <div style={{ position: "relative", padding: "3.5rem 4rem", maxWidth: "600px" }}>
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Ensembles</p>
                  <h3 className="display-font" style={{ fontSize: "2.5rem", fontWeight: 400, lineHeight: 1.1, marginBottom: "1.5rem" }}>
                    From solo ambience to a full live band — the sound scales with the occasion.
                  </h3>
                  <ul style={{ listStyle: "none", display: "grid", gap: "10px", marginBottom: "2rem" }}>
                    {["Solo piano for intimate premium settings", "Violin, saxophone, and vocal-led moments", "Small ensembles for elegant guest experiences", "Live band delivery for bigger celebrations"].map(item => (
                      <li key={item} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.9rem", color: "var(--text-body)" }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => setModalOpen(true)} className="btn-gold" style={{ padding: "14px 28px", borderRadius: "12px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 500 }}>
                    Book Your Event <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </Reveal>
          </section>

          <div className="section-divider" />

          {/* ── TALENT DEVELOPMENT ─────────────────────────────────────────────── */}
          <section style={{ padding: "8rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                <SectionLabel>Talent Development</SectionLabel>
                <h2 className="display-font" style={{ fontSize: "clamp(2.5rem, 4vw, 3.8rem)", fontWeight: 400, lineHeight: 1.1, marginTop: "1.5rem" }}>
                  A serious performance pathway<br /><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>for every level of ambition.</em>
                </h2>
              </div>
            </Reveal>

            <div className="talent-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5px", background: "var(--border-gold)", borderRadius: "20px", overflow: "hidden", marginBottom: "2rem" }}>
              {talentJourney.map((step, i) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.title} delay={i * 80}>
                    <div style={{ padding: "2.5rem 2rem", background: "var(--ink-2)", height: "100%" }}>
                      <div style={{ width: 48, height: 48, borderRadius: "12px", border: "1px solid var(--border-gold)", background: "var(--gold-dim)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                        <Icon size={20} style={{ color: "var(--gold)" }} />
                      </div>
                      <div className="display-font" style={{ fontSize: "3.5rem", fontWeight: 300, color: "rgba(201,168,76,0.12)", lineHeight: 1, marginBottom: "0.5rem" }}>0{i + 1}</div>
                      <h3 className="display-font" style={{ fontSize: "1.4rem", fontWeight: 500, marginBottom: "0.75rem" }}>{step.title}</h3>
                      <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-muted)" }}>{step.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal>
              <div style={{ padding: "2.5rem", border: "1px solid var(--border)", borderRadius: "18px", background: "var(--surface)", display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
                <Trophy size={32} style={{ color: "var(--gold)", flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <p className="display-font" style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "4px" }}>Band training, showcases, concert preparation, and selected competition coaching all within one structured pathway.</p>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.7 }}>Every student progresses on their own timeline — always moving forward, always building toward the stage.</p>
                </div>
              </div>
            </Reveal>
          </section>

          <div className="section-divider" />

          {/* ── TESTIMONIALS ───────────────────────────────────────────────────── */}
          <section style={{ padding: "8rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                <SectionLabel>What People Say</SectionLabel>
                <h2 className="display-font" style={{ fontSize: "clamp(2.5rem, 4vw, 3.8rem)", fontWeight: 400, lineHeight: 1.1, marginTop: "1.5rem" }}>
                  Trusted by schools,<br /><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>families, and event clients.</em>
                </h2>
              </div>
            </Reveal>

            <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{
                  position: i === 0 ? "relative" : "absolute",
                  inset: i === 0 ? undefined : 0,
                  opacity: activeTestimonial === i ? 1 : 0,
                  transform: activeTestimonial === i ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                  pointerEvents: activeTestimonial === i ? "auto" : "none",
                }}>
                  <div style={{ padding: "3.5rem 4rem", border: "1px solid var(--border-gold)", borderRadius: "24px", background: "linear-gradient(135deg, rgba(201,168,76,0.04), rgba(6,8,14,0.95))", textAlign: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "2rem" }}>
                      {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="var(--gold)" style={{ color: "var(--gold)" }} />)}
                    </div>
                    <p className="display-font" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 400, lineHeight: 1.5, fontStyle: "italic", color: "#F4F0E8", marginBottom: "2rem" }}>
                      "{t.quote}"
                    </p>
                    <div style={{ width: 40, height: 1, background: "var(--gold)", margin: "0 auto 1.5rem" }} />
                    <p style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--text-body)" }}>{t.author}</p>
                    <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", color: "var(--gold)", textTransform: "uppercase", marginTop: "4px" }}>{t.school}</p>
                  </div>
                </div>
              ))}

              {/* Dots */}
              <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "2rem" }}>
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActiveTestimonial(i)}
                    style={{ width: i === activeTestimonial ? 24 : 8, height: 8, borderRadius: "4px", background: i === activeTestimonial ? "var(--gold)" : "var(--border)", border: "none", cursor: "pointer", transition: "all 0.3s ease" }} />
                ))}
              </div>
            </div>
          </section>

          <div className="section-divider" />

          {/* ── CONTACT CTA ────────────────────────────────────────────────────── */}
          <section id="contact" style={{ padding: "8rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
            <Reveal>
              <div style={{ borderRadius: "28px", overflow: "hidden", position: "relative", padding: "6rem 5rem", border: "1px solid var(--border-gold)", background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(6,8,14,0.98) 100%)", textAlign: "center" }}>
                {/* Decorative rings */}
                <div style={{ position: "absolute", top: "-60px", left: "-60px", width: 300, height: 300, border: "1px solid rgba(201,168,76,0.08)", borderRadius: "50%" }} />
                <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: 400, height: 400, border: "1px solid rgba(201,168,76,0.06)", borderRadius: "50%" }} />

                <div style={{ position: "relative", zIndex: 1 }}>
                  <SectionLabel>Ready To Begin?</SectionLabel>
                  <h2 className="display-font" style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05, marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                    Partner with Pianistar and build<br /><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>something extraordinary.</em>
                  </h2>
                  <p style={{ maxWidth: "560px", margin: "0 auto 3rem", fontSize: "1rem", lineHeight: 1.85, color: "var(--text-body)" }}>
                    From school partnerships to individual coaching, instrument support, and elegant live events — one team, one professional standard.
                  </p>
                  <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                    <button onClick={() => setModalOpen(true)} className="btn-gold" style={{ padding: "16px 36px", borderRadius: "14px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "10px", fontWeight: 500 }}>
                      Get In Touch <ArrowRight size={16} />
                    </button>
                    <a href={whatsappTarget} target="_blank" rel="noreferrer" className="btn-ghost" style={{ padding: "16px 36px", borderRadius: "14px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#E8EAF2", display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", fontWeight: 400 }}>
                      <MessageCircle size={16} /> WhatsApp
                    </a>
                    <a href="tel:+250790359656" className="btn-ghost" style={{ padding: "16px 36px", borderRadius: "14px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#E8EAF2", display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", fontWeight: 400 }}>
                      <Phone size={16} /> Call Us
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        </main>

        {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
        <footer style={{ borderTop: "1px solid var(--border-gold)", background: "rgba(6,7,12,0.98)", padding: "5rem 2rem 3rem" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "4rem", marginBottom: "4rem" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "1.5rem" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "12px", background: "linear-gradient(135deg, #D4A843, #8B5E1A)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 600, color: "#fff", boxShadow: "0 0 20px rgba(201,168,76,0.25)" }}>P</div>
                  <div>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontWeight: 600, letterSpacing: "0.28em", color: "#E8EAF2" }}>PIANISTAR</p>
                    <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "var(--gold)", marginTop: "-2px" }}>MUSIC GROUP</p>
                  </div>
                </div>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-muted)", maxWidth: "280px" }}>
                  Developing musical excellence through education, performance, and artist growth in Rwanda and beyond.
                </p>
                <div style={{ display: "flex", gap: "10px", marginTop: "1.5rem" }}>
                  {[
                    { Icon: YouTubeIcon, href: "https://www.youtube.com/@pianistars", label: "YouTube" },
                    { Icon: TikTokIcon, href: "https://www.tiktok.com/@kevinpianistar", label: "TikTok" },
                    { Icon: InstagramIcon, href: "https://www.instagram.com/kevinpianistar?igsh=dmRoMjh4cmxwdTB3", label: "Instagram" },
                    { Icon: MessageCircle, href: whatsappTarget, label: "WhatsApp" },
                  ].map(item => (
                    <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}
                      style={{ width: 40, height: 40, borderRadius: "10px", border: "1px solid var(--border)", background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", textDecoration: "none", transition: "all 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-gold)"; e.currentTarget.style.color = "var(--gold)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}>
                      <item.Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 500, marginBottom: "1.25rem", letterSpacing: "0.05em" }}>Contact</h4>
                <ul style={{ listStyle: "none", display: "grid", gap: "12px" }}>
                  {[
                    { icon: Phone, text: "+250 790 359 656", href: "tel:+250790359656" },
                    { icon: Mail, text: "pianistarmusic@gmail.com", href: `mailto:${emailTarget}` },
                    { icon: MapPin, text: "Kigali, Rwanda", href: "#" },
                  ].map(item => (
                    <li key={item.text}>
                      <a href={item.href} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.82rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-light)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                        <item.icon size={15} style={{ color: "var(--gold)", flexShrink: 0 }} />
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 500, marginBottom: "1.25rem", letterSpacing: "0.05em" }}>Navigation</h4>
                <ul style={{ listStyle: "none", display: "grid", gap: "10px" }}>
                  {navItems.slice(0, 5).map(([label, href]) => (
                    <li key={label}>
                      <a href={href} style={{ fontSize: "0.82rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-light)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 500, marginBottom: "1.25rem", letterSpacing: "0.05em" }}>Services</h4>
                <ul style={{ listStyle: "none", display: "grid", gap: "10px" }}>
                  {["School Programs", "Private Lessons", "Talent Development", "Live Events", "Instrument Support"].map(item => (
                    <li key={item}>
                      <a href="#services" style={{ fontSize: "0.82rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-light)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="footer-bottom" style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <p style={{ fontSize: "0.78rem", color: "rgba(232,234,242,0.3)" }}>
                © {new Date().getFullYear()} Pianistar Music Group. All rights reserved.
              </p>
              <p style={{ fontSize: "0.78rem", color: "rgba(232,234,242,0.3)" }}>
                Developed by <span style={{ color: "var(--gold)", fontWeight: 500 }}>Virexus Rwanda</span>
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* ── MODAL ──────────────────────────────────────────────────────────────── */}
      {modalOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", background: "rgba(0,0,0,0.8)", backdropFilter: "blur(12px)" }}
          onClick={e => { if (e.target === e.currentTarget) setModalOpen(false); }}>
          <div style={{ width: "100%", maxWidth: "680px", maxHeight: "90vh", overflowY: "auto", borderRadius: "28px", border: "1px solid var(--border-gold)", background: "linear-gradient(180deg, rgba(10,13,22,0.99), rgba(6,8,14,1))", padding: "3rem", boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 60px rgba(201,168,76,0.08)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
              <div>
                <SectionLabel>Get In Touch</SectionLabel>
                <h2 className="display-font" style={{ fontSize: "2.5rem", fontWeight: 400, lineHeight: 1.1, marginTop: "1rem" }}>Tell us what you need.</h2>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "var(--text-muted)", marginTop: "0.75rem" }}>
                  Fill in the details below and your email app will open with a ready-to-send message to Pianistar Music Group.
                </p>
              </div>
              <button onClick={() => setModalOpen(false)} style={{ width: 40, height: 40, borderRadius: "10px", border: "1px solid var(--border)", background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--text-muted)", flexShrink: 0, marginLeft: "1rem" }}>
                <X size={18} />
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              {[
                { label: "Full Name", name: "name", type: "text" as const, colSpan: 1 },
                { label: "Email Address", name: "email", type: "email" as const, colSpan: 1 },
                { label: "Phone Number", name: "phone", type: "text" as const, colSpan: 1 },
              ].map(field => (
                <label key={field.name} style={{ display: "grid", gap: "8px", fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)", gridColumn: field.colSpan === 2 ? "1 / 3" : undefined }}>
                  {field.label}
                  <input
                    name={field.name}
                    type={field.type}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    style={{ padding: "12px 16px", borderRadius: "12px", border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)", color: "#E8EAF2", fontSize: "0.9rem", outline: "none", fontFamily: "'DM Sans', sans-serif", transition: "border-color 0.2s" }}
                    onFocus={e => (e.target.style.borderColor = "var(--border-gold)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border)")}
                  />
                </label>
              ))}

              <label style={{ display: "grid", gap: "8px", fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                Interested In
                <select name="interest" value={form.interest} onChange={handleChange}
                  style={{ padding: "12px 16px", borderRadius: "12px", border: "1px solid var(--border)", background: "rgba(8,10,18,0.98)", color: "#E8EAF2", fontSize: "0.9rem", outline: "none", fontFamily: "'DM Sans', sans-serif", transition: "border-color 0.2s" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--border-gold)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}>
                  {["School Partnership", "Private Lessons", "Family Program", "Live Performance Booking", "Talent Development", "Instrument Support"].map(opt => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </label>

              <label style={{ display: "grid", gap: "8px", fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)", gridColumn: "1 / 3" }}>
                Message
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about the program, event, or support you need."
                  style={{ padding: "12px 16px", borderRadius: "12px", border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)", color: "#E8EAF2", fontSize: "0.9rem", outline: "none", fontFamily: "'DM Sans', sans-serif", resize: "vertical", transition: "border-color 0.2s" }}
                  onFocus={e => (e.target.style.borderColor = "var(--border-gold)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")}
                />
              </label>
            </div>

            <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end", marginTop: "1.75rem", flexWrap: "wrap" }}>
              <button onClick={() => setModalOpen(false)} className="btn-ghost" style={{ padding: "12px 24px", borderRadius: "12px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-body)", cursor: "pointer", fontWeight: 400 }}>
                Cancel
              </button>
              <button onClick={handleSubmit} className="btn-gold" style={{ padding: "12px 28px", borderRadius: "12px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 500 }}>
                Send by Email <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── RESPONSIVE OVERRIDES ── */}
      <style>{`
        /* ── Desktop nav show/hide ── */
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .menu-btn { display: flex !important; }
        }
        @media (min-width: 901px) {
          .menu-btn { display: none !important; }
        }

        /* ── Tablet (≤768px) ── */
        @media (max-width: 768px) {
          #about > div,
          #instruments > div {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #for-schools > div:nth-child(3) {
            grid-template-columns: 1fr 1fr !important;
          }
          #events > div:nth-child(3) > div:last-child > div {
            padding: 2rem !important;
          }
        }

        /* ── iPhone XR and similar (≤414px) ── */
        @media (max-width: 414px) {
          section {
            padding: 4.5rem 1.1rem !important;
          }

          /* ── Talent Development grid: 1 column, no gap-border layout ── */
          .talent-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
            border-radius: 16px !important;
            overflow: hidden !important;
          }
          .talent-grid > * {
            border-bottom: 1px solid rgba(201,168,76,0.18) !important;
          }
          .talent-grid > *:last-child {
            border-bottom: none !important;
          }

          /* ── Footer: fully stacked single column ── */
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.2rem !important;
          }

          /* ── Footer bottom bar: stack copyright + credit ── */
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem !important;
          }

          /* ── Modal form: single column ── */
          .modal-grid { grid-template-columns: 1fr !important; }

          /* ── Hero stats: 2 columns on small screen ── */
          .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }

          /* ── General two-col grids: stack ── */
          #about > div,
          #instruments > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }

        /* ── Very small phones (≤375px, e.g. iPhone SE) ── */
        @media (max-width: 375px) {
          section { padding: 4rem 1rem !important; }
          .footer-grid { gap: 2rem !important; }
        }
      `}</style>
    </>
  );
}
