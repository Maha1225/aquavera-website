import React, { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Droplet, Waves, Activity, Leaf, Factory, Building2, Sprout, Hotel, CheckCircle2 } from 'lucide-react';
import './App.css';

const stages = [
  { id: '01', title: 'Collect', kicker: 'THE BEGINNING', image: '/images/collect.jpg', alt: 'Reservoir water surrounded by a dark mountain landscape', description: 'Every responsible water story begins with understanding the source, the flow, and the needs of the people and places it serves.', detail: 'Source assessment · Flow mapping · Project discovery' },
  { id: '02', title: 'Transform', kicker: 'THE SCIENCE', image: '/images/treatment-aerial.jpg', alt: 'Illustrated treatment basins and connected water infrastructure', description: 'Purpose-designed treatment brings physical, biological, and filtration processes together for the water’s intended next use.', detail: 'Treatment design · Separation · Filtration' },
  { id: '03', title: 'Return', kicker: 'THE NEXT CHAPTER', image: '/images/nature.png', alt: 'A restored green landscape with clean flowing water', description: 'When quality and application align, treated water can support reuse, industry, irrigation, or responsible discharge.', detail: 'Quality checks · Reuse planning · Responsible return' }
];

const solutions = [
  { n: '01', title: 'Wastewater treatment', text: 'Integrated treatment approaches shaped around wastewater characteristics, operational needs, and the intended outcome.', image: '/images/treatment-aerial.jpg', alt: 'Water treatment basins', target: '#process' },
  { n: '02', title: 'Sewage treatment', text: 'Practical sewage treatment planning that considers capacity, site constraints, operation, and maintenance.', image: '/images/collect.jpg', alt: 'Water reservoir and landscape', target: '#process' },
  { n: '03', title: 'Filtration & purification', text: 'Filtration and polishing stages selected to suit the source water and the requirements of its next use.', image: '/images/purification.jpg', alt: 'Vertical filtration vessels', target: '#process' },
  { n: '04', title: 'Water recycling & reuse', text: 'Explore opportunities to bring treated water back into suitable processes, landscapes, and operations.', image: '/images/nature.png', alt: 'Water returning to a green landscape', target: '#sustainability' }
];

const industries = [
  { icon: Factory, title: 'Manufacturing', desc: 'Process water, wastewater streams, and reuse opportunities.' },
  { icon: Building2, title: 'Commercial buildings', desc: 'Building-scale water systems and practical conservation.' },
  { icon: Waves, title: 'Municipal infrastructure', desc: 'Community-scale treatment needs and responsible return.' },
  { icon: Hotel, title: 'Hospitality & institutions', desc: 'Reliable water planning for places with daily demand.' },
  { icon: Sprout, title: 'Agriculture & irrigation', desc: 'Assessing suitable reuse pathways for landscape and crops.' }
];

const journey = [
  ['01', 'Assess & collect', 'Understand the source, flow, site conditions, and intended outcome.'],
  ['02', 'Treat & separate', 'Choose treatment steps that address the characteristics of the water.'],
  ['03', 'Filter & purify', 'Apply suitable filtration or polishing where the application requires it.'],
  ['04', 'Check quality', 'Verify relevant parameters against applicable requirements and intended use.'],
  ['05', 'Reuse or return', 'Plan an appropriate reuse route or responsible discharge pathway.']
];

function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="AQUAVERA home"><span className="brand-mark"><Droplet size={22} strokeWidth={1.7}/><span /></span><span className="brand-name">AQUAVERA</span></a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [formState, setFormState] = useState('idle');
  const [formError, setFormError] = useState('');
  const stage = stages[activeStage];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const submitForm = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setFormError('Please complete the required fields with valid details.');
      form.reportValidity();
      return;
    }
    setFormError('');
    setFormState('sent');
    form.reset();
  };

  return <div className="site-shell">
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-wrap">
        <Brand light />
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a><a href="#solutions" onClick={closeMenu}>Solutions</a><a href="#process" onClick={closeMenu}>Process</a><a href="#sustainability" onClick={closeMenu}>Sustainability</a><a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Discuss your project <ArrowUpRight size={15}/></a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="/images/hero-water.png" aria-hidden="true"><source src="/videos/hero-water.mp4" type="video/mp4" /></video>
        <div className="hero-art" aria-hidden="true" />
        <div className="hero-grain" />
        <div className="hero-inner">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> WATER <i>·</i> ENGINEERING <i>·</i> RENEWAL</div>
          <h1 id="hero-title">Every drop<br/>deserves a <em>second</em><br/><span>life.</span></h1>
          <div className="hero-bottom">
            <p>Thoughtful water and wastewater solutions, designed around the next chapter of every drop.</p>
            <div className="hero-actions"><a className="button button-primary" href="#transformation">Explore the transformation <ArrowDownRight size={17}/></a><a className="text-link light-link" href="#contact">Discuss your project <ArrowUpRight size={16}/></a></div>
          </div>
        </div>
        <div className="hero-index"><span>01 / 05</span><span className="index-line"/></div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO DISCOVER</span><span className="scroll-stem"/></a>
      </section>

      <section className="intro section-pad" id="about">
        <div className="section-meta"><span>01 — OUR POINT OF VIEW</span><span>WATER IS A CYCLE, NOT A FINISH LINE</span></div>
        <div className="intro-grid">
          <h2>Water is never<br/>the end of a story.<br/><span>It’s the beginning.</span></h2>
          <div className="intro-copy"><p className="lead">We see water as a resource with another chapter waiting to happen.</p><p>AQUAVERA brings water treatment, wastewater management, and reuse thinking together. We start by understanding your site, your water, and your goals — then shape a practical path forward.</p><a className="text-link dark-link" href="#process">Discover our approach <ArrowRight size={16}/></a></div>
        </div>
        <div className="intro-foot"><span className="small-orbit"><Waves size={20}/></span><span>ENGINEERED WITH INTENTION. DESIGNED FOR WHAT COMES NEXT.</span><span className="foot-rule"/></div>
      </section>

      <section className="transformation section-pad" id="transformation">
        <div className="section-meta light-meta"><span>02 — FOLLOW THE DROP</span><span>FROM SOURCE TO SECOND LIFE</span></div>
        <div className="trans-head"><div><div className="eyebrow"><span className="eyebrow-dot" /> THE WATER JOURNEY</div><h2>One drop. Three<br/><em>extraordinary</em> stages.</h2></div><p>Tap into each stage to see how a considered water journey can move from source to solution.</p></div>
        <div className="stage-experience">
          <div className="stage-visual"><img key={stage.image} src={stage.image} alt={stage.alt}/><div className="visual-stamp"><Droplet size={18}/><span>AQUAVERA / FIELD NOTES</span></div><div className="visual-number">{stage.id}</div></div>
          <div className="stage-content">
            <div className="stage-kicker">{stage.kicker}</div><h3>{stage.title}<span>.</span></h3><p>{stage.description}</p><div className="stage-detail">{stage.detail}</div>
            <div className="stage-selector" role="tablist" aria-label="Water transformation stages">
              {stages.map((s, i) => <button key={s.id} role="tab" aria-selected={activeStage === i} className={activeStage === i ? 'stage-tab active' : 'stage-tab'} onClick={() => setActiveStage(i)}><span>{s.id}</span>{s.title}<ArrowUpRight size={15}/></button>)}
            </div>
            <div className="stage-progress" aria-hidden="true"><span style={{ width: `${((activeStage + 1) / stages.length) * 100}%` }}/></div>
          </div>
        </div>
        <div className="flow-caption"><span className="flow-symbol">↗</span><span>ONE CONNECTED SYSTEM. MANY POSSIBLE NEXT CHAPTERS.</span><span className="flow-line"/></div>
      </section>

      <section className="solutions section-pad" id="solutions">
        <div className="section-meta"><span>03 — WHAT WE DO</span><span>ENGINEERING, WITH THE BIG PICTURE IN MIND</span></div>
        <div className="solutions-heading"><h2>Complex water challenges.<br/><span>Clearer ways forward.</span></h2><p>Every site has its own conditions. Our solutions begin with the details that make yours different.</p></div>
        <div className="solution-grid">
          {solutions.map((item, i) => <a href={item.target} className={`solution-item solution-${i+1}`} key={item.n}><div className="solution-image"><img src={item.image} alt={item.alt}/><span className="solution-arrow"><ArrowUpRight size={21}/></span><span className="image-index">{item.n} / SOLUTION</span></div><div className="solution-title"><h3>{item.title}</h3><span className="tiny-arrow">↗</span></div><p>{item.text}</p></a>)}
        </div>
      </section>

      <section className="industries section-pad" id="industries">
        <div className="section-meta light-meta"><span>04 — WHERE WATER MATTERS</span><span>BUILT AROUND REAL-WORLD NEEDS</span></div>
        <div className="industries-layout"><div className="industries-title"><div className="eyebrow"><span className="eyebrow-dot" /> APPLICATIONS</div><h2>Different places.<br/>One shared<br/><em>resource.</em></h2><p>Water needs change from site to site. The right approach starts by listening to the people who depend on it.</p><a className="text-link light-link" href="#contact">Talk through your needs <ArrowRight size={16}/></a></div>
          <div className="industry-list">{industries.map(({icon: Icon,title,desc},i)=><div className="industry-row" key={title}><span className="industry-no">0{i+1}</span><span className="industry-icon"><Icon size={22} strokeWidth={1.4}/></span><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight className="industry-arrow" size={18}/></div>)}</div>
        </div>
      </section>

      <section className="process section-pad" id="process">
        <div className="section-meta"><span>05 — THE TREATMENT JOURNEY</span><span>THE RIGHT STEPS, IN THE RIGHT ORDER</span></div>
        <div className="process-heading"><h2>Good outcomes start<br/>with <span>good questions.</span></h2><p>There is no one-size-fits-all route. A considered process connects the source, treatment choices, quality checks, and the intended destination.</p></div>
        <div className="process-track">{journey.map(([n,title,desc],i)=><div className="process-step" key={n}><div className="process-top"><span>{n}</span><span className="process-node">{i===4?<Leaf size={16}/>:<Droplet size={16}/>}</span></div><div className="process-connector"/><h3>{title}</h3><p>{desc}</p></div>)}</div>
        <div className="process-note"><Activity size={17}/><span>THE PROCESS IS ADAPTED TO SITE CONDITIONS, APPLICABLE STANDARDS, AND INTENDED USE.</span></div>
      </section>

      <section className="sustainability" id="sustainability">
        <div className="sustain-image" role="img" aria-label="Restored river landscape with lush green banks and reflective water"/>
        <div className="sustain-overlay"/>
        <div className="sustain-content"><div className="eyebrow"><span className="eyebrow-dot" /> OUR SHARED FUTURE</div><h2>Better water.<br/>A better relationship<br/><em>with nature.</em></h2><p>Responsible water management is about more than a process. It is about seeing the connection between our daily decisions, the resources we use, and the environments we share.</p><a className="button button-primary" href="#contact">Start a conversation <ArrowUpRight size={17}/></a></div>
        <div className="sustain-side-note">RESPECT THE SOURCE. DESIGN FOR THE NEXT CHAPTER.</div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="section-meta"><span>06 — LET’S TALK WATER</span><span>START WITH A CONVERSATION</span></div>
        <div className="contact-grid"><div className="contact-copy"><div className="eyebrow"><span className="eyebrow-dot" /> YOUR PROJECT, YOUR CONTEXT</div><h2>What could your<br/>water do <em>next?</em></h2><p>Tell us a little about your site, your challenge, or the opportunity you’re exploring. We’ll use it as a starting point for a more useful conversation.</p><div className="contact-aside"><span className="contact-mark"><Droplet size={22}/></span><div><strong>AQUAVERA</strong><span>Every drop deserves a second life.</span></div></div></div>
          <div className="form-panel">{formState === 'sent' ? <div className="form-success" role="status"><CheckCircle2 size={34}/><h3>Thank you for starting the conversation.</h3><p>This demo form has validated your details locally. No message was sent or stored.</p><button className="text-link dark-link" onClick={() => setFormState('idle')}>Submit another inquiry <ArrowRight size={16}/></button></div> : <form onSubmit={submitForm} noValidate><div className="form-heading"><span>PROJECT INQUIRY</span><span>FIELDS MARKED * ARE REQUIRED</span></div><div className="form-row"><label>Your name *<input name="name" autoComplete="name" required minLength="2" placeholder="Name"/></label><label>Email address *<input name="email" type="email" autoComplete="email" required placeholder="you@company.com"/></label></div><label>Organization<input name="organization" autoComplete="organization" placeholder="Company or organization"/></label><label>Treatment requirement *<select name="requirement" required defaultValue=""><option value="" disabled>Select an area</option><option>Wastewater treatment</option><option>Sewage treatment</option><option>Filtration & purification</option><option>Water recycling & reuse</option><option>Not sure yet / exploratory</option></select></label><label>Tell us about your project *<textarea name="details" required minLength="10" rows="4" placeholder="A little about your site, goals, or water challenge…"/></label>{formError && <p className="form-error" role="alert">{formError}</p>}<button className="button button-dark" type="submit">Send project inquiry <ArrowUpRight size={17}/></button><p className="form-disclaimer">Demonstration form only — your information stays in this browser session and is not sent to a server.</p></form>}</div>
        </div>
      </section>
    </main>

    <footer className="footer"><div className="footer-top"><div><Brand/><p className="footer-tagline">Every drop deserves<br/>a second life.</p></div><div className="footer-mission"><span>OUR MISSION</span><p>To help people see water differently — as a resource to understand, treat thoughtfully, and return responsibly.</p></div><div className="footer-links"><span>EXPLORE</span><a href="#about">About</a><a href="#solutions">Solutions</a><a href="#process">Process</a><a href="#sustainability">Sustainability</a></div><div className="footer-contact"><span>HAVE A WATER CHALLENGE?</span><a href="#contact">Let’s talk <ArrowUpRight size={16}/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} AQUAVERA. A CONCEPT BRAND.</span><a href="#home">BACK TO TOP ↑</a><span>MADE WITH CARE FOR EVERY DROP</span></div></footer>
  </div>;
}

export default App;
