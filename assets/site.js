/* Progressive enhancement: every page and every publication works without JS. */
(() => {
  'use strict';
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    document.documentElement.classList.add('js');
    toggle.hidden = false;
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });
    document.addEventListener('click', event => {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
    const desktop = window.matchMedia('(min-width: 861px)');
    if (desktop.addEventListener) desktop.addEventListener('change', closeMenu);
    else if (desktop.addListener) desktop.addListener(closeMenu);
  }

})();


// Homepage publication rotation: random on entry, avoiding immediate repeats.
// Works with static GitHub Pages and keeps the original markup as a no-JS fallback.
(() => {
  'use strict';
  const choices = document.getElementById('paper-rotation-choices');
  const target = document.getElementById('featured-paper');
  const next = document.getElementById('another-paper');
  if (!choices || !target) return;

  const papers = Array.from(choices.content.querySelectorAll('.gold-featured-article'));
  if (!papers.length) return;
  const storageKey = 'davide-gold-previous-paper';
  let previous = -1;
  try {
    const stored = sessionStorage.getItem(storageKey);
    if (stored !== null) previous = Number(stored);
  } catch (_) { /* Storage may be disabled; randomness still works. */ }

  function showRandomPaper() {
    // Uniform across all papers except the paper shown on the previous visit.
    const options = papers.map((_, i) => i).filter(i => i !== previous);
    const index = options[Math.floor(Math.random() * options.length)];
    previous = index;
    target.replaceChildren(papers[index].cloneNode(true));
    try { sessionStorage.setItem(storageKey, String(index)); }
    catch (_) { /* Private browsing may block writes. */ }
  }
  showRandomPaper();
  if (next) {
    next.hidden = false;
    next.addEventListener('click', showRandomPaper);
  }
})();
