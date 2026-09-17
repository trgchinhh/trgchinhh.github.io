/* ══ THEME ══ */
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');

function setTheme(t) {
  root.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  themeIcon.className = t === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

// Init
setTheme(localStorage.getItem('theme') || 'light');

themeToggle.addEventListener('click', () => {
  setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* ══ RENDER BLOG LIST (trang chủ — 3 bài đầu) ══ */
function renderBlogList(items) {
  const el = document.getElementById('blogList');
  el.innerHTML = items.map(b => `
    <div class="blog-card" onclick="openBlogPost('${b.id}')">
      <div class="blog-card-content">
        <span class="blog-tag">${b.tag}</span>
        <h3>${b.title}</h3>
        <p>${b.excerpt}</p>
      </div>
      <span class="blog-card-date">${b.date}</span>
    </div>
  `).join('');
}

function showAllBlogs() {
  renderBlogList(BLOGS);
  // scroll vào section blog
  document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
}

// Mặc định hiện 3 bài đầu
//renderBlogList(BLOGS.slice(0, 3));
const blogEl = document.getElementById('blogList');
if (blogEl) renderBlogList(BLOGS.slice(0, 3));

/* ══ BLOG POST ══ */
function openBlogPost(id) {
  const post = BLOGS.find(b => b.id === id);
  if (!post) return;

  document.getElementById('bpTag').innerHTML = `<div class="blog-tag">${post.tag}</div>`;
  document.getElementById('bpTitle').textContent = post.title;
  document.getElementById('bpDate').textContent = post.date;
  document.getElementById('bpBody').innerHTML = post.content;

  document.getElementById('mainView').classList.add('hidden');
  document.getElementById('blogPage').classList.add('active');
  window.scrollTo({ top: 0 });
}

function closeBlogPost() {
  document.getElementById('blogPage').classList.remove('active');
  document.getElementById('mainView').classList.remove('hidden');
  document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
}

/* ══ RENDER PROJECTS ══ */
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  const items = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.type === filter);
  grid.innerHTML = items.map(p => `
    <div class="project-card" onclick="openModal('${p.id}')">
      <div class="project-thumb">
        <span class="project-thumb-emoji">${p.emoji}</span>
      </div>
      <div class="project-body">
        <div class="project-type">${p.typeLabel}</div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Tabs
document.getElementById('projectTabs').addEventListener('click', e => {
  if (!e.target.matches('.tab-btn')) return;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  renderProjects(e.target.dataset.filter);
});

renderProjects();

/* ══ PROJECT MODAL ══ */
function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  document.getElementById('mEmoji').textContent = p.emoji;
  document.getElementById('mTitle').textContent = p.name;
  document.getElementById('mSub').textContent = p.typeLabel + ' · ' + p.tags.join(' · ');
  document.getElementById('mDesc').textContent = p.longDesc;

  document.getElementById('mFeatures').innerHTML = `
    <h4>Tính năng chính</h4>
    <ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
  `;

  document.getElementById('mLinks').innerHTML = p.links.map(l => `
    <a class="btn btn-${l.url.startsWith('http') ? 'primary' : 'outline'}"
       href="${l.url}" target="${l.url.startsWith('http') ? '_blank' : '_self'}">
      <i class="${l.icon}"></i> ${l.label}
    </a>
  `).join('');

  document.getElementById('projectModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModalDirect() {
  document.getElementById('projectModal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModal(e) {
  if (e.target === document.getElementById('projectModal')) closeModalDirect();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalDirect();
});
