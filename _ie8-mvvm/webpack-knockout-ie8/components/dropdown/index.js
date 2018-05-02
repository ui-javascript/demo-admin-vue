import ko from 'knockout'

const ViewModel = function() {
  let self = this
  self.countries = ['Japan', 'Bolivia', 'New Zealand']
  self.selectedCountry = ko.observable('Bolivia')
}

ko.components.register('dropdown', {
  viewModel: {
    createViewModel(params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});
