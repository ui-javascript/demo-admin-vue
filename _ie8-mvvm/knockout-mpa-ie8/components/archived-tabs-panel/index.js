const { parseProps } = require('../utils/ko-component-utils')

const props = {
  name: String,
  disabled: {
    type: Boolean,
    observable: true
  },
}

/**
 * tab - content - pane
 */
const ViewModel = function (params) {
  let self = this;
  parseProps(props, params, self)
  self.active = (parent) => {
    const currentName = parent.currentName()
    return currentName === self.name
  }
}

ko.components.register('k-tab-pane', {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});