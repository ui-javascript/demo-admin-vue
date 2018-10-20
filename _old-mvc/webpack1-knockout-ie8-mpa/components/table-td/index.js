const {
  parseProps
} = require('../utils/ko-component-utils')

const props = {
  prop: {
    type: String
  },
  model: {
    type: Object
  },
  filter: {
    type: Function,
    'default': function (data) {
      return data.model[data.prop]
    }
  }
}

/**
 * table-td
 */
const ViewModel = function(params) {
  const self = this
  parseProps(props, params, self);
  self.text = ko.computed(function () {
    return self.filter(self)
  })
}

ko.components.register('k-table-td', {
  viewModel: {
    createViewModel: function (params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});