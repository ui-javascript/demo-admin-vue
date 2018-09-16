require('../../app-bootstrap.js');

require('./style.scss');

var viewModel = ko.mapping.fromJS(require('./data.json'));

// 日期
viewModel.date1 = ko.observable()
viewModel.date2 = ko.observable()
viewModel.date5 = ko.observable()

$(document).ready(function() {
  ko.applyBindings(viewModel);
});