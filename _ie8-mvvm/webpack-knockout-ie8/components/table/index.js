const { parseProps, bindingExtends } = require('../utils/ko-component-utils')
require('../table-th')
require('../table-td')

const props = {
  showCheck: {
    type: Boolean,
    'default': false,
  },
  checkList: {
    type: Array,
    'default': []
  },
  list: {
    type: Array
  },
  colspan: {
    type: Number
  }
}
const ViewModel = function (params, componentInfo) {
  let self = this;
  let list = params.list();
  let tmpList = []
  for (let i = 0; i < list.length; i++) {
    list[i].checked = ko.observable(false)
    tmpList.push(list[i])
  }
  params.list(tmpList)
  parseProps(props, params, self);
  bindingExtends(componentInfo, self)
  self.checkAll = ko.pureComputed({
    read: function () {
      return self.list().length && self.checkList().length === self.list().length
    },
    write: function (val) {
      let j = 0;
      const arr = []
      if (val) {
        for (let i = 0; i < self.list().length; i++){
          arr.push(j++)
        }
      }
      self.checkList(arr)
    },
    owner: self
  })
}
/**
 * 表格
 */

ko.components.register('k-table', {
  viewModel: {
    createViewModel: function (params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});