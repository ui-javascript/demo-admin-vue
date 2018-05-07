!function () {
    var dropdown = document.querySelectorAll('.dropdown');

    function openDropdown() {
        var d = this.parentNode;
        var classList = d.classList;

        if (classList.contains('open')) {
            classList.remove('open');
        } else {
            classList.add('open');
        }
    }

    function closeDropdown(e) {
        var target = e.target;

        while (target) {
            if (target && target.nodeName == '#document') {
                [].forEach.call(dropdown, function (d) {
                    d.classList.remove('open');
                });
            } else if (target.classList.contains('dropdown')) {
                break;
            }
            target = target.parentNode;
        }
    }

    for (var i = 0; i < dropdown.length; i++) {
        U.addEvent(dropdown[i].firstElementChild, 'click', openDropdown, false);
    }

    U.addEvent(document, 'click', closeDropdown, false);
}();
