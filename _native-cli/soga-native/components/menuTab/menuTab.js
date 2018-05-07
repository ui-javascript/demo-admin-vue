+function () {

    var tabs = document.querySelector('.menuTabs>.menuTabs-inner');
    var con = document.querySelector('.menuTab-content');

    function addPage(url, name) {
        function tabClick(e) {
            var tab = this.parentNode;
            var parent = tab.parentNode;
            var items = con.querySelectorAll('.menuTab-item');
            var atab = tabs.querySelectorAll('a');
            items.forEach(function (item, index) {
                if (item.tabName == tab.tabName) {
                    item.parentNode.removeChild(item);
                    parent.removeChild(tab);
                    var nextTab = con.lastElementChild;
                    var nextItem = tabs.lastElementChild;
                    U.addClass(nextTab, 'active');
                    U.addClass(nextItem, 'active');
                }
            });
            move();
            if (e.stopPropagation) {
                e.stopPropagation();
            } else if (e.cancelBubble) {
                e.cancelBubble = true;
            }
        }

        function getItemWidth() {
            var atab = tabs.querySelectorAll('a');
            var width = 0;
            for (var i = 0; i < atab.length; i++) {
                width += atab[i].offsetWidth;
            }
            return width;
        }

        function move() {
            var width = getItemWidth();
            var tWidth = document.querySelector('.menuTabs').offsetWidth;
            if (width >= tWidth) {
                U.setTransform(tabs, 'translate(-' + (width - tWidth) + 'px, 0)');
            } else {
                U.setTransform(tabs, 'translate(0px, 0)');
            }
        }

        // 请求页面
        U.ajax({
            url: url,
            type: 'GET',
            success: function (res) {
                var items = con.querySelectorAll('.menuTab-item');
                items.forEach(function (item, index) {
                    U.removeClass(item, 'active');
                });
                var atab = tabs.querySelectorAll('a');
                atab.forEach(function (item, index) {
                    U.removeClass(item, 'active');
                });
                var item = document.createElement('div');
                item.className = 'menuTab-item';
                var page = document.createElement('div');
                page.innerHTML = res;
                var ipage = page.querySelector('.menuTab-page');
                if (ipage) {
                    item.innerHTML = ipage.outerHTML;
                    item.tabName = url;
                    con.append(item);
                    U.addClass(item, 'active');
                    var tab = document.createElement('a');
                    U.addClass(tab, 'menuTab');
                    U.addClass(tab, 'active');
                    tab.tabName = url;
                    tab.innerHTML = name + ' <i class="ion-ios-close menuTab-close"></i>';
                    tabs.append(tab);
                    move();
                    U.addEvent(tab.querySelector('.menuTab-close'), 'click', tabClick);
                    var pageName = ipage.getAttribute('data-page');
                    if (pageName == 'gallary') {
                        var width = 400;
                        var height = 178;
                        var mySlide = new Slide3D('.slide', {
                            width: width,
                            height: height,
                            effect: 'slide',
                            paginationClickable: true,
                            pagination: true, // 是否添加分页器
                            loop: true, //是否循环，除“slide”外，其他动画默认循环
                            autoplay: 2000,
                            autoplayDisableOnInteraction: false
                        });
                    } else if (pageName == 'calendar') {
                        var calendar = new NCalendar('.sg-calendar', {
                            width: 500, // 日历宽
                            height: 600, // 日历高
                            sunFirst: true, // 是否设置星期天为第一天，默认为false
                            onChange: function (data) { //监听日期变化
                                console.log(data); // data为YYYY-MM-DD格式的日期
                            }
                        });
                    } else if (pageName == 'tabs') {
                        U.addScript(['components/tab/tab.js'], function () {
                            new Tab().pageInit();
                        });
                    } else if (pageName == 'editor') {
                        var editor = new RichEditor("#editor", {
                            width: 900,
                            height: 400,
                            toolBg: "#eee",
                            buttons: {
                                heading: {
                                    title: "标题",
                                    icon: "\uf1dc"
                                },
                                code: {
                                    title: "引用",
                                    icon: "\uf10d"
                                },
                                bold: {
                                    title: "加粗",
                                    icon: "\uf032"
                                },
                                italic: {
                                    title: "斜体",
                                    icon: "\uf033"
                                },
                                underline: {
                                    title: "下划线",
                                    icon: "\uf0cd"
                                },
                                strikethrough: {
                                    title: "删除线",
                                    icon: "\uf0cc"
                                },
                                foreColor: {
                                    title: "字体颜色",
                                    icon: "\uf1fc"
                                },
                                backColor: {
                                    title: "背景色",
                                    icon: "\uf043"
                                },
                                justifyLeft: {
                                    title: "居左",
                                    icon: "\uf036"
                                },
                                justifyCenter: {
                                    title: "居中",
                                    icon: "\uf037"
                                },
                                justifyRight: {
                                    title: "居右",
                                    icon: "\uf038"
                                },
                                justifyFull: {
                                    title: "两端对齐",
                                    icon: "\uf039"
                                },
                                insertOrderedList: {
                                    title: "有序列表",
                                    icon: "\uf0cb"
                                },
                                insertUnorderedList: {
                                    title: "无序列表",
                                    icon: "\uf0ca"
                                },
                                indent: {
                                    title: "indent",
                                    icon: "\uf03c"
                                },
                                outdent: {
                                    title: "outdent",
                                    icon: "\uf03b"
                                },
                                createLink: {
                                    title: "链接",
                                    icon: "\uf0c1"
                                },
                                insertImage: {
                                    title: "插入图片",
                                    icon: "\uf03e"
                                },
                                emotion: {
                                    title: "表情",
                                    icon: "\uf118"
                                },
                                fullscreen: {
                                    title: "全屏",
                                    icon: "\uf066"
                                },
                                save: {
                                    title: "保存",
                                    icon: "\uf0c7",
                                    click: function () {
                                        console.log(editor.getText());
                                    }
                                }
                            }
                        });
                    } else if (pageName == 'range') {
                        U.addScript(['components/range/range.js'], function () {
                            var range = new LYRange('.range-field', {
                                onChange: function (range) {
                                    console.log(range.value);
                                }
                            });
                            var range2 = new LYRange('.custom-range', {
                                type: 2,
                                min: 10,
                                max: 100,
                                defaultValue: 20,
                                onChange: function (range) {
                                    console.log(range.value);
                                }
                            });
                            var range3 = new LYRange('.custom-range2', {
                                type: 2,
                                min: -10,
                                max: 80,
                                defaultValue: 70,
                                onChange: function (range) {
                                    console.log(range.value);
                                }
                            });
                        });
                    } else if (pageName == 'loading') {
                        var topNum = 100;
                        var timer = setInterval(function () {
                            // @FIXME
                            if (document.querySelector('.turn')) {
                                document.querySelector('.turn').style.top = topNum + '%';
                                topNum -= 0.05;
                                var text = parseInt(100 - topNum) + "%";
                                document.querySelector('.tips').textContent = text;
                                if (topNum <= 0) {
                                    document.querySelector('.turn').style.top = '0%';
                                    clearInterval(timer);
                                }
                            } else {
                                clearInterval(timer);
                            }

                        }, 1);
                    } else if (pageName == 'linkageSelector') {
                        U.addScript(['components/linkageSelector/cityData.js', 'components/linkageSelector/linkageSelector.js'], function () {
                            var nselector = new NSelector('.selector-box', {
                                data: city,
                                onChange: function (data) {
                                    console.log(data);
                                }
                            });
                            var nselector2 = new NSelector('.nselect', {
                                data: city,
                                custom: true,
                                onChange: function (data) {
                                    console.log(data);
                                }
                            });
                        });
                    }
                }
            },
            error: function (err) {

            }
        });
    };
    var menuTabA = document.querySelectorAll('a.tab-link');
    var linkClick = function (e, target) {
        var that = target || this;
        if (e.preventDefault) {
            e.preventDefault();
        } else if (e.returnValue) {
            e.returnValue = false;
        }
        ;
        var url = that.getAttribute('href').trim();
        var name = that.getAttribute('data-name');
        if (url) {
            var items = con.querySelectorAll('.menuTab-item');
            var isExited = false;
            var atab = tabs.querySelectorAll('a');
            atab.forEach(function (item, index) {
                U.removeClass(item, 'active');
                if (item.tabName == url) {
                    U.addClass(item, 'active');
                }
            });
            items.forEach(function (item, index) {
                U.removeClass(item, 'active');
                if (url == item.tabName) {
                    U.addClass(item, 'active');
                    isExited = true;
                }
            });
            if (!isExited) {
                addPage(url, name);
            }
        }
    };
//	for(var i = 0; i < menuTabA.length; i++) {
//		U.addEvent(menuTabA[i], 'click', linkClick, false);
//	};

    function aClick(e) {
        U.eventBroker(e, 'tab-link', linkClick);
    }

    U.addEvent(document, 'click', aClick);
    var tabClick = function (e) {
        var items = con.querySelectorAll('.menuTab-item');
        var target = e.target;
        while (target) {
            if (U.hasClass(target, 'menuTab')) {
                var atab = tabs.querySelectorAll('a');
                atab.forEach(function (item, index) {
                    U.removeClass(item, 'active');
                });
                items.forEach(function (item, index) {
                    U.removeClass(item, 'active');
                    if (target.tabName == item.tabName) {
                        U.addClass(item, 'active');
                    }
                });
                target.classList.add('active');
            } else if (target.classList.contains('menuTabs')) {
                break;
            }
            target = target.parentNode;
        }
    };
    U.addEvent(tabs, 'click', tabClick);
}();