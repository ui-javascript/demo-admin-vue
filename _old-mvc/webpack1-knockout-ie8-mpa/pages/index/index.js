
require('./style.scss');

require('components/header');
require('components/footer');

var viewModel = ko.mapping.fromJS(require('./data.json'));

$(document).ready(function() {
  ko.applyBindings(viewModel);
});