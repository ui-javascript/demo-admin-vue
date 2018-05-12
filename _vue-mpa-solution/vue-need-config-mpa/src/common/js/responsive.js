!function (w) {
  var doc = w.document, de = doc.documentElement, dpr = w.devicePixelRatio || 1, evt = 'orientationchange' in w ? 'orientationchange' : 'resize';
  var fn = function () {
    var vw = de.getBoundingClientRect().width || 360;
    (dpr == 1 || vw > 720) && (vw = 720), de.style.fontSize = vw / 7.2 + 'px'
  };
  de.setAttribute('data-dpr', dpr), doc.addEventListener && (w.addEventListener(evt, fn, false))
  doc.readyState !== 'complete' && (doc.addEventListener('DOMContentLoaded', function () { setTimeout(fn) }, false))
}(window)
