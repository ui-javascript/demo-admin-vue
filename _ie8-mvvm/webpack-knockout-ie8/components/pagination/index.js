
const { parseProps, bindingExtends, getWrapper } = require('../utils/ko-component-utils')
require('../select')

const props = {
  clazz: {
    type: String,
  },
  onSizeChange: { // 页面显示页数变化了
    type: Function,
  },
  onCurrentChange: { // 当前第几页变化了
    type: Function
  },
  pageSizes: { // 每页显示页面可选项
    type: Array,
    'default': [20, 50, 100]
  },
  currentPage: { // 当前第几页
    type: Number,
    observable: true
  },
  pageSize: { // 每页记录数
    type: Number,
    observable: true
  },
  total: { // 总记录数
    type: Number,
    observable: true
  },
  layout: {
    type: String,
    'default': 'Total,Select,Pre,Pager,Next,Jump'
  }
}

const Pager = function (currentPage, pageSize, total) {
  let self = this
  self.currentPage = currentPage
  self.pageSize = pageSize
  self.total = total
  self.pageCount = ko.observable(parseInt((total() + pageSize() - 1) / pageSize()))

  self.pages = ko.observableArray([])

  self.detectChange = ko.pureComputed(() => {
    return [self.currentPage(), self.pageSize(), self.total()].join('_')
  })

  self.detectChange.subscribe(() => {
    self.calculate()
  })
  self.calculate()
}

Pager.prototype.reset = function () {
  let self = this
  self.pageCount(0)
  self.pages(null)
}

Pager.prototype.calculate = function () {
  let self = this
  let currentPage = self.currentPage()
  const pageSize = self.pageSize()
  const total = self.total()

  const gutter = 3
  const pages = []

  if (total < 1 || currentPage < 1 || pageSize < 1) {
    self.reset()
    return
  }

  // 当对于当前页， 前 gutter 后 gutter - 1，到头相对前后补齐
  const pageCount = parseInt((total + pageSize - 1) / pageSize)

  if (currentPage > pageCount) {
    currentPage = pageCount
  }

  let from = Math.min(currentPage + gutter - 1, pageCount)
  let to = Math.max(currentPage - gutter, 1)
  let offset = 0
  if (from === pageCount) {
    offset = gutter - (pageCount - currentPage)
  }
  while (offset-- > 0) {
    if (to > 1) {
      to--
    } else {
      break
    }
  }
  if (to === 1) {
    offset = gutter - (currentPage - to + 1)
  }
  while (offset-- > 0) {
    if (from < pageCount) {
      from++
    } else {
      break
    }
  }

  for (let i = from; i >= to; i--) {
    pages.push({
      pageNo: i,
      active: currentPage === i
    })
  }
  pages.reverse()

  self.pageCount(pageCount)
  self.currentPage(currentPage)
  self.pages(pages)
}

const components = ['Total', 'Select', 'Pre', 'Pager', 'Next', 'Jump']

const ViewModel = function (params, componentInfo) {
  let self = this;
  parseProps(props, params, self)
  bindingExtends(componentInfo, self)

  const layout = self.layout.split(',')
  for (let i = 0; i < components.length; i++){
    let component = components[i]
    //this[_.camelCase('show ' + component)] = layout.indexOf(component) > -1
    for (let j = 0; j < layout.length; j++) {
      if (layout[j] === component) {
        self['show' + component] = true
      }
    }
  }

  const css = {}
  let clazzs = self.clazz.trim().split(/\s+/)
  for (let i = 0; i < clazzs.length; i++){
    css[clazzs[i]] = true
  }
  self.extraClazz = css

  if (!self.currentPage()) {
    self.currentPage(1)
  }

  self.jumpPage = ko.observable(self.currentPage())

  if (!self.pageSize()) {
    self.pageSize(self.pageSizes[0])
  }

  self.pager = new Pager(self.currentPage, self.pageSize, self.total)

  self.totalDesc = ko.pureComputed(() => {
    return `共 ${self.pager.pageCount()} 页 / ${self.total()} 条`
  })

  self.jumpPage.subscribe((newValue) => {
    const backup = newValue
    newValue = parseInt(newValue)
    const valid = !isNaN(newValue) && newValue >= 1 && newValue <= self.pager.pageCount()
    if (!valid) {
      self.jumpPage(self.currentPage())
    } else if (newValue === self.currentPage()) {
      if (backup !== newValue + '') {
        self.jumpPage(self.currentPage())
      }
      return
    } else {
      self.currentPage(newValue)
    }
  })

  self.pageSize.subscribe(newValue => {
    self.pager.pageSize(newValue)
  })

  self.currentPage.subscribe(newValue => {
    self.pager.currentPage(newValue)
    self.jumpPage(newValue)
  })

  self.total.subscribe(newValue => {
    self.pager.total(newValue)
  })

  self.$componentRoot.on('click', '.button-jump', e => {
  }).on('click', '.number', e => {
    const pageNo = getWrapper(e.target || e.srcElement, '.number').text() * 1
    self.currentPage(pageNo)
  }).on('click', '.btn-prev', () => {
    const currentPage = self.currentPage()
    if (currentPage > 1) {
      self.currentPage(currentPage - 1)
    }
  }).on('click', '.btn-next', () => {
    const currentPage = self.currentPage()
    if (currentPage < self.pager.pageCount()) {
      self.currentPage(currentPage + 1)
    }
  })
  window.vm = self
}

/**
 * 分页控件 - Pagination
 */

ko.components.register('k-pagination', {
  viewModel: {
    createViewModel: function (params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});