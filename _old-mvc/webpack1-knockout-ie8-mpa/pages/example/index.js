require('../../app-bootstrap.js');

require('./style.scss');

var viewModel = ko.mapping.fromJS(require('./data.json'));

// 标记radio选中的value
viewModel.radioChecked = ko.observable('1')
// 标记多选框选中
viewModel.checkboxChecked = ko.observable(true)

// 下拉框
viewModel.options = ko.observableArray([{value: 1, label: 'a'}, {value: 2, label: 'b'}])
viewModel.selectedValue3 = ko.observable(1)

// 日期
viewModel.date1 = ko.observable('')
viewModel.date2 = ko.observable('')
//viewModel.date5 = ko.observable('')

//loading
viewModel.show2 = ko.observable(false)

$(document).ready(function() {
  ko.applyBindings(viewModel);
});