const { parseProps } = require('../utils/ko-component-utils.js');
require('../archived-breadcrumb-item');

/**
 * 导航 - 面包屑
 */
const props = {
  separator: {
    type: String,
    default: '/',
  }
};

function createViewModel(params){
  let viewModel = {};
  parseProps(props, params, viewModel);
  return viewModel;
}

ko.components.register('k-archived-breadcrumb', {
  viewModel: {
    createViewModel: createViewModel
  },
  template: require('./template.html')
});