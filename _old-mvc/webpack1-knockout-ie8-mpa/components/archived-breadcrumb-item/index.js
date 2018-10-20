const { parseProps } = require('../utils/ko-component-utils.js');

/**
 * 导航 - 面包削
 */
const props = {
  link: String, // 跳转链接
  replace: Boolean, // 不打开新窗口
}

function createViewModel(params){
  let viewModel = {};
  parseProps(props, params, viewModel);
  return viewModel;
}
  
ko.components.register('k-breadcrumb-item', {
  viewModel: {
    createViewModel: createViewModel
  },
  template: require('./template.html')
});