const { parseProps, bindingExtends } = require('../utils/ko-component-utils')

const props = {}

const init = function () {
}

const ViewModel = function (params, componentInfo) {
  let self = this;

  parseProps(props, params, self)
  setTimeout(() => {
    bindingExtends(componentInfo, self)
    init.bind(self)()
  }, 0)
}

/**
 * 导航 - 面包屑
 */

ko.components.register('k-breadcrumb', {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});