const {
  parseProps
} = require('../utils/ko-component-utils')

const props = {
  name: {
    type: String
  },
}

/**
 * tab - nav-item
 */

const ViewModel = function (params) {
  let self = this;
  parseProps(props, params, self)

  // computed
  self.classObj = ($parent) => {
    const currentName = $parent.currentName()
    const ret = {
      'is-active': currentName === self.name
    }
    return ret
  }
}

ko.components.register('k-tab-item', {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});