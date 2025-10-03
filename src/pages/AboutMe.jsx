import React from 'react'

export default function AboutMe() {
  return (
    <div style={{marginTop: 100}}>
  <div className="about-me-hero reveal">
    <div className="about-me-hero-left">
      <span className="eyebrow">Step‑by‑Step · Story &amp; Career</span>
      <h1>Yasir Masood — Productive developer &amp; creator</h1>
      <p className="lead">
        A compact, professional timeline of my journey — educational milestones,
        jobs, major projects and what's next. Designed for clarity and to look
        great on screen.
      </p>
      <div className="ctas">
        <a className="btn btn-primary" href="#projects">
          <i className="fa-solid fa-briefcase" /> View Projects
        </a>
        <a
          className="btn btn-ghost"
          href="https://yasir45455.github.io/portfolio.github.io/"
          target="_blank"
          rel="noopener"
        >
          Portfolio
        </a>
        <a className="btn btn-ghost" href="mailto:youremail@gmail.com">
          <i className="fa-solid fa-envelope" /> Email
        </a>
      </div>
    </div>
    <aside className="mini-card reveal">
      <h4>Quick facts</h4>
      <div className="meta">Frontend • React • Node • MongoDB</div>
      <div style={{ height: 10 }} />
      <div className="meta">Available for freelance &amp; collaborations</div>
      <div style={{ height: 14 }} />
      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div className="meta">
          <i className="fab fa-whatsapp" /> +92 306 5778113
        </div>
        <div>
          <a
            className="btn btn-ghost"
            href="https://wa.me/923065778113"
            target="_blank"
            rel="noopener"
          >
            Message
          </a>
        </div>
      </div>
    </aside>
  </div>
  <main>
    {/* SKILLS */}
    <div>
      <h2 style={{ color: "#fff", marginBottom: 12 }}>Skills</h2>
    </div>
    <div className="profile-wrap">
      <div className="circle-area" aria-hidden="false">
        <div className="avatar" title="Yasir — sample avatar">
          {/* Replace this image URL with any image you like */}
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
            alt="Human portrait"
          />
        </div>
        {/* Skill boxes around */}
        <div className="skill s1">
          <span className="dot" />
          <div>
            <span className="label">Frontend</span>
            <span className="small">React · HTML · CSS</span>
          </div>
        </div>
        <div className="skill s2">
          <span className="dot" />
          <div>
            <span className="label">UI/UX</span>
            <span className="small">Design systems &amp; Prototypes</span>
          </div>
        </div>
        <div className="skill s3">
          <span className="dot" />
          <div>
            <span className="label">JavaScript</span>
            <span className="small">ES6+ · DOM · Patterns</span>
          </div>
        </div>
        <div className="skill s4">
          <span className="dot" />
          <div>
            <span className="label">Node.js</span>
            <span className="small">APIs &amp; Express</span>
          </div>
        </div>
        <div className="skill s5">
          <span className="dot" />
          <div>
            <span className="label">Databases</span>
            <span className="small">MongoDB · SQL</span>
          </div>
        </div>
        <div className="skill s6">
          <span className="dot" />
          <div>
            <span className="label">Android</span>
            <span className="small">Basics &amp; UI</span>
          </div>
        </div>
        <div className="skill s7">
          <span className="dot" />
          <div>
            <span className="label">Git &amp; CI</span>
            <span className="small">GitHub workflows</span>
          </div>
        </div>
        <div className="skill s8">
          <span className="dot" />
          <div>
            <span className="label">Problem Solving</span>
            <span className="small">Algorithms &amp; Logic</span>
          </div>
        </div>
      </div>
      <div className="info" aria-hidden="false">
        <div>
          <div className="title">Yasir's Skills</div>
          <div className="subtitle">
            A clean, modern layout showing a human avatar in the center with key
            skills highlighted around. This is one-file HTML + CSS — change
            labels, image, or positions as you like.
          </div>
        </div>
        <div>
          <div className="chips">
            <div className="chip">Responsive</div>
            <div className="chip">Hover effects</div>
            <div className="chip">Accessible</div>
            <div className="chip">Easy to customize</div>
          </div>
        </div>
        <div style={{ marginTop: "auto" }}>
          <small style={{ color: "var(--muted)" }}>
            Tip: replace the <code>&lt;img src="..."&gt;</code> with your own
            photo. Text in skill boxes can be edited directly.
          </small>
        </div>
      </div>
    </div>
    {/* TIMELINE */}
    <div>
      <h2 style={{ color: "#fff", marginBottom: 12 }}>Life Update</h2>
    </div>
    <section className="timeline-wrap reveal">
      <div className="timeline">
        {/* Step 1 */}
        <div className="step">
          <div className="marker">1</div>
          <div className="card glass-card">
            <div className="meta">Early life</div>
            <h4>Starting point</h4>
            <p>
              Grew up curious about technology and building things. Early
              exposure to computers and the web shaped my interest in creating
              interactive experiences.
            </p>
          </div>
        </div>
        {/* Step 2 */}
        <div className="step">
          <div className="marker">2</div>
          <div className="card glass-card">
            <div className="meta">Education · 2020 – 2024</div>
            <h4>Bachelor in Computer Science</h4>
            <p>
              Completed a bachelor's degree (2020–2024). Focused on software
              fundamentals, web development and databases.
            </p>
            <div className="chips" aria-hidden="true">
              <div className="chip">Algorithms</div>
              <div className="chip">Databases</div>
              <div className="chip">Web</div>
            </div>
          </div>
        </div>
        {/* Step 3 */}
        <div className="step">
          <div className="marker">3</div>
          <div className="card glass-card">
            <div className="meta">Bootcamp · 2023</div>
            <h4>Web Development Bootcamp</h4>
            <p>
              Intensive online bootcamp sharpening practical skills in HTML,
              CSS, JavaScript and modern frameworks. Built production‑like
              projects to refine workflow.
            </p>
          </div>
        </div>
        {/* Step 4 */}
        <div className="step">
          <div className="marker">4</div>
          <div className="card glass-card">
            <div className="meta">First roles</div>
            <h4>Digital Marketing Intern &amp; Frontend Developer</h4>
            <p>
              Worked as a Digital Marketing Intern (6 months) creating content
              and campaigns, then moved to a Frontend Developer role (1 year)
              building React projects and integrating APIs.
            </p>
            <div className="chips">
              <div className="chip">React</div>
              <div className="chip">Node.js</div>
              <div className="chip">Content</div>
            </div>
          </div>
        </div>
        {/* Step 5 */}
        <div className="step">
          <div className="marker">5</div>
          <div className="card glass-card">
            <div className="meta">Major projects</div>
            <h4>Portfolio, E‑commerce template &amp; Dashboard</h4>
            <p>
              Built a responsive portfolio, an e‑commerce template with cart
              &amp; checkout, and a social media/dashboard tool. Emphasis on UX,
              performance and clean code.
            </p>
            <div style={{ height: 8 }} />
            <a
              className="btn btn-ghost"
              href="https://yasir45455.github.io/portfolio.github.io/"
              target="_blank"
              rel="noopener"
            >
              <i className="fa-solid fa-arrow-up-right-from-square" /> Open
              portfolio
            </a>
          </div>
        </div>
        {/* Step 6 */}
        <div className="step">
          <div className="marker">6</div>
          <div className="card glass-card">
            <div className="meta">Freelance &amp; growth</div>
            <h4>Freelance work &amp; continuous learning</h4>
            <p>
              Took on freelance projects to expand real‑world experience,
              focused on backend integration, responsive UI, and deployment best
              practices.
            </p>
          </div>
        </div>
        {/* Step 7 */}
        <div className="step">
          <div className="marker">7</div>
          <div className="card glass-card">
            <div className="meta">Current focus</div>
            <h4>Building polished products</h4>
            <p>
              Currently focusing on product quality, maintainable code, and
              better design systems. Actively improving accessibility and
              performance metrics.
            </p>
          </div>
        </div>
        {/* Step 8 */}
        <div className="step">
          <div className="marker">8</div>
          <div className="card glass-card">
            <div className="meta">Next</div>
            <h4>Goals &amp; ambitions</h4>
            <p>
              Aim to contribute to larger scale products, take on team
              leadership, and mentor junior developers. Exploring full‑stack
              architecture and cloud deployments.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Projects */}
    <section id="projects" className="reveal">
      <h2 style={{ color: "#fff", marginBottom: 12 }}>Selected Projects</h2>
      <div className="grid-3">
        <div className="glass-card project-card">
          <div>
            <strong style={{ color: "#fff" }}>Portfolio Website</strong>
            <div className="muted">
              Personal site showcasing projects &amp; case studies
            </div>
          </div>
          <a
            href="https://yasir45455.github.io/portfolio.github.io/"
            target="_blank"
            rel="noopener"
          >
            Open project
          </a>
        </div>
        <div className="glass-card project-card">
          <div>
            <strong style={{ color: "#fff" }}>E‑commerce Template</strong>
            <div className="muted">
              Shopping flow with cart, product pages and checkout
            </div>
          </div>
          <a href="#">Repo / Demo</a>
        </div>
        <div className="glass-card project-card">
          <div>
            <strong style={{ color: "#fff" }}>Social Dashboard</strong>
            <div className="muted">
              Management dashboard for posts, analytics &amp; scheduling
            </div>
          </div>
          <a href="#">Repo / Demo</a>
        </div>
      </div>
    </section>
    {/* CONTACT */}
    <section className="reveal">
      <h2 style={{ color: "#fff", marginBottom: 8 }}>Contact &amp; Social</h2>
      <div
        className="glass-card"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap"
        }}
      >
        <div>
          <div style={{ fontWeight: 700, color: "#fff" }}>Yasir Masood</div>
          <div className="muted">
            WhatsApp: +92 306 5778113 · LinkedIn: Yasir Masood
          </div>
          <div style={{ height: 8 }} />
          <div className="muted">
            Email:{" "}
            <a
              href="mailto:youremail@gmail.com"
              style={{ color: "var(--muted)", textDecoration: "underline" }}
            >
              youremail@gmail.com
            </a>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a
            className="btn btn-ghost"
            href="https://wa.me/923065778113"
            target="_blank"
            rel="noopener"
          >
            <i className="fab fa-whatsapp" />
          </a>
          <a className="btn btn-ghost" href="#" aria-label="Facebook">
            <i className="fab fa-facebook" />
          </a>
          <a className="btn btn-ghost" href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin" />
          </a>
          <a className="btn btn-ghost" href="#" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </section>
  </main>
</div>


  )
}
