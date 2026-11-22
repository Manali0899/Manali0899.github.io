/* =========================================================
   CONTENT — edit these arrays to update the site.
   ========================================================= */

const TYPED_WORDS = ["Backend Engineering", "Python & Django", "Java & Spring", "Building APIs", "Data Pipelines"];

// Icons: "devicon-..." classes come from devicon.dev, "fa-..." from fontawesome.com
const SKILLS = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "Django", icon: "devicon-django-plain", color: "#44b78b" },
  { name: "Spring", icon: "devicon-spring-original colored" },
  { name: "REST APIs", icon: "fa-solid fa-plug", color: "#6ecbff" },
  { name: "Kafka", icon: "devicon-apachekafka-original", color: "#ffffff" },
  { name: "Redis", icon: "devicon-redis-plain colored" },
  { name: "SQL", icon: "fa-solid fa-database", color: "#4fa3e0" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark", color: "#ff9900" },
  { name: "Power BI", icon: "fa-solid fa-chart-column", color: "#f2c811" },
  { name: "MS Access", icon: "fa-solid fa-table", color: "#c0392b" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original", color: "#ffffff" },
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
];

// categories must match the data-filter values on the buttons in index.html
const PROJECTS = [
  {
    title: "Real-Time Anomaly Detection Platform",
    categories: ["backend", "finance"],
    icon: "fa-solid fa-shield-halved",
    gradient: "linear-gradient(135deg, #0f2027, #2c5364)",
    desc: "A streaming pipeline that scores events as they arrive and flags unusual activity, with APIs for querying alerts. In progress.",
    tags: ["Python", "Streaming", "REST APIs"],
    code: "https://github.com/Manali0899/realtime-anomaly-detection",
  },
  {
    title: "AcuMedica – Medical Performance Dashboard",
    categories: ["data", "healthcare"],
    icon: "fa-solid fa-heart-pulse",
    gradient: "linear-gradient(135deg, #7b1e3a, #c0476a)",
    desc: "Power BI dashboard comparing hospital performance, patient recovery and treatment cost, with KPIs built in DAX on simulated data.",
    tags: ["Power BI", "DAX", "Power Query"],
    code: "https://github.com/Manali0899/AcuMedica-Medical-Performance-Dashboard",
  },
  {
    title: "Financial Fraud Intelligence Dashboard",
    categories: ["data", "finance"],
    icon: "fa-solid fa-magnifying-glass-dollar",
    gradient: "linear-gradient(135deg, #134e5e, #3a9d7a)",
    desc: "Power BI dashboard for spotting suspicious transactions and fraud patterns.",
    tags: ["Power BI", "Data Analysis"],
    code: "https://github.com/Manali0899/Financial_Fraud_Intelligence",
  },
];

const EXPERIENCE = [
  {
    company: "MTA New York City Transit",
    role: "Software Engineer",
    date: "Mar 2025 – Present",
    points: [
      "Built a labor scheduling system in Python and Django for the Production Planning team that generates the next year's labor schedule and applies changes as they come in.",
      "Generate schedule reports from the application and store them in Amazon S3 so planners can pull them up when they need them.",
      "Support labor analysis and reporting with MS Access and Power BI for supply logistics planning.",
    ],
  },
  {
    company: "Pace University",
    role: "Graduate Research Analyst",
    date: "Jan 2024 – Dec 2024",
    points: [
      "Built and maintained websites for the university alongside research work during my Master's.",
    ],
  },
  {
    company: "Accelya Solutions, Mumbai",
    role: "Software Engineer",
    date: "Sep 2021 – Dec 2022",
    points: [
      "Worked in Java and Spring on Revera, an airline product, for more than seven airline clients.",
      "Built and supported REST API and file feed integrations for each client through to go-live.",
      "Fixed high-priority production issues reported by airline clients.",
    ],
  },
];

/* =========================================================
   RENDERING
   ========================================================= */

function renderSkills() {
  document.getElementById("skillsGrid").innerHTML = SKILLS.map(
    (s) => `<div class="skill reveal"><i class="${s.icon}"${s.color ? ` style="color:${s.color}"` : ""}></i><span>${s.name}</span></div>`
  ).join("");
}

function renderProjects() {
  document.getElementById("projectsGrid").innerHTML = PROJECTS.map((p) => {
    const links = [
      p.code ? `<a href="${p.code}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Code</a>` : "",
      p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener"><i class="fa-solid fa-eye"></i> View</a>` : "",
    ].join("");
    return `
      <article class="project reveal" data-cat="${p.categories.join(" ")}" tabindex="0">
        <div class="project-thumb" style="background:${p.gradient}">
          ${p.image ? `<img src="${p.image}" alt="" style="width:100%;height:100%;object-fit:cover">` : `<i class="${p.icon}"></i>`}
        </div>
        <div class="project-title">
          ${p.title}
          <p class="project-desc">${p.desc}</p>
          <div class="project-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
          ${links ? `<div class="project-links">${links}</div>` : ""}
        </div>
      </article>`;
  }).join("");
}

function renderExperience() {
  document.getElementById("timeline").innerHTML = EXPERIENCE.map(
    (e, i) => `
      <div class="tl-item ${i % 2 ? "right" : "left"} reveal">
        <span class="tl-dot"><i class="fa-solid fa-briefcase"></i></span>
        <div class="tl-card">
          <h3>${e.company}</h3>
          <h4>${e.role}</h4>
          <p class="tl-date">${e.date}</p>
          <ul>${e.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
        </div>
      </div>`
  ).join("");
}

/* =========================================================
   INTERACTIONS
   ========================================================= */

function setupProjectFilters() {
  const buttons = document.querySelectorAll(".filter");
  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      document.querySelectorAll(".project").forEach((card) => {
        const show = f === "all" || card.dataset.cat.split(" ").includes(f);
        card.classList.toggle("hide", !show);
      });
    })
  );
}

function setupTyping() {
  const el = document.getElementById("typed");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = TYPED_WORDS[0];
    return;
  }
  let word = 0, char = 0, deleting = false;
  (function tick() {
    const current = TYPED_WORDS[word];
    char += deleting ? -1 : 1;
    el.textContent = current.slice(0, char);
    let delay = deleting ? 50 : 100;
    if (!deleting && char === current.length) { deleting = true; delay = 1600; }
    else if (deleting && char === 0) { deleting = false; word = (word + 1) % TYPED_WORDS.length; delay = 400; }
    setTimeout(tick, delay);
  })();
}

function setupNav() {
  const links = document.querySelectorAll(".nav-links a");
  const sections = [...links].map((a) => document.querySelector(a.getAttribute("href")));
  const toTop = document.getElementById("toTop");
  const navLinks = document.getElementById("navLinks");

  document.getElementById("menuToggle").addEventListener("click", () => navLinks.classList.toggle("open"));
  links.forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("open")));

  const onScroll = () => {
    const y = window.scrollY + window.innerHeight * 0.35;
    let current = 0;
    sections.forEach((s, i) => { if (s && s.offsetTop <= y) current = i; });
    links.forEach((a, i) => a.classList.toggle("active", i === current));
    toTop.classList.toggle("show", window.scrollY > 500);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupReveal() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal, .edu-card, .about-row, .contact-card").forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const fallback = "Couldn't send right now. Please email karankalmanali@gmail.com.";
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    status.textContent = "Sending…";
    status.className = "form-status";
    const data = Object.fromEntries(new FormData(form));
    data._subject = `Portfolio message from ${data.name}`;
    data._template = "table";
    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok || String(out.success) !== "true") throw new Error(out.message || "failed");
      form.reset();
      status.textContent = "Thanks! Your message was sent.";
      status.className = "form-status ok";
    } catch {
      status.textContent = fallback;
      status.className = "form-status err";
    } finally {
      btn.disabled = false;
    }
  });
}

/* "Or send with Gmail": opens Gmail in the browser with the visitor's message filled in */
function setupGmailLink() {
  const link = document.getElementById("gmailLink");
  const form = document.getElementById("contactForm");
  const update = () => {
    const d = new FormData(form);
    const body = `${d.get("message") || ""}\n\n${d.get("name") || ""}${d.get("phone") ? "\n" + d.get("phone") : ""}`;
    link.href = "https://mail.google.com/mail/?view=cm&fs=1&to=karankalmanali@gmail.com" +
      `&su=${encodeURIComponent("Hello from " + (d.get("name") || "your portfolio"))}` +
      `&body=${encodeURIComponent(body.trim())}`;
  };
  form.addEventListener("input", update);
  link.addEventListener("click", update);
}

/* Hero background: drifting dots joined by thin lines */
function setupNetwork() {
  const canvas = document.getElementById("network");
  const ctx = canvas.getContext("2d");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w, h, dots = [];
  const mouse = { x: null, y: null };

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    w = canvas.offsetWidth; h = canvas.offsetHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(110, Math.floor((w * h) / 14000));
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2.5 + 1.5,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const maxDist = 150;
    for (let i = 0; i < dots.length; i++) {
      const a = dots[i];
      if (!reduce) {
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
      }
      for (let j = i + 1; j < dots.length; j++) {
        const b = dots[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < maxDist) {
          ctx.strokeStyle = `rgba(90, 90, 90, ${0.35 * (1 - d / maxDist)})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      if (mouse.x !== null) {
        const d = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (d < 180) {
          ctx.strokeStyle = `rgba(37, 6, 173, ${0.4 * (1 - d / 180)})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
      ctx.fillStyle = "rgba(110, 110, 110, 0.75)";
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
    }
    if (!reduce) requestAnimationFrame(draw);
  }

  const hero = canvas.parentElement;
  hero.addEventListener("mousemove", (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  hero.addEventListener("mouseleave", () => { mouse.x = mouse.y = null; });
  window.addEventListener("resize", resize);
  resize();
  draw();
}

/* =========================================================
   INIT
   ========================================================= */
renderSkills();
renderProjects();
renderExperience();
setupProjectFilters();
setupTyping();
setupNav();
setupReveal();
setupContactForm();
setupGmailLink();
setupNetwork();
