(function (window, document) {
    var w = window.innerWidth;
    var cnt = Math.ceil(w/12 * 2);
    var c = document.getElementById('container');
    var divs = document.createDocumentFragment();
    var i = 0;
    var div;
    var delay;
    var animDelay = ('animationDelay' in document.documentElement.style) ? 'animationDelay' : 'webkitAnimationDelay';

    for (i; i < cnt; ++i) {
      div = document.createElement('div');
      delay = (i - cnt) * 0.1;
      div.style[animDelay] = delay + 's,' + delay / 2 + 's';
      divs.appendChild(div);
    }

    c.appendChild(divs);

})(window, document);