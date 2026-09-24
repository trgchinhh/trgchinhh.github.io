/* ══ THEME ══ */
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');

function setTheme(t) {
  root.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  themeIcon.className = t === 'dark' ? 'ph-bold ph-sun-horizon' : 'ph-bold ph-moon';
}

// Init
setTheme(localStorage.getItem('theme') || 'light');

themeToggle.addEventListener('click', () => {
  setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* ══ RENDER TRANG THÔNG TIN (trang chính) ══ */
const post = INFO[0];
document.getElementById('bpBody').innerHTML = post.content;
renderAchievements();

/* ══ ACHIEVEMENTS ══ */
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