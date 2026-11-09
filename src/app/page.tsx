import Image from "next/image";
import { ExpertiseIcon, IdeaShape, Orbit, Rings, SparkLabArt, Thread } from "@/components/Art";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import {
  about,
  approach,
  contact,
  contactSection,
  expertise,
  hero,
  ideas,
  orbitWords,
  philosophy,
  projects,
  services,
  site,
} from "@/content/site";

const wordTones = ["w-terracotta", "w-teal", "w-plum"];

function SectionHead({ num, label, title, intro }: { num: string; label: string; title: string; intro?: string }) {
  return (
    <div className="section-head" data-reveal>
      <span className="eyebrow">
        <span className="num">{num}</span>
        {label}
      </span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

function HeroSection() {
  const words = hero.headlineWords;
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {hero.eyebrow}
          </span>
          <h1 id="hero-title">
            {hero.headlineStart}{" "}
            {words.map((w, i) => (
              <span key={w}>
                <em className={wordTones[i % wordTones.length]}>{w}</em>
                {i < words.length - 2 ? ", " : i === words.length - 2 ? " and " : "."}
              </span>
            ))}
          </h1>
          <p className="hero-intro">{hero.intro}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore my work <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href="#about" className="btn btn-ghost">
              About me
            </a>
          </div>
        </div>
        <div className="portrait">
          <span className="portrait-blob b1" aria-hidden="true" />
          <span className="portrait-blob b2" aria-hidden="true" />
          <span className="portrait-blob b3" aria-hidden="true" />
          <Orbit words={orbitWords} />
          <div className="portrait-photo">
            <Image
              src="/smriti-vasistha.jpg"
              alt={`Portrait of ${site.name}, smiling, with the rooftops of Prague in the background`}
              width={762}
              height={810}
              priority
              sizes="(max-width: 880px) 70vw, 340px"
            />
          </div>
          <div className="portrait-tag">
            <span className="pin" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
              </svg>
            </span>
            {site.location}
          </div>
        </div>
      </div>
      <Thread />
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">
            <span className="num">01</span>About me
          </span>
          <h2 id="about-title">{about.title}</h2>
        </div>
        <div className="about-grid">
          <div className="about-text" data-reveal>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <dl className="facts" data-reveal style={{ ["--delay" as string]: "120ms" }}>
            {about.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="approach">
          <div className="approach-head" data-reveal>
            <h3>{approach.title}</h3>
            <p>{approach.intro}</p>
          </div>
          <ol className="cycle">
            {approach.steps.map((s, i) => (
              <li key={s.title} data-reveal style={{ ["--delay" as string]: `${i * 90}ms` }}>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="cycle-loop" data-reveal>
            <span aria-hidden="true">↺</span> …and then the cycle begins again, in your own classroom.
          </p>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="section philosophy" aria-labelledby="philosophy-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">
            <span className="num">02</span>Educational philosophy
          </span>
          <h2 id="philosophy-title">
            {philosophy.title}
          </h2>
        </div>
        <p className="philosophy-statement" data-reveal>
          Education should be <em>meaningful, creative, inclusive</em> and <em>engaging</em>. It should leave room for
          curiosity, invite collaboration and connect to the world beyond the classroom.
        </p>
        <p className="philosophy-note" data-reveal>
          <span aria-hidden="true">✎</span> {philosophy.note}
        </p>
        <div className="principles">
          {philosophy.principles.map((p, i) => (
            <div className="principle" key={p.title} data-reveal style={{ ["--delay" as string]: `${i * 90}ms` }}>
              <span className="p-num">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatIDoSection() {
  return (
    <section id="what-i-do" className="section" aria-labelledby="what-title">
      <div className="container">
        <SectionHead
          num="03"
          label="What I do"
          title="Four areas, one aim: learning that matters"
          intro="My work brings together inclusive design, active methodologies, thoughtful technology and teacher development, so each idea strengthens the others."
        />
        <div className="expertise-grid">
          {expertise.map((area, i) => (
            <article
              key={area.title}
              className={`exp-card tone-${area.tone}`}
              data-reveal
              style={{ ["--delay" as string]: `${(i % 2) * 100}ms` }}
            >
              <div className="exp-icon">
                <ExpertiseIcon index={i} />
              </div>
              <h3>{area.title}</h3>
              <p className="exp-summary">{area.summary}</p>
              <ul className="chips">
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="services" style={{ marginTop: "clamp(48px, 7vw, 80px)" }}>
          {services.map((s, i) => (
            <div className="service" key={s.title} data-reveal style={{ ["--delay" as string]: `${i * 90}ms` }}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead
          num="04"
          label="My projects"
          title="Ideas I build, test and share"
          intro="Tools and experiments that turn my beliefs about learning into something teachers and students can actually use."
        />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <article className="project" key={p.name} data-reveal style={{ ["--delay" as string]: `${i * 120}ms` }}>
              <div className="project-media">
                {p.image ? (
                  <Image src={p.image.src} alt={p.image.alt} width={1200} height={630} sizes="(max-width: 880px) 100vw, 640px" />
                ) : (
                  <SparkLabArt />
                )}
              </div>
              <div className="project-body">
                <div className="project-top">
                  <span className={`status status-${p.status}`}>{p.status === "live" ? "Live" : "In development"}</span>
                  <span className="project-tags">{p.tags.join(" · ")}</span>
                </div>
                <h3 id={`project-${p.name.toLowerCase()}`}>{p.name}</h3>
                <p className="project-tagline">{p.tagline}</p>
                <p className="project-desc">{p.description}</p>
                {p.link ? (
                  <div className="project-link">
                    <a
                      href={p.link.href}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-describedby={`project-${p.name.toLowerCase()}`}
                    >
                      {p.link.label} <span className="arrow" aria-hidden="true">↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </div>
                ) : (
                  <p className="project-soon">Currently being designed and tested. More soon.</p>
                )}
              </div>
            </article>
          ))}
          <div className="project-next" data-reveal>
            <span className="plus" aria-hidden="true">+</span>
            <p>
              <strong>The next experiment</strong>
              New tools, applications and resources will appear here as they grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function IdeasSection() {
  return (
    <section id="ideas" className="section" aria-labelledby="ideas-title">
      <div className="container">
        <SectionHead num="05" label="Ideas & Resources" title="Notes from the learning lab" intro={ideas.intro} />
        <div className="ideas-grid">
          {ideas.categories.map((c, i) => (
            <div className="idea" key={c.name} data-reveal style={{ ["--delay" as string]: `${i * 90}ms` }}>
              <IdeaShape index={i} />
              <span className="soon">Coming soon</span>
              <h3>{c.name}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="contact-card" data-reveal>
          <Rings />
          <span className="eyebrow" style={{ color: "#fde3d8" }}>
            <span className="num" style={{ color: "#fff8f2" }}>06</span>Contact
          </span>
          <h2 id="contact-title" style={{ marginTop: 14 }}>
            Let&rsquo;s talk about <em>learning</em>.
          </h2>
          <p>{contactSection.text}</p>
          <div className="contact-links">
            {contact.email ? (
              <a className="btn btn-solid" href={`mailto:${contact.email}`}>
                Email me <span className="arrow" aria-hidden="true">→</span>
              </a>
            ) : (
              <span className="placeholder">[Email address to add]</span>
            )}
            {contact.linkedin ? (
              <a className="btn" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="placeholder">[LinkedIn link to add]</span>
            )}
            {contact.organisationUrl ? (
              <a className="btn" href={contact.organisationUrl} target="_blank" rel="noopener noreferrer">
                ITC International Prague <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="placeholder">[ITC International Prague link to add]</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}/smriti-vasistha.jpg`,
  jobTitle: "Academic Director and Head Teacher Trainer",
  worksFor: { "@type": "Organization", name: "ITC International Prague" },
  address: { "@type": "PostalAddress", addressLocality: "Prague", addressCountry: "CZ" },
  knowsAbout: expertise.flatMap((a) => a.items),
};

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <span id="top" />
      <Header />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <WhatIDoSection />
        <ProjectsSection />
        <IdeasSection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {site.name} · {site.location}
          </span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
      <Reveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
