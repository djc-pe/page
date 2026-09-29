/* Anuncios intercalados entre secciones de contenido largo.
   Regla: un anuncio cada CHAR_SPACE caracteres de texto, saltando secciones
   cortas y la última (para no dejar un anuncio pegado al footer). */
(function () {
  var CLIENT = 'ca-pub-3775900744037301';
  var SLOT = '8296560475';
  var CHAR_SPACE = 2200;
  var MIN_SECTION_CHARS = 600;

  function buildAd() {
    var ins = document.createElement('ins');
    ins.className = 'adsbygoogle';
    ins.style.display = 'block';
    ins.setAttribute('data-ad-client', CLIENT);
    ins.setAttribute('data-ad-slot', SLOT);
    ins.setAttribute('data-ad-format', 'auto');
    ins.setAttribute('data-full-width-responsive', 'true');
    return ins;
  }

  function init() {
    var sections = Array.prototype.slice.call(
      document.querySelectorAll('main .section:not([data-no-ad])')
    );
    if (sections.length < 2) return;

    var budget = sections.length - 1;
    var sinceLastAd = 0;

    sections.forEach(function (section, i) {
      if (i >= budget) return;
      if (section.querySelector('[data-ad]')) return;

      var chars = (section.textContent || '').trim().length;
      if (chars < MIN_SECTION_CHARS) return;

      sinceLastAd += chars;
      if (sinceLastAd < CHAR_SPACE) return;

      var wrap = document.createElement('div');
      wrap.dataset.ad = 'inline';
      wrap.className = 'container';
      wrap.style.paddingBlock = '8px';
      wrap.appendChild(buildAd());
      section.insertAdjacentElement('afterend', wrap);

      sinceLastAd = 0;
    });

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('[ads] error al registrar anuncios intercalados', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
