import Nerv from 'nervjs'
import Hello from '@componentsNerv/Hello'

// import CustomTextInput from "@componentsNerv/form/CustomTextInput"

// Nerv.render(<CustomTextInput />, document.getElementById('app'))

class App extends Nerv.Component {
  render() {
    return <Hello />;
  }
}

Nerv.render(<App />, document.querySelector('#app'));

