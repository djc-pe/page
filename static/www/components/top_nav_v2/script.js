const header = document.querySelector('.header');
const nav = document.querySelector('.navbar');

/* El header se oculta al bajar y vuelve al subir. */
let lastScroll = window.scrollY;
let ticking = false;

function onScroll() {
  const current = window.scrollY;

  if (current > lastScroll && current > 80) {
    header.classList.add('header--hidden');
  } else {
    header.classList.remove('header--hidden');
  }

  lastScroll = Math.max(current, 0);
  ticking = false;
}

window.addEventListener(
  'scroll',
  function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(onScroll);
  },
  { passive: true }
);

nav?.addEventListener('focusout', function (e) {
  if (!header.contains(e.relatedTarget)) {
    header.classList.remove('header--hidden');
  }
});
