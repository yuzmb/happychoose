import App from '../App'
//下面写法是路由懒加载
//需要用到 babel-plugin-syntax-dynamic-import 插件
//https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
const home = () => import('../page/home/index')
const item = () => import('../page/item/index')
const score = () => import('../page/score/index')

export default [{
  path: '/',
  component: App,
  children: [{
    path: '/happychoose',
    name: 'home',
    component: home
  }, {
    path: '/happychoose/item',
    name: 'item',
    component: item
  }, {
    path: '/happychoose/score',
    name: 'score',
    component: score
  }]
}]