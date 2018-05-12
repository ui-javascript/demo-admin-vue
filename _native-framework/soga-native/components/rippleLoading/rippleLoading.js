var topNum = 100;
var timer = setInterval(function () {
    document.querySelector('.turn').style.top = topNum + '%';
    topNum -= 0.05;
    var text = parseInt(100 - topNum) + "%";
    document.querySelector('.tips').textContent = text;
    if (topNum <= 0) {
        document.querySelector('.turn').style.top = '0%';
        clearInterval(timer);
    }
}, 1);