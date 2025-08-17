import heroImage from "@/assets/hero-automation.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { Star, Zap, Clock, Link2, AlertTriangle, Brain, Bot, Database, Code2 } from "lucide-react";
import TrustStrip from "@/components/marketing/TrustStrip";
import BackgroundPattern from "@/components/marketing/BackgroundPattern";
import CalendlyModal from "@/components/marketing/CalendlyModal";
import { CALENDLY_URL } from "@/config/marketing";
import { Progress } from "@/components/ui/progress";

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

const Hero = ({ onBook }: { onBook: () => void }) => {
  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  const scrollToChecklist = () => {
    const element = document.getElementById('checklist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header onMouseMove={handleMouseMove} className="relative isolate overflow-hidden tech-grid">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 py-20 md:py-28">
        <div className="flex flex-col items-start justify-center gap-6" style={{ color: 'hsl(222.2 84% 4.9%)', zIndex: 10 }}>
          <Badge className="shadow-glow pulse-glow" variant="secondary" style={{ color: 'hsl(222.2 84% 4.9%)' }}>5⭐ Upwork-rated automations</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight" style={{ color: 'hsl(222.2 84% 4.9%)' }}>
            <span style={{ background: 'linear-gradient(135deg, hsl(258 90% 60%), hsl(195 95% 55%) 70%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Automate Your Workflows.</span>
            <br /> Save Hours Every Week. <span style={{ color: 'hsl(258 90% 60%)' }}>Grow with AI.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl" style={{ color: 'hsl(215.4 16.3% 46.9%)' }}>
            I help businesses streamline processes, connect tools, and deploy AI-powered solutions that save 10+ hours a week — without the tech overwhelm.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="btn-tech hover-scale" onClick={onBook} style={{ color: 'white' }}>
              Book Your Free Automation Audit
            </Button>
            <Button size="lg" variant="secondary" className="hover-lift glow-border" onClick={scrollToChecklist} style={{ color: 'hsl(222.2 84% 4.9%)' }}>
              Get My AI Workflow Checklist
            </Button>
          </div>
          <div className="flex items-center gap-4 text-sm" style={{ color: 'hsl(215.4 16.3% 46.9%)' }}>
            <span>Trusted by SMBs, agencies and nonprofits</span>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="relative">
          <img src={heroImage} alt="Automation flow from manual chaos to automated clarity" className="rounded-xl shadow-glow w-full h-auto" loading="eager" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Section = ({ id, title, children, subtitle }: { id?: string; title: string; subtitle?: string; children: React.ReactNode }) => (
  <section id={id} className="container mx-auto py-12 md:py-16" style={{ color: 'hsl(222.2 84% 4.9%)' }}>
    <div className="max-w-3xl mb-8">
      <h2 className="text-3xl md:text-4xl font-bold" style={{ background: 'linear-gradient(135deg, hsl(258 90% 60%), hsl(195 95% 55%) 70%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{title}</h2>
      {subtitle && (<p className="text-muted-foreground mt-3 text-lg" style={{ color: 'hsl(215.4 16.3% 46.9%)' }}>{subtitle}</p>)}
    </div>
    {children}
  </section>
);

const Solutions = () => (
  <Section title="Custom Automation & AI Integration — Built for You">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { t: "Workflow Automation", d: "Connect tools like Google Sheets, CRMs, and email to run hands-free.", Icon: Zap },
        { t: "AI Chatbots", d: "24/7 customer service and lead qualification.", Icon: Bot },
        { t: "Data Integration", d: "APIs, Python scripts, Airtable, and beyond.", Icon: Database },
        { t: "Custom Coding", d: "VBA macros, code conversions, and unique business logic.", Icon: Code2 },
      ].map((s) => (
        <Card key={s.t} className="hover-lift glass shadow-card" style={{ color: 'hsl(222.2 84% 4.9%)' }}>
          <CardHeader className="flex flex-row items-center gap-3">
            <span className="rounded-md bg-accent/20 text-accent p-2 shadow-glow">
              <s.Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <CardTitle style={{ color: 'hsl(258 90% 60%)' }}>{s.t}</CardTitle>
              <CardDescription style={{ color: 'hsl(215.4 16.3% 46.9%)' }}>{s.d}</CardDescription>
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
        <Card key={c.t} className="relative overflow-hidden hover-lift glass shadow-card" style={{ color: 'hsl(222.2 84% 4.9%)' }}>
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-tr from-primary/10 to-accent/10" />
          <CardHeader>
            <CardTitle style={{ color: 'hsl(258 90% 60%)' }}>{c.t}</CardTitle>
            <CardDescription style={{ color: 'hsl(215.4 16.3% 46.9%)' }}>Before: {c.b}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3" style={{ color: 'hsl(222.2 84% 4.9%)' }}><strong>After:</strong> {c.a}</p>
            <div className="mb-2 flex items-center gap-1 text-primary">
              <Star className="h-4 w-4 fill-current" aria-hidden="true" />
              <Star className="h-4 w-4 fill-current" aria-hidden="true" />
              <Star className="h-4 w-4 fill-current" aria-hidden="true" />
              <Star className="h-4 w-4 fill-current" aria-hidden="true" />
              <Star className="h-4 w-4 fill-current" aria-hidden="true" />
              <span className="ml-2 text-xs" style={{ color: 'hsl(215.4 16.3% 46.9%)' }}>Verified client review</span>
            </div>
            <p className="text-sm italic" style={{ color: 'hsl(222.2 84% 4.9%)' }}>"{c.r}" ⭐⭐⭐⭐⭐</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

const CTA1 = ({ onBook }: { onBook: () => void }) => (
  <Section id="book" title="Ready to See What Automation Can Do for You?">
    <div className="flex flex-wrap gap-4">
      <Button size="lg" className="btn-tech hover-scale" onClick={onBook} style={{ color: 'white' }}>Book My Free Automation Audit</Button>
      <Button size="lg" variant="secondary" className="hover-lift glow-border" asChild style={{ color: 'hsl(222.2 84% 4.9%)' }}>
        <a href="#checklist">Get the AI Workflow Checklist</a>
      </Button>
    </div>
  </Section>
);

const About = () => (
  <Section title="Hi, I'm Akshaj 👋" subtitle="I design and build custom automation solutions, AI chatbots, and data workflows that help businesses save time, reduce costs, and scale — using Python, VBA, APIs, and AI.">
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <p style={{ color: 'hsl(215.4 16.3% 46.9%)' }}>Over the past 21 projects on Upwork, I've worked with SMBs, agencies, and nonprofits to turn messy, manual processes into smooth, automated systems. Most of my work comes from repeat clients — because I focus on listening first, delivering fast, and keeping it simple.</p>
      <ul className="space-y-2" style={{ color: 'hsl(222.2 84% 4.9%)' }}>
        <li>• 21 successful projects and counting</li>
        <li>• Quick, clear communication</li>
        <li>• Built for your stack and your team</li>
      </ul>
    </div>
  </Section>
);
 
const Checklist = ({ onBook }: { onBook: () => void }) => {
  const [responses, setResponses] = useState<{ [key: string]: 'should-automate' | 'already-automated' | 'not-applicable' | null }>({});

  const handleResponse = (itemId: string, response: 'should-automate' | 'already-automated' | 'not-applicable') => {
    setResponses(prev => ({
      ...prev,
      [itemId]: prev[itemId] === response ? null : response
    }));
  };

  const calculateScore = () => {
    const totalItems = checklistItems.length;
    const shouldAutomateCount = Object.values(responses).filter(r => r === 'should-automate').length;
    const alreadyAutomatedCount = Object.values(responses).filter(r => r === 'already-automated').length;
    
    const automationOpportunity = shouldAutomateCount / totalItems * 100;
    const automationMaturity = alreadyAutomatedCount / totalItems * 100;
    
    return Math.round(automationOpportunity + (100 - automationMaturity) / 2);
  };

  const getScoreMessage = (score: number) => {
    if (score >= 80) return "Excellent automation potential!";
    if (score >= 60) return "Good automation potential!";
    if (score >= 40) return "Moderate automation potential.";
    return "Limited automation opportunities.";
  };

  const checklistItems = [
    { id: "email-welcome", label: "Sending welcome emails to new leads" },
    { id: "copy-paste", label: "Copy-pasting data between tools" },
    { id: "chase-clients", label: "Chasing clients for information" },
    { id: "update-systems", label: "Updating multiple systems manually" },
    { id: "report-generation", label: "Creating reports from multiple sources" },
    { id: "manual-data-entry", label: "Manual data entry from forms" },
    { id: "create-invoices", label: "Creating invoices from spreadsheets" },
    { id: "sync-data", label: "Syncing data between tools" },
    { id: "answer-questions", label: "Answering repetitive questions" },
    { id: "manual-lead-qualification", label: "Manual lead qualification" },
    { id: "process-support", label: "Processing basic support requests" },
    { id: "send-status", label: "Sending status updates manually" },
  ];

  const score = calculateScore();

  return (
    <Section id="checklist" title="Quick Automation Assessment" subtitle="Check one box per row to see your automation potential.">
      <div className="max-w-4xl mx-auto">
        {/* Main Container */}
        <div className="border rounded-xl glass shadow-card overflow-hidden" style={{ color: 'hsl(222.2 84% 4.9%)' }}>
          {/* Header */}
          <div className="bg-muted/30 border-b p-4">
            <div className="grid grid-cols-4 gap-4 text-sm font-medium">
              <div className="col-span-1" style={{ color: 'hsl(222.2 84% 4.9%)' }}>Task</div>
              <div className="text-center" style={{ color: 'hsl(120 60% 50%)' }}>Should Automate</div>
              <div className="text-center" style={{ color: 'hsl(210 100% 50%)' }}>Already Done</div>
              <div className="text-center" style={{ color: 'hsl(0 0% 50%)' }}>Not Applicable</div>
            </div>
          </div>

          {/* Checklist Items */}
          <div className="max-h-96 overflow-y-auto">
            {checklistItems.map((item, index) => (
              <div key={item.id} className={`grid grid-cols-4 gap-4 p-3 border-b last:border-b-0 ${index % 2 === 0 ? 'bg-background/50' : 'bg-muted/20'}`}>
                <div className="col-span-1 flex items-center">
                  <span className="text-sm" style={{ color: 'hsl(222.2 84% 4.9%)' }}>{item.label}</span>
                </div>
                
                <div className="flex justify-center items-center">
                  <Checkbox
                    id={`${item.id}-should`}
                    checked={responses[item.id] === 'should-automate'}
                    onCheckedChange={() => handleResponse(item.id, 'should-automate')}
                    className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                  />
                </div>
                
                <div className="flex justify-center items-center">
                  <Checkbox
                    id={`${item.id}-already`}
                    checked={responses[item.id] === 'already-automated'}
                    onCheckedChange={() => handleResponse(item.id, 'already-automated')}
                    className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                  />
                </div>
                
                <div className="flex justify-center items-center">
                  <Checkbox
                    id={`${item.id}-not-applicable`}
                    checked={responses[item.id] === 'not-applicable'}
                    onCheckedChange={() => handleResponse(item.id, 'not-applicable')}
                    className="data-[state=checked]:bg-gray-500 data-[state=checked]:border-gray-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Results Footer */}
          <div className="bg-muted/20 border-t p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full shadow-glow"></span>
                  <span style={{ color: 'hsl(222.2 84% 4.9%)' }}>Should automate: {Object.values(responses).filter(r => r === 'should-automate').length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full shadow-glow"></span>
                  <span style={{ color: 'hsl(222.2 84% 4.9%)' }}>Already done: {Object.values(responses).filter(r => r === 'already-automated').length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-gray-500 rounded-full shadow-glow"></span>
                  <span style={{ color: 'hsl(222.2 84% 4.9%)' }}>Not applicable: {Object.values(responses).filter(r => r === 'not-applicable').length}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-lg font-semibold" style={{ color: 'hsl(258 90% 60%)' }}>{score}%</div>
                  <div className="text-xs" style={{ color: 'hsl(215.4 16.3% 46.9%)' }}>{getScoreMessage(score)}</div>
                </div>
                <div className="w-20">
                  <Progress value={score} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Win Tip */}
        <div className="mt-6 p-4 glass border border-primary/20 rounded-lg">
          <p className="text-sm text-center" style={{ color: 'hsl(222.2 84% 4.9%)' }}>
            💡 <strong>Quick Win:</strong> Most businesses save 5-10 hours weekly by automating just 2-3 tasks. 
            <Button variant="link" className="p-0 h-auto font-medium ml-1" style={{ color: 'hsl(258 90% 60%)' }} onClick={onBook}>
              Book a free audit to identify yours →
            </Button>
          </p>
        </div>
    </div>
  </Section>
);
};

const FinalCTA = ({ onBook }: { onBook: () => void }) => {
  const scrollToChecklist = () => {
    const element = document.getElementById('checklist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section title="Stop Wasting Hours on Work That Can Be Automated." subtitle="Let's find your quick wins in a free, no-obligation Automation Audit.">
      <div className="flex flex-wrap gap-4">
        <Button size="lg" className="btn-tech hover-scale" onClick={onBook} style={{ color: 'white' }}>Book My Free Automation Audit</Button>
        <Button size="lg" variant="secondary" className="hover-lift glow-border" onClick={scrollToChecklist} style={{ color: 'hsl(222.2 84% 4.9%)' }}>
          Get the AI Workflow Checklist
        </Button>
      </div>
    </Section>
  );
};

const Footer = () => (
  <footer className="border-t glass">
    <div className="container mx-auto py-8 flex flex-col md:flex-row gap-4 items-center justify-between text-sm" style={{ color: 'hsl(222.2 84% 4.9%)' }}>
      <nav className="flex items-center gap-6">
        <a className="story-link" href="#" style={{ color: 'hsl(222.2 84% 4.9%)' }}>Home</a>
        <a className="story-link" href="#services" style={{ color: 'hsl(222.2 84% 4.9%)' }}>Services</a>
        <a className="story-link" href="#privacy" style={{ color: 'hsl(222.2 84% 4.9%)' }}>Privacy Policy</a>
      </nav>
      <div style={{ color: 'hsl(215.4 16.3% 46.9%)' }}>
        <span>Email: your@email.com</span> · <a className="story-link" href="#" style={{ color: 'hsl(222.2 84% 4.9%)' }}>LinkedIn</a>
      </div>
    </div>
  </footer>
);

const LandingPage = () => {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  return (
    <main>
      <SEO />
      <Hero onBook={() => setCalendlyOpen(true)} />
      <Solutions />
      <CTA1 onBook={() => setCalendlyOpen(true)} />
      <CaseStudies />
      <Checklist onBook={() => setCalendlyOpen(true)} />
      <About />
      <FinalCTA onBook={() => setCalendlyOpen(true)} />
      <Footer />
      <CalendlyModal open={calendlyOpen} onOpenChange={setCalendlyOpen} url={CALENDLY_URL} />
    </main>
  );
};

export default LandingPage;
