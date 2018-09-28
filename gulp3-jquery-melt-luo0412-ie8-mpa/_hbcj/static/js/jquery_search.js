function changeUrl(_this) {
    // var year = jQuery(_this).val();
    var year = $(_this).val();
    year = year.toString();
    if (year != "各省工程造价网站" && year != "相关链接") {
        window.open(year);
    }
}
