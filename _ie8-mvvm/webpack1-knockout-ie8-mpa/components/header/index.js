require('./style.scss');

function createViewModel(params) {
  var viewModel = ko.mapping.fromJS(require('./data.json'));
  
  viewModel.data = params;

  return viewModel;
}

ko.components.register('global-header', {
  viewModel: {
    createViewModel: createViewModel
  },
  template: require('./template.html')
});