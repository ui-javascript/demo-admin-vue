import Nerv from 'nervjs'
// import { Component, createElement } from 'nervjs'
// CSS Modules
// http://www.ruanyifeng.com/blog/2016/06/css_modules.html
import style from "assets/css/test.css"
import img from '@/assets/images/super.jpg'

class Hello extends Nerv.Component {
  constructor() {
    super(...arguments)
    this.state = {
      message: 'nerv.js',
      img: img
    }
  }

  render() {
    return (
      <div class={style.hello}>
        Hello, {this.state.message}

        <div>
          <img src={this.state.img} alt=""/>
        </div>

      </div>
    )
  }
}

export default Hello
