import * as THREE from 'three';

const PALETTE = {
  // nhân vật
  hair:        0x33261f,
  skin:        0xeec29f,
  blush:       0xf2a392,
  shirt:       0xf2f0ec,
  collar:      0xdedad2,
  pants:       0x3a3d42,
  sole:        0xf7f7f5,
  sneaker:     0xd9dde3,
  accent:      0xf4622a,
  eye:         0x211b19,
  mouth:       0xa45a3a,
  glasses:     0x14151a,
  watchFace:   0xcfd6dd,
  sweat:       0x7fd1f5,
  // bàn gỗ sáng
  deskTop1:    0xe9ab81,
  deskTop2:    0xe3a176,
  deskDark:    0xc98557,
  deskLeg:     0xd7956a,
  // laptop
  laptop:      0x17181b,
  keys:        0x2a2e35,
  keycap:      0x4b525c,
  screen:      0x1e2a3a,
  screenLine:  0x7fd1ae,
  // iPhone
  phone:       0x111214,
  phoneScreen: 0x1b2b45,
  // cốc
  mug:         0xfaf7f0,
  water:       0x5bb6e6,
  // chậu bonsai
  potWhite:    0xf3f1ec,
  soil:        0x4a3a2c,
  trunk:       0x7a5636,
  leaf1:       0x4f8f3a,
  leaf2:       0x6eae4d,
  leaf3:       0x3a6e2c
};

function buildCharacter() {
  const group = new THREE.Group();
  const geo = new THREE.BoxGeometry(1, 1, 1);
  const mats = {};
  for (const key of Object.keys(PALETTE)) {
    mats[key] = new THREE.MeshLambertMaterial({ color: PALETTE[key] });
  }

  // (x, y, z) = tâm đáy khối
  const add = (name, x, y, z, w = 1, h = 1, d = 1) => {
    const mesh = new THREE.Mesh(geo, mats[name]);
    mesh.scale.set(w, h, d);
    mesh.position.set(x, y + h / 2, z);
    group.add(mesh);
    return mesh;
  };

  // ───────────── ĐẦU ─────────────
  add('skin', 0, 6.8, 0, 6, 5.4, 5);

  // Tóc: đỉnh đầu + lọn bồng
  add('hair', 0, 11.6, 0.2, 6.4, 1.6, 5.6);
  [
    [-2.2, -0.6, 0.9],
    [-1.1,  0.4, 1.3],
    [ 0.1, -0.3, 1.0],
    [ 1.2,  0.6, 1.6],
    [ 2.2, -0.2, 1.1],
  ].forEach(([x, z, h]) => {
    add('hair', x, 13.0, z, 1.2, h, 1.3);
  });
  // Tóc gáy + mai tóc hai bên
  add('hair', 0, 8.4, -2.6, 6.2, 4.0, 1.2);
  add('hair', -3.05, 9.9, 0, 0.3, 2.3, 4.2);
  add('hair', 3.05, 9.9, 0, 0.3, 2.3, 4.2);
  // Mái trước
  add('hair', -2.0, 10.8, 2.75, 1.0, 0.8, 0.5);
  add('hair', 0.4, 11.05, 2.75, 2.4, 0.55, 0.5);
  add('hair', 2.2, 10.9, 2.75, 0.9, 0.7, 0.5);

  // Tai
  add('skin', -3.2, 8.5, 0.2, 0.4, 1.0, 0.9);
  add('skin', 3.2, 8.5, 0.2, 0.4, 1.0, 0.9);

  // Lông mày nhíu (đầu trong nhích lên cho có vẻ nhức đầu)
  [[-1, 0.22], [1, -0.22]].forEach(([s, rz]) => {
    const brow = add('hair', s * 1.15, 10.39, 2.55, 1.0, 0.22, 0.25);
    brow.rotation.z = rz;
  });

  // Mắt + má hồng + mũi + miệng
  add('eye', -1.15, 9.25, 2.55, 0.8, 0.5, 0.3);
  add('eye', 1.15, 9.25, 2.55, 0.8, 0.5, 0.3);
  add('blush', -1.95, 8.3, 2.52, 0.9, 0.35, 0.1);
  add('blush', 1.95, 8.3, 2.52, 0.9, 0.35, 0.1);
  add('mouth', 0, 8.2, 2.7, 0.6, 0.5, 0.4);   // mũi
  add('mouth', 0, 7.5, 2.6, 1.1, 0.45, 0.4);  // miệng

  // Kính + gọng ôm tai
  const rim = (cx) => {
    add('glasses', cx - 0.8, 8.92, 2.78, 0.14, 1.22, 0.14);
    add('glasses', cx + 0.8, 8.92, 2.78, 0.14, 1.22, 0.14);
    add('glasses', cx, 10, 2.78, 1.6, 0.14, 0.14);
    add('glasses', cx, 8.92, 2.78, 1.6, 0.14, 0.14);
  };
  rim(-1.15);
  rim(1.15);
  add('glasses', 0, 9.5, 2.78, 0.8, 0.14, 0.14);
  [-1, 1].forEach((s) => {
    add('glasses', s * 2.5, 9.35, 2.78, 1.1, 0.12, 0.14);   // nối tới thái dương
    add('glasses', s * 3.03, 9.35, 0.8, 0.1, 0.12, 2.0);    // gọng ôm tai
  });

  // Giọt mồ hôi (chỉ hiện khi nói "Nhức đầu quá")
  const sweat = new THREE.Group();
  sweat.position.set(2.5, 10.0, 2.62);
  [
    [0.25, 0.25,  0.6],
    [0.45, 0.35,  0.3],
    [0.55, 0.35, -0.05],
    [0.35, 0.2,  -0.35],
  ].forEach(([w, h, y]) => {
    const m = new THREE.Mesh(geo, mats.sweat);
    m.scale.set(w, h, 0.1);
    m.position.set(0, y, 0);
    sweat.add(m);
  });
  sweat.visible = false;
  group.add(sweat);
  group.userData.sweat = sweat;

  // ───────────── THÂN ─────────────
  add('shirt', 0, 3.4, 0, 5, 3.6, 3);
  // Cổ áo + túi ngực + bút
  add('collar', -0.85, 6.4, 1.52, 1.4, 0.6, 0.12);
  add('collar', 0.85, 6.4, 1.52, 1.4, 0.6, 0.12);
  add('collar', 1.3, 5.6, 1.5, 1.0, 0.7, 0.08);
  add('accent', 1.0, 5.9, 1.54, 0.1, 0.55, 0.08);

  // Cúc áo tròn
  const buttonGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.15, 24);
  [3.9, 4.7, 5.5, 6.3].forEach((y) => {
    const btn = new THREE.Mesh(buttonGeo, mats.glasses);
    btn.rotation.x = Math.PI / 2;
    btn.position.set(0, y, 1.56);
    group.add(btn);
  });

  // Bắp tay
  add('shirt', -3.05, 4.2, 0, 0.9, 2.5, 0.9);
  add('shirt', 3.05, 4.2, 0, 0.9, 2.5, 0.9);

  // Cẳng tay gập về trước + cổ tay áo + đồng hồ (tay trái) + bàn tay
  [-1, 1].forEach((s) => {
    const arm = new THREE.Group();
    arm.position.set(s * 2.175, 5.15, 1.9);
    arm.rotation.y = -s * 0.431;
    group.add(arm);
    const addA = (name, x, y, z, w, h, d) => {
      const m = new THREE.Mesh(geo, mats[name]);
      m.scale.set(w, h, d);
      m.position.set(x, y, z);
      arm.add(m);
    };
    addA('shirt', 0, 0, 0, 0.9, 0.9, 4.18);
    addA('collar', 0, 0, 1.75, 0.98, 0.98, 0.5);        // cổ tay áo
    if (s === -1) {
      addA('glasses', 0, 0, 1.05, 0.96, 0.96, 0.35);    // dây đồng hồ
      addA('watchFace', 0, 0.5, 1.05, 0.55, 0.08, 0.5); // mặt đồng hồ
    }
    add('skin', s * 1.3, 4.7, 4.0, 1.0, 0.6, 1.0);      // bàn tay
  });

  // ───────────── QUẦN + GIÀY ─────────────
  add('pants', -1.5, 0.9, 0, 2, 2.55, 1);
  add('pants', 1.5, 0.9, 0, 2, 2.55, 1);

  [-1, 1].forEach((sx) => {
    const x = sx * 1.5;
    add('sole', x, -0.15, 0.25, 2.3, 0.35, 2.0);        // đế trắng
    add('sneaker', x, 0.2, 0.2, 1.9, 0.75, 1.5);        // thân giày
    add('sole', x, 0.2, 0.95, 1.9, 0.45, 0.6);          // mũi giày
    add('accent', x, 0.45, -0.55, 1.0, 0.4, 0.12);      // gót cam
  });

  // ───────────── BÀN GỖ SÁNG ─────────────
  const TOP = 4.4; // độ cao mặt bàn
  // mặt bàn ghép từ 5 tấm ván hai tông gỗ
  [-4, -2, 0, 2, 4].forEach((x, i) => {
    add(i % 2 ? 'deskTop2' : 'deskTop1', x, 4.1, 5.0, 2.0, 0.3, 6);
  });
  // thanh giằng dưới mặt bàn
  add('deskDark', 0, 3.6, 2.45, 8.6, 0.5, 0.3);
  add('deskDark', 0, 3.6, 7.55, 8.6, 0.5, 0.3);
  add('deskDark', -4.5, 3.6, 5.0, 0.3, 0.5, 4.9);
  add('deskDark', 4.5, 3.6, 5.0, 0.3, 0.5, 4.9);
  // 4 chân
  [[-4.5, 2.4], [4.5, 2.4], [-4.5, 7.6], [4.5, 7.6]].forEach(([x, z]) => {
    add('deskLeg', x, -0.15, z, 0.55, 4.25, 0.55);
  });

  // ───────────── LAPTOP ─────────────
  add('laptop', 0, 4.4, 4.5, 4.4, 0.2, 3.0);
  add('keys', 0, 4.6, 4.8, 3.6, 0.04, 1.8);
  for (let i = 0; i < 4; i++) {
    add('keycap', 0, 4.64, 3.95 + i * 0.42, 3.4, 0.04, 0.28);
  }
  add('keys', 0, 4.6, 3.4, 1.4, 0.04, 0.7); // touchpad

  const lid = new THREE.Group();
  lid.position.set(0, 4.6, 5.95);
  lid.rotation.x = 0.28;
  group.add(lid);
  const addL = (name, x, y, z, w, h, d) => {
    const m = new THREE.Mesh(geo, mats[name]);
    m.scale.set(w, h, d);
    m.position.set(x, y + h / 2, z);
    lid.add(m);
  };
  addL('laptop', 0, 0, 0, 4.4, 3.0, 0.15);
  addL('screen', 0, 0.2, -0.08, 4.0, 2.6, 0.04);
  [[2.1, 1.8], [1.75, 2.4], [1.4, 1.2], [1.05, 2.0]].forEach(([y, w]) => {
    addL('screenLine', -1.7 + w / 2, y, -0.11, w, 0.1, 0.03);
  });
  addL('accent', 0, 1.0, 0.1, 0.8, 0.8, 0.05); // sticker sau lưng màn hình

  // ───────────── CỐC NƯỚC PIXEL (bên phải) ─────────────
  const MX = 3.6;
  const MZ = 4.2;
  add('mug', MX, TOP, MZ, 1.2, 0.15, 1.2);                    // đáy
  add('water', MX, TOP + 0.15, MZ, 0.9, 0.95, 0.9);           // nước
  add('mug', MX, TOP + 0.15, MZ - 0.525, 1.2, 1.15, 0.15);    // thành trước
  add('mug', MX, TOP + 0.15, MZ + 0.525, 1.2, 1.15, 0.15);    // thành sau
  add('mug', MX - 0.525, TOP + 0.15, MZ, 0.15, 1.15, 0.9);    // thành trái
  add('mug', MX + 0.525, TOP + 0.15, MZ, 0.15, 1.15, 0.9);    // thành phải
  add('accent', MX, TOP + 0.55, MZ, 1.24, 0.2, 1.24);         // vạch cam quanh cốc
  add('mug', MX + 0.75, TOP + 0.95, MZ, 0.4, 0.2, 0.22);      // quai: ngang trên
  add('mug', MX + 0.75, TOP + 0.3, MZ, 0.4, 0.2, 0.22);       // quai: ngang dưới
  add('mug', MX + 0.95, TOP + 0.3, MZ, 0.2, 0.85, 0.22);      // quai: thẳng đứng

  // ───────────── iPhone (bên trái) ─────────────
  const phone = new THREE.Group();
  phone.position.set(-3.7, TOP, 3.9);
  phone.rotation.y = 0.35;
  group.add(phone);
  const addP = (name, x, y, z, w, h, d) => {
    const m = new THREE.Mesh(geo, mats[name]);
    m.scale.set(w, h, d);
    m.position.set(x, y + h / 2, z);
    phone.add(m);
  };
  addP('phone', 0, 0, 0, 1.0, 0.1, 2.05);
  addP('phoneScreen', 0, 0.1, 0, 0.9, 0.02, 1.95);
  addP('phone', 0, 0.12, -0.85, 0.28, 0.02, 0.08);
  addP('screenLine', 0, 0.12, -0.3, 0.5, 0.02, 0.1);

  // ───────────── CHẬU BONSAI (góc sau bên trái) ─────────────
  const PX = -3.9;
  const PZ = 6.9;
  // chậu trắng vuông
  add('potWhite', PX, TOP, PZ, 1.7, 1.2, 1.7);
  add('potWhite', PX, TOP + 1.2, PZ - 0.85, 1.9, 0.2, 0.2);   // gờ miệng chậu (4 cạnh)
  add('potWhite', PX, TOP + 1.2, PZ + 0.85, 1.9, 0.2, 0.2);
  add('potWhite', PX - 0.85, TOP + 1.2, PZ, 0.2, 0.2, 1.5);
  add('potWhite', PX + 0.85, TOP + 1.2, PZ, 0.2, 0.2, 1.5);
  add('soil', PX, TOP + 1.2, PZ, 1.5, 0.1, 1.5);              // đất
  // thân cây uốn khúc
  add('trunk', PX, TOP + 1.3, PZ, 0.35, 0.9, 0.35);
  add('trunk', PX + 0.25, TOP + 2.2, PZ, 0.35, 0.7, 0.35);
  add('trunk', PX - 0.45, TOP + 2.0, PZ, 0.6, 0.25, 0.3);     // nhánh trái
  // tán lá phải (cao)
  const cx = PX + 0.3;
  add('leaf3', cx, TOP + 2.85, PZ, 1.7, 0.45, 1.7);
  add('leaf1', cx, TOP + 3.3, PZ, 1.5, 0.55, 1.5);
  add('leaf2', cx, TOP + 3.85, PZ, 1.0, 0.35, 1.0);
  add('leaf2', cx + 0.55, TOP + 3.4, PZ + 0.5, 0.45, 0.4, 0.45);
  add('leaf2', cx - 0.6, TOP + 3.1, PZ - 0.4, 0.4, 0.35, 0.4);
  // tán lá trái (thấp)
  const lx = PX - 0.9;
  add('leaf3', lx, TOP + 2.2, PZ, 1.2, 0.35, 1.2);
  add('leaf1', lx, TOP + 2.55, PZ, 1.0, 0.4, 1.0);
  add('leaf2', lx - 0.1, TOP + 2.95, PZ, 0.6, 0.25, 0.6);

  group.scale.setScalar(0.44);
  return group;
}

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

(() => {
  const wrap = document.querySelector('.avatar-wrap');
  if (!wrap) return;
  const host = document.getElementById('avatar3d');
  const fallback = document.getElementById('avatarFallback');
  if (!host) return;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  } catch {
    renderer = null;
  }

  if (!renderer) {
    host.style.display = 'none';
    if (fallback) fallback.style.display = 'flex';
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  host.appendChild(renderer.domElement);
  const el = renderer.domElement;
  el.style.display = 'block';
  el.style.touchAction = 'none';
  el.style.cursor = 'grab';

  // Chặn cuộn trang khi chuột nằm trong ô 3D
  host.style.overscrollBehavior = 'contain';
  host.setAttribute('data-lenis-prevent', ''); // nếu trang dùng thư viện Lenis

  const scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0xffffff, 1.1));
  const key = new THREE.DirectionalLight(0xffffff, 1.25);
  key.position.set(4, 8, 6);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 0.45);
  fill.position.set(-5, 2, -4);
  scene.add(fill);

  const character = buildCharacter();
  scene.add(character);

  // ── Camera orthographic ──
  const VIEW_H = 8;
  const camera = new THREE.OrthographicCamera(-4, 4, 4, -4, 0.01, 1000);

  const resize = () => {
    const w = host.clientWidth;
    const h = host.clientHeight;
    if (!w || !h) return;
    const aspect = w / h;
    camera.left = -(VIEW_H * aspect) / 2;
    camera.right = (VIEW_H * aspect) / 2;
    camera.top = VIEW_H / 2;
    camera.bottom = -VIEW_H / 2;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  resize();
  window.addEventListener('resize', resize);
  if (window.ResizeObserver) new ResizeObserver(resize).observe(host);

  // ── Orbit tự viết: kéo = xoay, cuộn = zoom, tự xoay chậm ──
  const target = new THREE.Vector3(0, 2.5, 0);
  const RADIUS = 18;
  let theta = 0.9;
  let phi = Math.acos(5.5 / 17.9);
  let zoom = 0.8;

  const MIN_ZOOM = 0.1;
  const MAX_ZOOM = 3;
  const AUTO_SPEED = 0.35;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let dragging = false;
  let lastX = 0;
  let lastY = 0;

  // trạng thái cho hộp thoại
  let introDone = false;      // đã xoay xong phần mở đầu chưa
  let shake = 0;              // "độ lắc" tích lũy khi kéo chuột nhanh
  let shakeReadyAt = 0;       // thời điểm được phép nói câu bị lắc tiếp theo
  let shakeIdx = 0;           // đang ở câu thứ mấy trong SHAKE_LINES
  let lastDragAt = 0;         // lần cuối kéo chuột
  let idleAt = Infinity;      // thời điểm được phép nói câu lúc bình thường

  el.addEventListener('pointerdown', (e) => {
    dragging = true;
    if (!introDone) { introDone = true; idleAt = performance.now() + 3000; }
    lastX = e.clientX;
    lastY = e.clientY;
    el.style.cursor = 'grabbing';
    if (el.setPointerCapture) el.setPointerCapture(e.pointerId);
  });
  el.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    shake += Math.hypot(dx, dy);
    lastDragAt = performance.now();
    theta -= dx * 0.008;
    phi = clamp(phi - dy * 0.008, 0.2, Math.PI - 0.2);
  });
  const endDrag = () => {
    dragging = false;
    el.style.cursor = 'grab';
  };
  el.addEventListener('pointerup', endDrag);
  el.addEventListener('pointercancel', endDrag);

  // Cuộn trong ô = zoom nhân vật, trang KHÔNG trôi.
  host.addEventListener('wheel', (e) => {
    e.preventDefault();
    e.stopPropagation();
    zoom = clamp(zoom * Math.exp(-e.deltaY * 0.0015), MIN_ZOOM, MAX_ZOOM);
  }, { passive: false, capture: true });

  // ── HỘP THOẠI (nói theo tình huống) ──
  const DIALOGUE_BOTTOM = '94%';   // vị trí hộp thoại so với đáy ô (tăng = lên cao hơn)
  const HOLD_MS = 4000;            // giữ chữ trên màn hình bao lâu
  const TYPE_MS = 75;              // tốc độ gõ từng chữ
  const BACK_MS = 45;              // tốc độ xóa (backspace)

  const LINE_INTRO = 'Chóng mặt quá';   // sau khi xoay mở đầu
  const LINE_HELLO = 'Xin chào, mình tên Trường Chinh'; // nói tiếp nếu không bị lắc
  const LINE_CUSTOM = 'Đây là mình trong hình dạng Voxel';  // <-- ĐIỀN CÂU CỦA BẠN VÀO ĐÂY (nói ngay sau lời chào; để trống thì bỏ qua)
  const SHAKE_LINES = ['Nhức đầu quá', 'Đừng có lắc nữa mà huhu !!!']; // khi bị lắc: câu 1, nếu còn lắc thì câu 2, rồi lặp lại
  const IDLE_LINES = ['Code gì lỗi quài', 'Fix mãi không hết !!!']; // lúc bình thường, nói lần lượt
  const IDLE_GAP = 500;            // nghỉ giữa các câu idle
  const IDLE_PAUSE = 6000;         // nghỉ sau khi nói hết vòng idle
  const IDLE_RETRY = 4000;         // nghỉ nếu câu idle bị ngắt giữa chừng

  const SHAKE_LIMIT = 1500;        // kéo chuột tổng cộng quá mức này (px) thì coi là lắc
  const SHAKE_LEAK = 500;          // tốc độ "hạ nhiệt" (px/giây): kéo chậm hơn mức này không bị tính là lắc
  const SHAKE_GAP = 600;           // nghỉ giữa 2 câu "bị lắc" liên tiếp
  const SHAKE_RESET_MS = 10000;    // thôi lắc quá lâu này thì lần lắc sau bắt đầu lại từ câu 1

  const ink = 'var(--text, #1f1f1f)';
  const dlg = document.createElement('div');
  dlg.setAttribute('aria-hidden', 'true');
  Object.assign(dlg.style, {
    position: 'absolute',
    left: '50%',
    bottom: DIALOGUE_BOTTOM,
    transform: 'translate(-50%, 6px)',
    opacity: '0',
    transition: 'opacity .25s ease, transform .25s ease',
    zIndex: '5',
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    textAlign: 'left',
    padding: '8px 14px',
    background: 'var(--surface, #fff)',
    color: ink,
    fontFamily: "'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace",
    fontSize: '0.9rem',
    fontWeight: '600',
    lineHeight: '1.2',
    boxShadow: `-3px 0 0 0 ${ink}, 3px 0 0 0 ${ink}, 0 -3px 0 0 ${ink}, 0 3px 0 0 ${ink}`
  });
  const textEl = document.createElement('span');
  const caretEl = document.createElement('span');
  caretEl.textContent = ' ▼';
  caretEl.style.fontSize = '0.6rem';
  caretEl.style.visibility = 'hidden';
  dlg.append(textEl, caretEl);
  // đuôi bong bóng kiểu pixel (3 bậc)
  [[12, 0], [6, 3], [3, 6]].forEach(([w, off]) => {
    const step = document.createElement('div');
    Object.assign(step.style, {
      position: 'absolute',
      left: `calc(50% - ${w / 2}px)`,
      top: `calc(100% + ${off}px)`,
      width: `${w}px`,
      height: '3px',
      background: ink
    });
    dlg.appendChild(step);
  });
  wrap.appendChild(dlg);

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const setSweat = (on) => {
    if (character.userData.sweat) character.userData.sweat.visible = on;
  };

  let caretTimer = null;
  const stopCaret = () => {
    clearInterval(caretTimer);
    caretEl.style.visibility = 'hidden';
  };
  const startCaret = () => {
    caretEl.style.visibility = 'visible';
    caretTimer = setInterval(() => {
      caretEl.style.visibility =
        caretEl.style.visibility === 'visible' ? 'hidden' : 'visible';
    }, 500);
  };

  // Nói 1 câu: gõ chữ -> giữ HOLD_MS -> backspace -> ẩn.
  // priority cao hơn thì được ngắt câu đang nói; trả về true nếu nói trọn câu.
  let token = 0;
  let current = null;
  async function say(text, { priority = 0, sweat = false, id = text } = {}) {
    if (current) {
      if (current.id === id) return false;          // đang nói đúng câu này rồi
      if (current.priority > priority) return false; // đang nói câu quan trọng hơn
    }
    const my = ++token;
    const alive = () => my === token;
    current = { id, priority };

    stopCaret();
    // đo trước độ rộng để hộp không giật khi gõ từng chữ
    textEl.textContent = text;
    dlg.style.width = 'auto';
    dlg.style.width = dlg.offsetWidth + 'px';
    textEl.textContent = '';

    setSweat(sweat);
    dlg.style.opacity = '1';
    dlg.style.transform = 'translate(-50%, 0)';

    for (let i = 1; i <= text.length; i++) {
      await sleep(TYPE_MS);
      if (!alive()) return false;
      textEl.textContent = text.slice(0, i);
    }
    startCaret();
    await sleep(HOLD_MS);
    if (!alive()) return false;
    stopCaret();
    for (let i = text.length - 1; i >= 0; i--) {
      await sleep(BACK_MS);
      if (!alive()) return false;
      textEl.textContent = text.slice(0, i);
    }
    await sleep(150);
    if (!alive()) return false;
    dlg.style.opacity = '0';
    dlg.style.transform = 'translate(-50%, 6px)';
    setSweat(false);
    current = null;
    return true;
  }

  // ── Intro + tự xoay dùng chung 1 vận tốc quay (spin), giảm mượt về AUTO_SPEED ──
  const INTRO_TURNS = 6;    // số vòng quay lúc mở đầu
  const INTRO_DECAY = 2;    // càng lớn thì intro càng ngắn
  const INTRO_END_SPIN = AUTO_SPEED + 0.8; // xoay chậm hơn mức này = intro xong
  let spin = reducedMotion
    ? 0
    : AUTO_SPEED + INTRO_TURNS * Math.PI * 2 * INTRO_DECAY; // rad/giây
  const startTime = performance.now();
  let last = startTime;
  let idleIdx = 0;

  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;

    if (dragging) {
      spin = 0;
    } else if (!reducedMotion) {
      spin += (AUTO_SPEED - spin) * (1 - Math.exp(-INTRO_DECAY * dt));
    }
    theta -= spin * dt;

    // 1) Xoay mở đầu xong -> "Chóng mặt quá"
    if (!introDone) {
      const ready = reducedMotion
        ? now - startTime > 500
        : !dragging && now - startTime > 500 && spin < INTRO_END_SPIN;
      if (ready) {
        introDone = true;
        if (reducedMotion) {
          idleAt = now + 1500;
        } else {
          say(LINE_INTRO, { priority: 1, sweat: true, id: 'intro' }).then((ok) => {
            if (!ok) {
              // bị lắc ngắt giữa chừng -> bỏ qua lời chào
              idleAt = performance.now() + IDLE_GAP * 3;
              return;
            }
            say(LINE_HELLO, { priority: 1, id: 'hello' }).then((ok2) => {
              const done = () => { idleAt = performance.now() + IDLE_GAP * 3; };
              if (ok2 && LINE_CUSTOM.trim()) {
                say(LINE_CUSTOM, { priority: 1, id: 'custom' }).then(done);
              } else {
                done();
              }
            });
          });
        }
      }
    }

    // 2) Bị lắc nhiều -> "Nhức đầu quá"; còn lắc tiếp -> "Đừng có lắc nữa mà huhu !!!"
    shake = Math.max(0, shake - SHAKE_LEAK * dt);
    if (now - lastDragAt > SHAKE_RESET_MS) shakeIdx = 0;
    if (introDone && shake > SHAKE_LIMIT && now >= shakeReadyAt) {
      const n = shakeIdx;
      shakeIdx = (shakeIdx + 1) % SHAKE_LINES.length;
      shake = 0;
      shakeReadyAt = Infinity;
      say(SHAKE_LINES[n], { priority: 2, sweat: true, id: 'shake' + n }).then(() => {
        shakeReadyAt = performance.now() + SHAKE_GAP;
      });
    }

    // 3) Bình thường -> lần lượt nói các câu idle
    if (introDone && !current && !dragging && now >= idleAt) {
      idleAt = Infinity;
      say(IDLE_LINES[idleIdx], { priority: 0, id: 'idle' + idleIdx }).then((ok) => {
        const t = performance.now();
        if (ok) {
          idleIdx = (idleIdx + 1) % IDLE_LINES.length;
          idleAt = t + (idleIdx === 0 ? IDLE_PAUSE : IDLE_GAP);
        } else {
          idleAt = t + IDLE_RETRY; // bị ngắt: lát nữa nói lại đúng câu đó
        }
      });
    }

    camera.position.set(
      target.x + RADIUS * Math.sin(phi) * Math.sin(theta),
      target.y + RADIUS * Math.cos(phi),
      target.z + RADIUS * Math.sin(phi) * Math.cos(theta)
    );
    camera.lookAt(target);

    if (camera.zoom !== zoom) {
      camera.zoom = zoom;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();