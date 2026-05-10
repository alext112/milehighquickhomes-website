/* ============================================================
   STICKY NAV SHADOW
   ============================================================ */
function initStickyNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  function updateNav() {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
}

/* ============================================================
   MOBILE HAMBURGER NAV
   ============================================================ */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const overlay   = document.getElementById('nav-overlay');
  const closeBtn  = document.getElementById('nav-close');
  if (!hamburger || !overlay || !closeBtn) return;

  function openNav() {
    overlay.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    overlay.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openNav);
  closeBtn.addEventListener('click', closeNav);

  overlay.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeNav();
      hamburger.focus();
    }
  });
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
function initFaqAccordion() {
  var items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach(function(item) {
    var question = item.querySelector('.faq-question');
    var answer   = item.querySelector('.faq-answer');
    if (!question || !answer) return;

    question.addEventListener('click', function() {
      var isOpen = question.getAttribute('aria-expanded') === 'true';

      /* close all */
      items.forEach(function(other) {
        var otherQ = other.querySelector('.faq-question');
        var otherA = other.querySelector('.faq-answer');
        if (otherQ) otherQ.setAttribute('aria-expanded', 'false');
        if (otherA) otherA.style.maxHeight = '0';
      });

      /* open clicked one if it was closed */
      if (!isOpen) {
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* ============================================================
   FORM SUBMISSION — loading state only, native submit handles redirect
   ============================================================ */
function initForms() {
  var forms = document.querySelectorAll('form[data-netlify]');

  forms.forEach(function(form) {
    var submitBtn  = form.querySelector('[type="submit"]');
    var defaultTxt = submitBtn ? submitBtn.textContent : 'Submit';

    form.addEventListener('submit', function() {
      if (submitBtn) {
        submitBtn.disabled    = true;
        submitBtn.textContent = 'Sending…';
      }
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', function() {
  initStickyNav();
  initMobileNav();
  initFaqAccordion();
  initForms();
});
