import Vue from 'vue'
import SvgIcon from '../_adminCheck/components/SvgIcon/index' // svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
