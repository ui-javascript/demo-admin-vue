var FullPage = require('../../pages/FullPage.san');
var Hello = require('../../pages/Hello.san');
var Hi = require('../../pages/Hi.san');
var sanRouter = require('san-router');
var router = sanRouter.router;
var Link = sanRouter.Link;

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
router.start();
