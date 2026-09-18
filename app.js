/* ══ THEME ══ */
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');

function setTheme(t) {
  root.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  //themeIcon.className = t === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  themeIcon.className = t === 'dark' ? 'ph-bold ph-sun-horizon' : 'ph-bold ph-moon';
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

function showAllINFO() {
  renderBlogList(INFO);
  // scroll vào section blog
  document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
}

// Mặc định hiện 3 bài đầu
//renderBlogList(INFO.slice(0, 3));
const blogEl = document.getElementById('blogList');
if (blogEl) renderBlogList(INFO.slice(0, 3));

/* ══ BLOG POST ══ */
function openBlogPost(id) {
  const post = INFO.find(b => b.id === id);
  if (!post) return;

  document.getElementById('bpBody').innerHTML = post.content;
  renderAchievements(); // ← thêm dòng này
  
  document.getElementById('mainView').classList.add('hidden');
  document.getElementById('blogPage').classList.add('active');
  window.scrollTo({ top: 0 });
  history.pushState({ page: 'info', id }, '', '#info-' + id);
}

function closeBlogPost() {
  document.getElementById('blogPage').classList.remove('active');
  document.getElementById('mainView').classList.remove('hidden');
  document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('popstate', () => {
  if (document.getElementById('blogPage').classList.contains('active')) {
    closeBlogPost();
  }
});

/* ══ RENDER PROJECTS ══ */
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  const items = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.type === filter);
  grid.innerHTML = items.map(p => `
    <div class="project-card" onclick="openModal('${p.id}')">
      <div class="project-thumb">
        <img src="${p.image}" alt="${p.name}" class="project-thumb-img ${p.id}"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <span class="project-thumb-emoji" style="display:none">${p.emoji}</span>
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

  document.getElementById('mEmoji').innerHTML = `
    <img src="${p.image}" alt="${p.name}" class="modal-project-img ${p.id}"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <span class="modal-thumb-emoji" style="display:none">${p.emoji}</span>
  `;
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

function toggleCert(id) {
  const box = document.getElementById('certBox-' + id);
  const btn = document.getElementById('certBtn-' + id);
  const isOpen = box.style.maxHeight !== '0px' && box.style.maxHeight !== '';

  if (isOpen) {
    box.style.maxHeight = '0';
    box.style.opacity = '0';
    btn.classList.remove('active');
  } else {
    box.style.maxHeight = box.scrollHeight + 'px';
    box.style.opacity = '1';
    btn.classList.add('active');
  }
}

function renderAchievements() {
  const el = document.getElementById('achievementList');
  if (!el) return;
  el.innerHTML = ACHIEVEMENTS.map(a => `
    <div style="margin-bottom: 10px;">
      <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
        <span style="display:flex; align-items:center; gap:8px; font-size:0.93rem; line-height:1.6;">
          <span style="color:var(--accent); font-weight:600;">–</span> ${a.title}
        </span>
        <div style="display:flex; gap:8px;">
          <button onclick="toggleCert('${a.id}')" class="cert-btn" id="certBtn-${a.id}">
            <i class="fa-solid fa-scroll"></i> Giấy chứng nhận
          </button>
          <button onclick="toggleReward('${a.id}')" class="cert-btn" id="rewardBtn-${a.id}">
            <i class="fa-solid fa-trophy"></i> Phần thưởng
          </button>
        </div>
      </div>
      <div id="certBox-${a.id}" style="max-height:0; overflow:hidden; transition:max-height 0.4s ease, opacity 0.4s ease; opacity:0;">
        <div style="margin-top:14px;">
          <img src="${a.cert}" alt="Giấy chứng nhận" style="width:100%; display:block;">
        </div>
      </div>
      <div id="rewardBox-${a.id}" style="max-height:0; overflow:hidden; transition:max-height 0.4s ease, opacity 0.4s ease; opacity:0;">
        <div style="margin-top:14px;">
          <img src="${a.reward}" alt="Phần thưởng" style="width:100%; display:block;">
        </div>
      </div>
    </div>
  `).join('');
}

function toggleReward(id) {
  const box = document.getElementById('rewardBox-' + id);
  const btn = document.getElementById('rewardBtn-' + id);
  const isOpen = box.style.maxHeight !== '0px' && box.style.maxHeight !== '';

  if (isOpen) {
    box.style.maxHeight = '0';
    box.style.opacity = '0';
    btn.classList.remove('active');
  } else {
    box.style.maxHeight = box.scrollHeight + 'px';
    box.style.opacity = '1';
    btn.classList.add('active');
  }
}