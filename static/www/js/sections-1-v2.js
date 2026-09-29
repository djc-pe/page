/* Anuncio bajo el header. Se renderiza con una probabilidad para no
   saturar al usuario en la primera visita. */
(function () {
  var CLIENT = 'ca-pub-3775900744037301';
  var SLOT = '7314651297';
  var PROBABILITY = 0.5;

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
    var main = document.querySelector('main.content') || document.querySelector('main');
    if (!main) return;
    if (document.querySelector('div[data-ad="top"]')) return;
    if (Math.random() > PROBABILITY) return;

    var wrap = document.createElement('div');
    wrap.dataset.ad = 'top';
    wrap.style.marginBottom = '24px';
    wrap.appendChild(buildAd());

    main.prepend(wrap);

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('[ads] no se pudo cargar el anuncio superior', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
