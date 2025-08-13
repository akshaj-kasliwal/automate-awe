import heroImage from "@/assets/hero-automation.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import { Star, Zap, Clock, Link2, AlertTriangle, Brain, Bot, Database, Code2 } from "lucide-react";
import TrustStrip from "@/components/marketing/TrustStrip";
import BackgroundPattern from "@/components/marketing/BackgroundPattern";

const SEO = () => {
  useEffect(() => {
    const title = "AI Automation & Workflow Solutions | Free Audit";
    const description = "Automate workflows with AI. Save 10+ hours weekly with custom automation, chatbots, and integrations. Book your free automation audit.";
    document.title = title;
    const d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute("content", description);

    // Canonical
    const c = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    c.setAttribute("rel", "canonical");
    c.setAttribute("href", "/");
    if (!c.parentElement) document.head.appendChild(c);

    // JSON-LD
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "AI Automation & Workflow Solutions",
      url: window.location.origin,
      image: window.location.origin + "/opengraph.png",
      description,
      areaServed: "Worldwide",
      sameAs: [],
      offers: [{
        "@type": "Offer",
        name: "Free Automation Audit",
        price: 0,
        priceCurrency: "USD"
      }]
    });
    document.head.appendChild(ld);
    return () => { document.head.removeChild(ld); };
  }, []);
  return null;
};

const Hero = () => {
  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  return (
    <header onMouseMove={handleMouseMove} className="relative isolate overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 py-20 md:py-28">
        <div className="flex flex-col items-start justify-center gap-6 animate-enter">
          <Badge className="shadow-glow" variant="secondary">5⭐ Upwork-rated automations</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="gradient-text">Automate Your Workflows.</span>
            <br /> Save Hours Every Week. Grow with AI.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            I help businesses streamline processes, connect tools, and deploy AI-powered solutions that save 10+ hours a week — without the tech overwhelm.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" variant="hero" className="hover-scale" asChild>
              <a href="#book">Book Your Free Automation Audit</a>
            </Button>
            <Button size="lg" variant="secondary" className="hover-scale" asChild>
              <a href="#checklist">Get My AI Workflow Checklist</a>
            </Button>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Trusted by SMBs, agencies and nonprofits</span>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <img src={heroImage} alt="Automation flow from manual chaos to automated clarity" className="rounded-xl shadow-glow w-full h-auto" loading="eager" />
        </div>
      </div>
    </header>
  );
};

const Section = ({ id, title, children, subtitle }: { id?: string; title: string; subtitle?: string; children: React.ReactNode }) => (
  <section id={id} className="container mx-auto py-16 md:py-24 animate-enter">
    <div className="max-w-3xl mb-10">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && (<p className="text-muted-foreground mt-3 text-lg">{subtitle}</p>)}
    </div>
    {children}
  </section>
);

const PainPoints = () => {
  const points = [
    { Icon: Clock, t: "Spending hours each week on manual updates and follow-ups." },
    { Icon: Link2, t: "Data scattered across tools that don’t talk to each other." },
    { Icon: AlertTriangle, t: "Missed leads because follow-ups slip through the cracks." },
    { Icon: Brain, t: "Struggling to make AI work for your actual business needs." },
  ];
  return (
    <Section title="Still stuck doing repetitive work?">
      <ul className="grid md:grid-cols-2 gap-6">
        {points.map(({ Icon, t }) => (
          <li key={t} className="p-6 rounded-lg border bg-card/60 backdrop-blur-sm flex items-start gap-3 animate-enter">
            <span className="mt-1 rounded-full bg-primary/10 text-primary p-2">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="inline-block">{t}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

const Solutions = () => (
  <Section title="Custom Automation & AI Integration — Built for You">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { t: "Workflow Automation", d: "Connect tools like Google Sheets, CRMs, and email to run hands-free.", Icon: Zap },
        { t: "AI Chatbots", d: "24/7 customer service and lead qualification.", Icon: Bot },
        { t: "Data Integration", d: "APIs, Python scripts, Airtable, and beyond.", Icon: Database },
        { t: "Custom Coding", d: "VBA macros, code conversions, and unique business logic.", Icon: Code2 },
      ].map((s) => (
        <Card key={s.t} className="hover-scale animate-enter">
          <CardHeader className="flex flex-row items-center gap-3">
            <span className="rounded-md bg-accent/20 text-accent p-2">
              <s.Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <CardTitle>{s.t}</CardTitle>
              <CardDescription>{s.d}</CardDescription>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  </Section>
);

const CaseStudies = () => (
  <Section title="Real Businesses. Real Time Saved.">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { t: "Google Sheets + Email Automation", b: "Manual updates & follow-ups eating hours daily.", a: "Real-time updates + instant follow-ups sent automatically.", r: "Great work as usual… very handy with automations and always ready to help." },
        { t: "API + Spreadsheet Automation", b: "Multiple systems, manual data merges.", a: "Automated API pulls into one ready-to-share report.", r: "Sophisticated automation solutions… quick response." },
        { t: "Botpress AI Chatbot for Nonprofit", b: "Team overwhelmed by repetitive support queries.", a: "AI chatbot handling thousands of queries 24/7.", r: "A perfect 5 star performance! Will help thousands…" },
        { t: "Python → VBA Code Conversion", b: "Needed Python logic in VBA for Office tools.", a: "Fully functional VBA macro integration.", r: "Delivered with flying colours!" },
        { t: "Mega Web Scraper → Airtable", b: "Hours of manual scraping + uploading.", a: "Fully automated scraper feeding Airtable in minutes.", r: "Always dedicated and on time." },
        { t: "Jira Data Insights (Confidential)", b: "Raw Jira data, no usable insights.", a: "Automated reports for decision-making.", r: "Repeat client — confidential project." },
      ].map((c) => (
        <Card key={c.t} className="relative overflow-hidden animate-enter">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-tr from-primary/10 to-accent/10" />
          <CardHeader>
            <CardTitle>{c.t}</CardTitle>
            <CardDescription>Before: {c.b}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3"><strong>After:</strong> {c.a}</p>
            <div className="mb-2 flex items-center gap-1 text-primary">
              <Star className="h-4 w-4 fill-current" aria-hidden="true" />
              <Star className="h-4 w-4 fill-current" aria-hidden="true" />
              <Star className="h-4 w-4 fill-current" aria-hidden="true" />
              <Star className="h-4 w-4 fill-current" aria-hidden="true" />
              <Star className="h-4 w-4 fill-current" aria-hidden="true" />
              <span className="ml-2 text-xs text-muted-foreground">Verified client review</span>
            </div>
            <p className="text-sm italic">“{c.r}” ⭐⭐⭐⭐⭐</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

const CTA1 = () => (
  <Section id="book" title="Ready to See What Automation Can Do for You?">
    <div className="flex flex-wrap gap-4">
      <Button size="lg" variant="hero" className="hover-scale">Book My Free Automation Audit</Button>
      <Button size="lg" variant="secondary" className="hover-scale" asChild>
        <a href="#checklist">Get the AI Workflow Checklist</a>
      </Button>
    </div>
  </Section>
);

const About = () => (
  <Section title="Hi, I’m Akshaj 👋" subtitle="I design and build custom automation solutions, AI chatbots, and data workflows that help businesses save time, reduce costs, and scale — using Python, VBA, APIs, and AI.">
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <p className="text-muted-foreground">Over the past 21 projects on Upwork, I’ve worked with SMBs, agencies, and nonprofits to turn messy, manual processes into smooth, automated systems. Most of my work comes from repeat clients — because I focus on listening first, delivering fast, and keeping it simple.</p>
      <ul className="space-y-2">
        <li>• 21 successful projects and counting</li>
        <li>• Quick, clear communication</li>
        <li>• Built for your stack and your team</li>
      </ul>
    </div>
  </Section>
);

const FinalCTA = () => (
  <Section title="Stop Wasting Hours on Work That Can Be Automated." subtitle="Let’s find your quick wins in a free, no-obligation Automation Audit.">
    <div className="flex flex-wrap gap-4">
      <Button size="lg" variant="hero" className="hover-scale">Book My Free Automation Audit</Button>
      <Button size="lg" variant="secondary" className="hover-scale" asChild>
        <a href="#checklist">Get the AI Workflow Checklist</a>
      </Button>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="border-t">
    <div className="container mx-auto py-10 flex flex-col md:flex-row gap-4 items-center justify-between text-sm">
      <nav className="flex items-center gap-6">
        <a className="story-link" href="#">Home</a>
        <a className="story-link" href="#services">Services</a>
        <a className="story-link" href="#privacy">Privacy Policy</a>
      </nav>
      <div className="text-muted-foreground">
        <span>Email: your@email.com</span> · <a className="story-link" href="#">LinkedIn</a>
      </div>
    </div>
  </footer>
);

const LandingPage = () => {
  return (
    <main>
      <SEO />
      <Hero />
      <PainPoints />
      <Solutions />
      <CTA1 />
      <CaseStudies />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default LandingPage;
