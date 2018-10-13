const { parseProps } = require('../utils/ko-component-utils')

const props = {
  label: {
    type: String
  },
  width: {
    type: Number
  }
}

/**
 * table-th
 */
const ViewModel = function(params){
  parseProps(props, params, this)
}

ko.components.register('k-table-th', {
  viewModel: {
    createViewModel: function (params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});