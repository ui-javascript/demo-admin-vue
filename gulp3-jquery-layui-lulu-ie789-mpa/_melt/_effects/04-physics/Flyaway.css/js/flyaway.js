function animate(x) {
    $('#demo').removeClass('float shadow').addClass('flyaway ' + x).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('#demo').addClass('shadow float').removeClass('flyaway ' + x);
    });
};

$(document).ready(function() {
    $('.animate').click(function(e) {
        e.preventDefault();
        var anim = $('.select').val();
        animate(anim);
    });
});
