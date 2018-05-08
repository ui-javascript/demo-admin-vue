import '@/style/page/router/Bar'

let template = 
`
<div class="page_router_bar">
  <h2>{{ msg }}</h2>
  <ms-router-view />
</div>
`

export default {
  name: 'ms-router-bar',
  template,
  data () {
    return { msg: 'This is Bar!' }
  }
}
