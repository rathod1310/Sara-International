/* =========================================
   Sara International – main.js
   ========================================= */

'use strict';

/* ══════════════════════════════════════════
   HERO BACKGROUND SLIDER
══════════════════════════════════════════ */
function initHeroSlider() {
  const slides  = document.querySelectorAll('.hero-slide');
  const dots    = document.querySelectorAll('.hero-dot');
  const bar     = document.getElementById('heroProgressBar');
  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');
  
  if (!slides.length) return;

  let current = 0;
  let timer   = null;
  const DELAY = 5000;

  function goTo(idx) {
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
    resetBar();
  }

  function resetBar() {
    if (!bar) return;
    bar.style.transition = 'none';
    bar.style.width = '0%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.transition = 'width ' + DELAY + 'ms linear';
        bar.style.width = '100%';
      });
    });
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), DELAY);
  }

  function stopAuto() {
    clearInterval(timer);
    if (bar) { bar.style.transition = 'none'; bar.style.width = '0%'; }
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopAuto();
      goTo(parseInt(dot.dataset.index));
      startAuto();
    });
  });

  if (prevBtn) prevBtn.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });

  const section = document.querySelector('.hero-section');
  if (section) {
    section.addEventListener('mouseenter', stopAuto);
    section.addEventListener('mouseleave', () => { resetBar(); startAuto(); });
    let touchStartX = 0;
    section.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    section.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) { stopAuto(); goTo(diff > 0 ? current + 1 : current - 1); startAuto(); }
    }, { passive: true });
  }

  resetBar();
  startAuto();
}

/* ══════════════════════════════════════════
   CERTIFICATIONS SLIDER
══════════════════════════════════════════ */
function initCertSlider() {
  const track = document.getElementById("certTrack");
  if (!track) return;

  const cards        = track.querySelectorAll(".cert-card");
  const totalOriginal = 7;
  const gap           = 12;
  let currentIndex    = 0;

  function getCardWidth() {
    return cards[0].getBoundingClientRect().width + gap;
  }

  function slide() {
    currentIndex++;
    track.style.transition = "transform 0.6s ease";
    track.style.transform  = `translateX(-${currentIndex * getCardWidth()}px)`;

    if (currentIndex >= totalOriginal) {
      setTimeout(() => {
        track.style.transition = "none";
        currentIndex = 0;
        track.style.transform  = `translateX(0px)`;
      }, 650);
    }
  }

  setInterval(slide, 3000);
}

/* ══════════════════════════════════════════
   BRAND SLIDER
══════════════════════════════════════════ */
function initBrandSlider() {
  const track = document.getElementById("brandTrack");
  if (!track) return;

  const cards         = track.querySelectorAll(".brand-slide-card");
  const totalOriginal = 7;
  const gap           = 14;
  let currentIndex    = 0;

  function getCardWidth() {
    return cards[0].getBoundingClientRect().width + gap;
  }

  function slide() {
    currentIndex++;
    track.style.transition = "transform 0.6s ease";
    track.style.transform  = `translateX(-${currentIndex * getCardWidth()}px)`;

    if (currentIndex >= totalOriginal) {
      setTimeout(() => {
        track.style.transition = "none";
        currentIndex = 0;
        track.style.transform  = `translateX(0px)`;
      }, 650);
    }
  }

  setInterval(slide, 3000);
}

/* ══════════════════════════════════════════
   WHY CARDS SLIDER
══════════════════════════════════════════ */
function initWhySlider() {
  const track    = document.getElementById('whyTrack');
  const dotsWrap = document.getElementById('whyDots');
  const prevBtn  = document.getElementById('whyPrev');
  const nextBtn  = document.getElementById('whyNext');
  if (!track) return;

  const slides = track.querySelectorAll('.why-slide');
  let current  = 0;

  function visibleCount() {
    const w = window.innerWidth;
    if (w <= 480)  return 1;
    if (w <= 768)  return 2;
    if (w <= 1100) return 3;
    return 4;
  }

  function totalPages() {
    return Math.ceil(slides.length / visibleCount());
  }

  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    for (let i = 0; i < totalPages(); i++) {
      const d = document.createElement('span');
      d.className = 'why-dot' + (i === current ? ' active' : '');
      d.dataset.page = i;
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
    }
  }

  function updateDots() {
    if (!dotsWrap) return;
    dotsWrap.querySelectorAll('.why-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function getSlideWidth() {
    return slides.length ? slides[0].offsetWidth + 24 : 0;
  }

  function goTo(idx) {
    const pages = totalPages();
    current = Math.max(0, Math.min(idx, pages - 1));
    track.style.transform = `translateX(-${current * visibleCount() * getSlideWidth()}px)`;
    updateDots();
    if (prevBtn) prevBtn.disabled = (current === 0);
    if (nextBtn) nextBtn.disabled = (current >= pages - 1);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
  }, { passive: true });

  buildDots();
  goTo(0);
  window.addEventListener('resize', () => { buildDots(); goTo(0); });
}

/* ══════════════════════════════════════════
   MEGA MENU — Cross-Browser, All Fixes
   
   Fixes:
   1. Dynamic top position — reads navbar bottom on every open
      so scroll never causes a gap (Firefox + all browsers)
   2. Hover bridge — invisible element covers gap between
      nav link and menu so cursor can travel without closing
   3. Sibling close — hovering other nav items closes menu
   4. Mobile — JS toggle via .mobile-open class
══════════════════════════════════════════ */
function initMegaMenu() {
  const navbar       = document.getElementById('mainNav');
  const megaDropdown = document.querySelector('.mega-dropdown');
  const megaToggle   = document.getElementById('productsMenu');
  const megaMenu     = document.querySelector('.mega-menu');

  if (!megaDropdown || !megaMenu || !navbar) return;

  /* ── Utility ── */
  function isMobile() {
    return window.innerWidth < 992;
  }

  /* ── Get exact navbar bottom, accounting for scroll & any size change ── */
  function getNavbarBottom() {
    return navbar.getBoundingClientRect().bottom;
  }

  /* ── Position the menu correctly (call every time before showing) ──
     setProperty with 'important' overrides any CSS !important rules     */
  function positionMenu() {
    const bottom = getNavbarBottom();
    megaMenu.style.setProperty('top', bottom + 'px', 'important');
  }

  /* ══════════════════════════════
     DESKTOP: Hover-based logic
  ══════════════════════════════ */
  let closeTimer = null;
  const CLOSE_DELAY = 80; // ms — enough to cross the gap

  function openMenu() {
    if (isMobile()) return;
    clearTimeout(closeTimer);
    positionMenu();   // always recalculate before showing
    megaMenu.classList.add('is-open');
  }

  function scheduleClose() {
    if (isMobile()) return;
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
      megaMenu.classList.remove('is-open');
    }, CLOSE_DELAY);
  }

  function cancelClose() {
    clearTimeout(closeTimer);
  }

  /* Hover on the dropdown nav item */
  megaDropdown.addEventListener('mouseenter', openMenu);
  megaDropdown.addEventListener('mouseleave', scheduleClose);

  /* Hover on the menu itself keeps it open */
  megaMenu.addEventListener('mouseenter', cancelClose);
  megaMenu.addEventListener('mouseleave', scheduleClose);

  /* Hovering any OTHER nav item closes the menu immediately */
  document.querySelectorAll('.navbar-nav .nav-item:not(.mega-dropdown)').forEach(item => {
    item.addEventListener('mouseenter', () => {
      if (!isMobile()) {
        clearTimeout(closeTimer);
        megaMenu.classList.remove('is-open');
      }
    });
  });

  /* Close on Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      megaMenu.classList.remove('is-open');
      closeMobileMenu();
    }
  });

  /* Close when clicking outside (desktop fallback) */
  document.addEventListener('click', e => {
    if (!megaDropdown.contains(e.target) && !megaMenu.contains(e.target)) {
      megaMenu.classList.remove('is-open');
    }
  });

  /* On scroll — reposition if open so it never drifts */
  window.addEventListener('scroll', () => {
    if (!isMobile() && megaMenu.classList.contains('is-open')) {
      positionMenu();
    }
  }, { passive: true });

  /* On resize — reposition */
  window.addEventListener('resize', () => {
    if (!isMobile()) {
      positionMenu();
    }
  }, { passive: true });

  /* ══════════════════════════════
     MOBILE: Click toggle logic
  ══════════════════════════════ */
  function openMobileMenu() {
    megaMenu.classList.add('mobile-open');
    megaMenu.style.display    = 'block';
    megaMenu.style.maxHeight  = '70vh';
    megaMenu.style.overflowY  = 'auto';
    if (megaToggle) megaToggle.classList.add('active');
  }

  function closeMobileMenu() {
    megaMenu.classList.remove('mobile-open');
    megaMenu.style.display   = '';
    megaMenu.style.maxHeight = '';
    if (megaToggle) megaToggle.classList.remove('active');
  }

  if (megaToggle) {
    megaToggle.addEventListener('click', e => {
      if (!isMobile()) return;
      e.preventDefault();
      e.stopPropagation();
      megaMenu.classList.contains('mobile-open') ? closeMobileMenu() : openMobileMenu();
    });
  }

  /* Mobile: close when a product link is clicked */
  megaMenu.querySelectorAll('.mega-item').forEach(item => {
    item.addEventListener('click', () => {
      if (isMobile()) {
        closeMobileMenu();
        const navCollapse = document.getElementById('navMenu');
        if (navCollapse && navCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      }
    });
  });

  /* Mobile: close on outside click */
  document.addEventListener('click', e => {
    if (isMobile() && !megaDropdown.contains(e.target)) {
      closeMobileMenu();
    }
  });

  /* Reset on resize desktop ↔ mobile */
  window.addEventListener('resize', () => {
    if (!isMobile()) {
      closeMobileMenu();
      megaMenu.classList.remove('mobile-open');
    }
  }, { passive: true });

  /* Run initial position calculation */
  positionMenu();
}

/* ══════════════════════════════════════════
   PRODUCTS RENDER
══════════════════════════════════════════ */
function renderProducts(filter) {
  const container = document.getElementById("productList");
  if (!container) return;

  container.innerHTML = "";

  const categories = filter === "all"
    ? Object.entries(PRODUCTS)
    : Object.entries(PRODUCTS).filter(entry => entry[0] === filter);

  if (!categories.length) {
    container.innerHTML = '<p class="text-center py-5 text-muted">No products found.</p>';
    return;
  }

  const gradeLabels = { premium: "Premium", standard: "Standard", select: "Select" };

  categories.forEach((entry, ci) => {
    const [key, cat] = entry;

    const block = document.createElement("div");
    block.className = "product-category-block";
    block.style.animationDelay = (ci * 0.05) + "s";

    const rows = cat.items.map((item, i) => `
      <div class="pt-row" style="animation-delay:${(i * 0.04 + 0.1)}s">
        <div class="pt-name">${item.name}<small>${item.sub}</small></div>
        <div class="pt-origin"><i class="fa fa-map-marker-alt"></i>India</div>
        <div><span class="pt-grade grade-${item.grade}">${gradeLabels[item.grade]}</span></div>
        <div class="pt-hs">HS: ${item.hs}</div>
        <div class="pt-status ${item.status === 'avail' ? 'avail' : 'limited'}">
          ${item.status === 'avail' ? 'In Stock' : 'Limited'}
        </div>
        <div class="pt-action">
          <button class="btn-enquire" onclick="enquireProduct('${item.name.replace(/'/g, "\\'")}')">Enquire</button>
        </div>
      </div>
    `).join("");

    block.innerHTML = `
      <div class="cat-header">
        <div class="cat-header-icon"><i class="fa ${cat.icon}"></i></div>
        <h4>${cat.label}</h4>
        <span class="cat-header-count">${cat.items.length} Products</span>
      </div>
      <div class="products-table">
        <div class="pt-head">
          <span>Product Name</span><span>Origin</span><span>Grade</span>
          <span>HS Code</span><span>Availability</span><span>Action</span>
        </div>
        ${rows}
      </div>
    `;

    container.appendChild(block);
  });
}

/* ══════════════════════════════════════════
   ENQUIRE PRODUCT
══════════════════════════════════════════ */
function enquireProduct(productName) {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  setTimeout(() => {
    const textarea = document.querySelector("#contact textarea.cf-input");
    if (textarea) {
      textarea.value = `I am interested in: ${productName}\n\nPlease provide pricing, packaging, and minimum order details.`;
    }
  }, 600);
  showToast("Enquiry initiated for: " + productName);
}

/* ══════════════════════════════════════════
   CATEGORY FILTER
══════════════════════════════════════════ */
function initCategoryFilter() {
  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(btn.dataset.filter);
    });
  });

  document.querySelectorAll(".mega-item[data-cat]").forEach(item => {
    item.addEventListener("click", e => {
      const cat = item.dataset.cat;
      const productsSection = document.getElementById("products");
      if (productsSection) {
        e.preventDefault();
        productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setTimeout(() => {
        document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
        const btn = document.querySelector(`.cat-btn[data-filter="${cat}"]`);
        if (btn) { btn.classList.add("active"); renderProducts(cat); }
      }, 300);
    });
  });
}

/* ══════════════════════════════════════════
   NAVBAR SCROLL
══════════════════════════════════════════ */
function initNavbar() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ══════════════════════════════════════════
   SCROLL SPY
══════════════════════════════════════════ */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const target = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (target) target.classList.add('active');
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => observer.observe(s));
}

/* ══════════════════════════════════════════
   BACK TO TOP
══════════════════════════════════════════ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ══════════════════════════════════════════
   TOAST
══════════════════════════════════════════ */
function showToast(msg) {
  const t = document.getElementById('toastNotify');
  if (t) {
    t.innerHTML = `<i class="fa fa-check-circle me-2"></i>${msg || 'Done!'}`;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3500);
    return;
  }
  const existing = document.querySelector(".toast-msg");
  if (existing) existing.remove();
  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ══════════════════════════════════════════
   PARTICLES
══════════════════════════════════════════ */
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'hero-particle';
    p.style.cssText =
      `left:${Math.random() * 100}%;` +
      `--dur:${4 + Math.random() * 6}s;` +
      `--delay:${Math.random() * 6}s;` +
      `width:${3 + Math.random() * 4}px;` +
      `height:${3 + Math.random() * 4}px;`;
    container.appendChild(p);
  }
}

/* ══════════════════════════════════════════
   SMOOTH SCROLL
══════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const navCollapse = document.getElementById('navMenu');
      if (navCollapse && navCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    });
  });
}

/* ══════════════════════════════════════════
   ANIMATE ON SCROLL
══════════════════════════════════════════ */
function initAnimateOnScroll() {
  const els = document.querySelectorAll('.why-card, .pack-card, .brand-logo-tile, .af-item');
  if (!els.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transition = `opacity 0.5s ${i * 0.05}s ease, transform 0.5s ${i * 0.05}s ease`;
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    observer.observe(el);
  });
}

/* ══════════════════════════════════════════
   COUNTER ANIMATION
══════════════════════════════════════════ */
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num');
  if (!counters.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const raw    = el.textContent.replace(/[^0-9]/g, '');
      const target = parseInt(raw);
      const suffix = el.textContent.replace(/[0-9]/g, '');
      if (!target) return;
      let start = 0;
      const step = target / 60;
      const t = setInterval(() => {
        start += step;
        if (start >= target) { start = target; clearInterval(t); }
        el.textContent = Math.floor(start) + suffix;
      }, 20);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ══════════════════════════════════════════
   MAIN INIT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  initHeroSlider();
  initCertSlider();
  initBrandSlider();
  initWhySlider();
  initMegaMenu();
  initParticles();
  initNavbar();
  initScrollSpy();
  initBackToTop();
  initSmoothScroll();
  initAnimateOnScroll();
  animateCounters();
  renderProducts('all');
  initCategoryFilter();
});