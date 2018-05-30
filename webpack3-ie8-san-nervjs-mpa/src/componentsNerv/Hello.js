import Nerv from 'nervjs'
// import { Component, createElement } from 'nervjs'

class Hello extends Nerv.Component {
    constructor () {
        super(...arguments)
        this.state = {
            message: 'nerv'
        }
    }

    render () {
        return (
            <div>
                Hello, {this.state.message}
        </div>
    )
    }
}

export default Hello
