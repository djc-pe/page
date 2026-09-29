document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('drawerOverlay');
  if (!overlay) return;

  const drawers = Array.from(overlay.querySelectorAll('.drawer'));
  let lastFocused = null;

  function setDrawer(drawer) {
    drawers.forEach(function (d) {
      d.style.transform = d === drawer ? 'translateX(0)' : translateOut(d);
    });
  }

  function translateOut(d) {
    return d.dataset.side === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
  }

  function openDrawer(id, trigger) {
    const drawer = document.getElementById(id);
    if (!drawer) return;
    lastFocused = trigger || document.activeElement;
    overlay.classList.add('active');
    setDrawer(drawer);
    document.body.style.overflow = 'hidden';
    const focusable = drawer.querySelector('a, button');
    if (focusable) focusable.focus();
  }

  function closeDrawers() {
    overlay.classList.remove('active');
    setDrawer(null);
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
    lastFocused = null;
  }

  /* Botones con data-drawer-open */
  document.querySelectorAll('[data-drawer-open]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openDrawer(btn.dataset.drawerOpen, btn);
    });
  });

  /* Click en el overlay (fuera del drawer) */
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeDrawers();
  });

  /* Botones de cerrar */
  overlay.querySelectorAll('.drawer-close').forEach(function (btn) {
    btn.addEventListener('click', closeDrawers);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeDrawers();
    }
  });

  window.openDrawer = openDrawer;
  window.closeDrawers = closeDrawers;
});
