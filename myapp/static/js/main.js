/* =========================================
   Sara International – main.js
   ========================================= */

'use strict';

/* ══════════════════════════════════════════
   PRODUCTS DATA
══════════════════════════════════════════ */
// const PRODUCTS = {
//   agri: {
//     label: "Agricultural Products",
//     icon: "fa-seedling",
//     items: [
//       { name: "Basmati Rice", sub: "Premium Long Grain", grade: "premium", hs: "1006.30", status: "avail" },
//       { name: "Wheat Flour", sub: "Maida & Atta", grade: "standard", hs: "1101.00", status: "avail" },
//       { name: "Sugar", sub: "Refined White Sugar", grade: "standard", hs: "1701.99", status: "limited" }
//     ]
//   },
//   spices: {
//     label: "Spices",
//     icon: "fa-pepper-hot",
//     items: [
//       { name: "Turmeric Powder", sub: "Pure Haldi", grade: "premium", hs: "0910.30", status: "avail" },
//       { name: "Red Chili Powder", sub: "Kashmiri Lal Mirch", grade: "premium", hs: "0904.21", status: "avail" },
//       { name: "Cumin Seeds", sub: "Jeera Whole", grade: "standard", hs: "0909.31", status: "avail" }
//     ]
//   },
//   food: {
//     label: "Food & Beverages",
//     icon: "fa-utensils",
//     items: [
//       { name: "Ready to Eat Curry", sub: "Various Flavors", grade: "standard", hs: "2104.20", status: "avail" },
//       { name: "Pickles", sub: "Mixed Vegetable", grade: "standard", hs: "2001.90", status: "limited" },
//       { name: "Snacks", sub: "Namkeen Mix", grade: "standard", hs: "1905.90", status: "avail" }
//     ]
//   },
//   textiles: {
//     label: "Textiles",
//     icon: "fa-tshirt",
//     items: [
//       { name: "Cotton Fabric", sub: "100% Pure Cotton", grade: "premium", hs: "5208.32", status: "avail" },
//       { name: "Silk Sarees", sub: "Traditional Design", grade: "premium", hs: "5007.20", status: "limited" }
//     ]
//   },
//   chemicals: {
//     label: "Chemicals",
//     icon: "fa-flask",
//     items: [
//       { name: "Organic Fertilizer", sub: "NPK 20-20-20", grade: "standard", hs: "3105.90", status: "avail" },
//       { name: "Industrial Solvents", sub: "High Purity", grade: "select", hs: "3814.00", status: "limited" }
//     ]
//   },
//   machinery: {
//     label: "Machinery",
//     icon: "fa-cogs",
//     items: [
//       { name: "Agricultural Equipment", sub: "Modern Tools", grade: "premium", hs: "8432.80", status: "avail" },
//       { name: "Food Processing Units", sub: "Stainless Steel", grade: "premium", hs: "8438.50", status: "limited" }
//     ]
//   },
//   metals: {
//     label: "Metals",
//     icon: "fa-industry",
//     items: [
//       { name: "Steel Pipes", sub: "MS & GI Pipes", grade: "standard", hs: "7306.30", status: "avail" },
//       { name: "Aluminum Sheets", sub: "Industrial Grade", grade: "standard", hs: "7606.12", status: "avail" }
//     ]
//   },
//   plastics: {
//     label: "Plastics",
//     icon: "fa-cube",
//     items: [
//       { name: "HDPE Granules", sub: "Raw Material", grade: "standard", hs: "3901.20", status: "avail" },
//       { name: "Plastic Packaging", sub: "Food Grade", grade: "premium", hs: "3923.30", status: "limited" }
//     ]
//   },
//   electronics: {
//     label: "Electronics",
//     icon: "fa-microchip",
//     items: [
//       { name: "LED Lights", sub: "Energy Efficient", grade: "standard", hs: "8539.50", status: "avail" },
//       { name: "Wiring Harness", sub: "Automotive Grade", grade: "premium", hs: "8544.42", status: "limited" }
//     ]
//   },
//   auto: {
//     label: "Auto Parts",
//     icon: "fa-car",
//     items: [
//       { name: "Brake Pads", sub: "Ceramic Compound", grade: "premium", hs: "8708.30", status: "avail" },
//       { name: "Oil Filters", sub: "High Efficiency", grade: "standard", hs: "8421.23", status: "avail" }
//     ]
//   },
//   ceramic: {
//     label: "Ceramics",
//     icon: "fa-tile",
//     items: [
//       { name: "Porcelain Tiles", sub: "Floor & Wall", grade: "premium", hs: "6907.90", status: "avail" },
//       { name: "Ceramic Insulators", sub: "Electrical Grade", grade: "select", hs: "8546.20", status: "limited" }
//     ]
//   },
//   leather: {
//     label: "Leather",
//     icon: "fa-shoe-prints",
//     items: [
//       { name: "Genuine Leather", sub: "Full Grain", grade: "premium", hs: "4107.12", status: "avail" },
//       { name: "Leather Bags", sub: "Handcrafted", grade: "premium", hs: "4202.21", status: "limited" }
//     ]
//   },
//   gems: {
//     label: "Gems & Jewelry",
//     icon: "fa-gem",
//     items: [
//       { name: "Gold Jewelry", sub: "22K Gold", grade: "premium", hs: "7113.19", status: "limited" },
//       { name: "Silver Ornaments", sub: "Sterling Silver", grade: "premium", hs: "7113.11", status: "avail" }
//     ]
//   },
//   paper: {
//     label: "Paper & Wood",
//     icon: "fa-tree",
//     items: [
//       { name: "Printing Paper", sub: "A4 Quality", grade: "standard", hs: "4802.55", status: "avail" },
//       { name: "Plywood Sheets", sub: "Marine Grade", grade: "premium", hs: "4412.31", status: "limited" }
//     ]
//   }
// };

/* ══════════════════════════════════════════
   HERO BACKGROUND SLIDER
══════════════════════════════════════════ */
function initHeroSlider() {
  const slides  = document.querySelectorAll('.hero-slide');
  const dots    = document.querySelectorAll('.hero-dot');
  const bar     = document.getElementById('heroProgressBar');
  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');
  
  console.log('initHeroSlider called');
  console.log('Slides found:', slides.length);
  console.log('Dots found:', dots.length);
  console.log('Progress bar:', bar);
  console.log('Prev button:', prevBtn);
  console.log('Next button:', nextBtn);
  
  if (!slides.length) {
    console.error('No hero slides found!');
    return;
  }

  let current = 0;
  let timer   = null;
  const DELAY = 5000;

  function goTo(idx) {
    console.log('Going to slide:', idx);
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
    console.log('Starting auto-slide with DELAY:', DELAY);
    timer = setInterval(() => {
      console.log('Auto-sliding to next');
      goTo(current + 1);
    }, DELAY);
  }

  function stopAuto() {
    clearInterval(timer);
    console.log('Auto-slide stopped');
    if (bar) { bar.style.transition = 'none'; bar.style.width = '0%'; }
  }

  // Initialize dots click handlers
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      console.log('Dot clicked:', dot.dataset.index);
      stopAuto();
      goTo(parseInt(dot.dataset.index));
      startAuto();
    });
  });

  // Initialize nav buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', () => { 
      console.log('Prev button clicked');
      stopAuto(); 
      goTo(current - 1); 
      startAuto(); 
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => { 
      console.log('Next button clicked');
      stopAuto(); 
      goTo(current + 1); 
      startAuto(); 
    });
  }

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

  // Force start
  console.log('Forcing slider start...');
  resetBar();
  startAuto();
  console.log('Hero slider initialized successfully');
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
   MEGA MENU — Cross Browser Compatible
══════════════════════════════════════════ */
function initMegaMenu() {
  const megaDropdown = document.querySelector('.mega-dropdown');
  const megaToggle = document.getElementById('productsMenu');
  const megaMenu = document.querySelector('.mega-menu');
  
  if (!megaDropdown || !megaMenu) return;

  let hoverTimeout;
  const delay = 150; // Small delay to prevent flickering

  // Show menu function
  const showMenu = () => {
    clearTimeout(hoverTimeout);
    megaMenu.classList.add('is-open');
  };

  // Hide menu function
  const hideMenu = () => {
    hoverTimeout = setTimeout(() => {
      megaMenu.classList.remove('is-open');
    }, delay);
  };

  // Hover on dropdown (Products link)
  megaDropdown.addEventListener('mouseenter', showMenu);
  megaDropdown.addEventListener('mouseleave', hideMenu);

  // Hover on menu itself (keep it open)
  megaMenu.addEventListener('mouseenter', () => clearTimeout(hoverTimeout));
  megaMenu.addEventListener('mouseleave', hideMenu);

  // Click toggle for mobile/tablet
  if (megaToggle) {
    megaToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      megaMenu.classList.toggle('is-open');
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!megaDropdown.contains(e.target)) {
      megaMenu.classList.remove('is-open');
    }
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      megaMenu.classList.remove('is-open');
    }
  });

  // Close menu when page scrolls (Firefox fix)
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      megaMenu.classList.remove('is-open');
    }, 50);
  }, { passive: true });
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
  // Only target nav links with hash hrefs (not page links)
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
  // Try the DOM toast element first
  const t = document.getElementById('toastNotify');
  if (t) {
    t.innerHTML = `<i class="fa fa-check-circle me-2"></i>${msg || 'Done!'}`;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3500);
    return;
  }
  // Fallback: create floating toast
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
   CONTACT FORM
══════════════════════════════════════════ */
// function initContactForm() {
//   const form = document.getElementById('contactForm');
//   if (!form) return;
//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     const btn = form.querySelector('button[type="submit"]');
//     btn.disabled = true;
//     btn.innerHTML = '<i class="fa fa-spinner fa-spin me-2"></i>Sending...';
//     setTimeout(() => {
//       btn.disabled = false;
//       btn.innerHTML = 'Send Enquiry <i class="fa fa-paper-plane ms-2"></i>';
//       form.reset();
//       showToast('Your enquiry has been sent successfully!');
//     }, 1500);
//   });
// }

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
  // initContactForm();
  initSmoothScroll();
  initAnimateOnScroll();
  animateCounters();
  renderProducts('all');
  initCategoryFilter();
});