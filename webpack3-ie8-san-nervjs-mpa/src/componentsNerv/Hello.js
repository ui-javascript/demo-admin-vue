import Nerv from 'nervjs'

// CSS Modules 用法教程
// http://www.ruanyifeng.com/blog/2016/06/css_modules.html
import style from "assets/css/test.css"
// import { Component, createElement } from 'nervjs'

class Hello extends Nerv.Component {
  constructor() {
    super(...arguments)
    this.state = {
      message: 'nerv'
    }
  }

  render() {
    return (
      <div class={style.hello}>
        Hello, {this.state.message}
      </div>
    )
  }
}

export default Hello
