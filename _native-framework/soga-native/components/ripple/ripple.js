!function () {

    function ripple(event, $this) {
        event = event || window.event;
        var x = event.pageX || document.documentElement.scrollLeft + document.body.scrollLeft + event.clientX;
        var y = event.pageY || document.documentElement.scrollTop + document.body.scrollTop + event.clientY;
        var wx = $this.offsetWidth;
        x = x - $this.offsetLeft - wx / 2;
        y = y - $this.offsetTop - wx / 2;
        var ripple = document.createElement('span');
        ripple.className = 'ripple';
        var firstChild = $this.firstChild;
        if (firstChild) {
            $this.insertBefore(ripple, firstChild);
        } else {
            $this.appendChild(ripple);
        }
        ripple.style.cssText = 'width: ' + wx + 'px;height: ' +
            wx + 'px;top: ' + y + 'px;left: ' + x + 'px';
        ripple.classList.add('rippleEffect');
        U.animationEnd(ripple, function () {
            this.parentNode.removeChild(ripple);
        });
    };

    var btn = document.querySelectorAll('.ripple-effect');
    for (var i = 0; i < btn.length; i++) {
        U.addEvent(btn[i], 'click', function (e) {
            ripple(e, this);
        });
    }
}();