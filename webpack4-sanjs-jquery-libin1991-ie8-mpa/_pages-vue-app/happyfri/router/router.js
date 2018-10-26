import App from '../App'



export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('src/page/home')), 'home')
    }, {
        path: '/item',
        component: r => require.ensure([], () => r(require('src/page/item')), 'item')
    }, {
        path: '/score',
        component: r => require.ensure([], () => r(require('src/page/score')), 'score')
    }]
}]