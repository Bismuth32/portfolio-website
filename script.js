// Dark mode toggle — theme class on html so CSS and head script stay in sync; forces repaint after toggle
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
  const STORAGE_KEY = 'jb-portfolio-theme';
  const root = document.documentElement;

  const isDark = () => root.classList.contains('dark-mode');

  function getSystemPrefersDark() {
    return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyTheme(dark, save) {
    root.classList.remove('dark-mode', 'theme-light');
    if (dark) {
      root.classList.add('dark-mode');
    } else {
      root.classList.add('theme-light');
    }
    themeToggle.setAttribute('aria-pressed', dark ? 'true' : 'false');
    if (save) {
      try { localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light'); } catch (_) {}
    }
    // Force style recalc so text and surfaces update immediately (no refresh needed)
    void root.offsetHeight;
  }

  function initTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') {
        applyTheme(saved === 'dark', false);
      } else {
        applyTheme(getSystemPrefersDark(), false);
      }
    } catch (_) {
      applyTheme(getSystemPrefersDark(), false);
    }
  }

  initTheme();

  // User toggle: save preference (overrides system)
  themeToggle.addEventListener('click', () => {
    applyTheme(!isDark(), true);
  });

  // When no saved preference, follow system changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      try {
        if (localStorage.getItem(STORAGE_KEY) == null) {
          applyTheme(e.matches, false);
        }
      } catch (_) {}
    });
  }
}

// Mobile hamburger menu toggle
const navHamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');
if (navHamburger && navLinks) {
  navHamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navHamburger.classList.toggle('open', isOpen);
    navHamburger.setAttribute('aria-expanded', isOpen);
  });
  // Close menu when a link is tapped
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navHamburger.classList.remove('open');
      navHamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Case study: landing effect on load
const caseStudy = document.querySelector('.case-study');
if (caseStudy) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => caseStudy.classList.add('case-study-landed'));
  });
}

// Scroll reveal — fade in elements when they enter viewport
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
      }
    });
  },
  { threshold: 0.08 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// TOC: highlight current case study based on scroll position
const cards = document.querySelectorAll('.project-card[id]');
const tocItems = document.querySelectorAll('.toc-item');

const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const idx = Array.from(cards).findIndex((c) => c.id === id);
        tocItems.forEach((t, i) => t.classList.toggle('active', i === idx));
      }
    });
  },
  {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0,
  }
);
cards.forEach((card) => cardObserver.observe(card));

// TOC click — scroll to corresponding project card
function scrollToCard(cardId) {
  const el = document.getElementById(cardId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

tocItems.forEach((item) => {
  const cardId = item.getAttribute('data-card');
  if (cardId) {
    item.addEventListener('click', () => scrollToCard(cardId));
  }
});

// Contact form — prevent default and show feedback (replace with your backend later)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.form-btn');
    const originalText = btn.innerHTML;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    // Simulate send; replace with real fetch() to your API or Formspree etc.
    setTimeout(() => {
      btn.textContent = 'Message sent!';
      btn.style.background = '#28a745';
      contactForm.reset();
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 2500);
    }, 800);
  });
}
