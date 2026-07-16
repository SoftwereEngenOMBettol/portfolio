/* ==========================================================
   Renders everything in index.html from the arrays in data.js.
   You should not need to edit this file when adding content —
   just edit data.js.
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  wireResumeLinks();
  renderAbout();
  renderStats();
  typewriterRoles();
  renderSkills();
  renderProjects();
  renderCertificates();
  wireContact();
  wireNav();
  wireLightbox();
  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ---------------- RESUME / CV ---------------- */
function wireResumeLinks() {
  ["navResumeBtn", "heroResumeBtn"].forEach((id) => {
    const el = document.getElementById(id);
    el.href = profile.resumeFile;
    el.setAttribute("download", "");
  });
}

/* ---------------- ABOUT ---------------- */
function renderAbout() {
  document.getElementById("aboutBio").textContent = profile.bio;
  document.getElementById("aboutLocation").textContent = profile.location;
}

function renderStats() {
  document.getElementById("statCerts").textContent = certificates.length;
  document.getElementById("statProjects").textContent = projects.length;
  document.getElementById("statSkills").textContent = skills.length + "+";
}

/* ---------------- HERO TYPEWRITER ---------------- */
function typewriterRoles() {
  const el = document.getElementById("roleTyped");
  const roles = profile.roles;
  let roleIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 65);
  }
  tick();
}

/* ---------------- SKILLS ---------------- */
function renderSkills() {
  const container = document.getElementById("skillsGroups");
  const byCategory = groupBy(skills, "category");

  container.innerHTML = Object.entries(byCategory)
    .map(
      ([category, items]) => `
      <div class="skill-group">
        <h3>${escapeHTML(category)}</h3>
        <div class="skill-pills">
          ${items.map((s) => `<span class="pill">${escapeHTML(s.name)}</span>`).join("")}
        </div>
      </div>`
    )
    .join("");
}

/* ---------------- PROJECTS ---------------- */
let activeProjectFilter = "All";

function renderProjectFilters() {
  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];
  const bar = document.getElementById("projectFilters");
  bar.innerHTML = allTags
    .map(
      (tag) =>
        `<button class="filter-btn ${tag === activeProjectFilter ? "active" : ""}" data-tag="${escapeHTML(tag)}">${escapeHTML(tag)}</button>`
    )
    .join("");

  bar.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeProjectFilter = btn.dataset.tag;
      renderProjectFilters();
      renderProjects();
    });
  });
}

function renderProjects() {
  renderProjectFilters();
  const grid = document.getElementById("projectsGrid");
  const list =
    activeProjectFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeProjectFilter));

  grid.innerHTML = list
    .map(
      (p) => `
      <article class="project-card">
        <div class="project-top">
          <h3 class="project-title">${escapeHTML(p.title)}</h3>
        </div>
        <div class="project-tags">
          ${p.tags.map((t) => `<span class="tag">${escapeHTML(t)}</span>`).join("")}
        </div>
        <p class="project-desc">${escapeHTML(p.description)}</p>
        <div class="project-stack">
          ${p.stack.map((s) => `<span>${escapeHTML(s)}</span>`).join("")}
        </div>
        <div class="project-footer">
          <span class="project-highlight">${escapeHTML(p.highlight || "")}</span>
          ${
            p.github
              ? `<a class="project-link" href="${p.github}" target="_blank" rel="noopener">view repo →</a>`
              : `<span class="project-link" style="opacity:.4">private</span>`
          }
        </div>
      </article>`
    )
    .join("");
}

/* ---------------- CERTIFICATES ---------------- */
let activeCertFilter = "All";
let certSearchTerm = "";

function renderCertFilters() {
  const cats = ["All", ...new Set(certificates.map((c) => c.category))];
  const bar = document.getElementById("certFilters");
  bar.innerHTML = cats
    .map(
      (cat) =>
        `<button class="filter-btn ${cat === activeCertFilter ? "active" : ""}" data-cat="${escapeHTML(cat)}">${escapeHTML(cat)}</button>`
    )
    .join("");

  bar.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCertFilter = btn.dataset.cat;
      renderCertFilters();
      renderCertificates();
    });
  });
}

function renderCertificates() {
  renderCertFilters();
  const grid = document.getElementById("certGrid");
  const empty = document.getElementById("certEmpty");

  let list = certificates;
  if (activeCertFilter !== "All") list = list.filter((c) => c.category === activeCertFilter);
  if (certSearchTerm) {
    const q = certSearchTerm.toLowerCase();
    list = list.filter((c) => c.title.toLowerCase().includes(q) || c.issuer.toLowerCase().includes(q));
  }

  document.getElementById("certCount").textContent = certificates.length;
  empty.hidden = list.length !== 0;

  grid.innerHTML = list
    .map(
      (c, i) => `
      <article class="cert-card" data-file="${escapeHTML(c.file)}" data-title="${escapeHTML(c.title)}" data-issuer="${escapeHTML(c.issuer)}">
        <span class="cert-issuer">${escapeHTML(c.issuer)}</span>
        <span class="cert-title">${escapeHTML(c.title)}</span>
      </article>`
    )
    .join("");

  grid.querySelectorAll(".cert-card").forEach((card) => {
    card.addEventListener("click", () => openLightbox(card.dataset));
  });
}

document.addEventListener("input", (e) => {
  if (e.target.id === "certSearch") {
    certSearchTerm = e.target.value.trim();
    renderCertificates();
  }
});

/* ---------------- LIGHTBOX ---------------- */
function wireLightbox() {
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

function openLightbox(data) {
  document.getElementById("lightboxTitle").textContent = data.title;
  document.getElementById("lightboxHint").textContent = `issued by ${data.issuer}`;
  document.getElementById("lightboxOpen").href = data.file;
  const lb = document.getElementById("lightbox");
  lb.hidden = false;
}
function closeLightbox() {
  document.getElementById("lightbox").hidden = true;
}

/* ---------------- CONTACT ---------------- */
function wireContact() {
  document.getElementById("contactEmail").href = `mailto:${profile.email}`;
  document.getElementById("contactEmail").textContent = profile.email;
  document.getElementById("contactGithub").href = profile.github;
  document.getElementById("contactLinkedin").href = profile.linkedin;
}

/* ---------------- MOBILE NAV ---------------- */
function wireNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));
}

/* ---------------- HELPERS ---------------- */
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}
