var FullPage = require('../../pages/FullPage.san');
var Hello = require('../../pages/Hello.san');
var Hi = require('../../pages/Hi.san');

router.add({
    rule: '/',
    Component: Hello,
    target: '#app',
});
router.add({
    rule: '/a',
    Component: Hi,
    target: '#app'
})
router.listen(function (e) {
    console.log(e)
})
// router.setMode('html5')
router.start();
