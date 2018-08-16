<template>
    <div class="list">
        <!-- <el-col :span="24" class='actions-top'>
            <el-button type='danger' icon='delete'
                :disabled='batch_flag'
                @click='onDeleteArticle(true)'>删除选中</el-button>

            <el-form :inline="true" :model='search_data' class="demo-form-inline">
                <el-form-item>
                    <el-input placeholder="标题" v-model='search_data.title'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click='onSearch'>查询</el-button>
                </el-form-item>
            </el-form>
        </el-col> -->

        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
          <el-form :inline="true">
            <el-form-item>
              <el-input  placeholder="标题"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">新增</el-button>
            </el-form-item>
          </el-form>
        </el-col>

        <!-- <el-table border style="width: 100%" align='center'
            :data="article_list"
            @selection-change='onSelectionChange'>
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                :prop="fields.create_time.info.prop"
                :label="fields.create_time.info.label"
                :align="fields.create_time.style.align"
                :width="fields.create_time.style.width"
                :sortable="fields.create_time.info.sortable">
            </el-table-column>
            <el-table-column
                :prop="fields.title.info.prop"
                :label="fields.title.info.label"
                :align="fields.title.style.align"
                :sortable="fields.title.info.sortable">
            </el-table-column>
            <el-table-column
                :prop="fields.status.info.prop"
                :label="fields.status.info.label"
                :align="fields.status.style.align"
                :width="fields.status.style.width"
                :sortable="fields.status.info.sortable"
                :formatter="formatterStatus"
                :filters="fields.status.filter.list"
                :filter-method="filterStatus"
                :filter-multiple="fields.status.filter.multiple">
            </el-table-column>
            <el-table-column
                label="操作"
                width="160"
                :context="_self">
                <template scope='scope'>
                    <el-button
                        type="info"
                        icon='view'
                        size="mini"
                        @click='onSelectArticle(scope.row)'></el-button>
                    <el-button
                        type="info"
                        icon='edit'
                        size="mini"
                        @click='onEditArticle(scope.row)'></el-button>
                    <el-button
                        type="danger"
                        icon='delete'
                        size="mini"
                        @click='onDeleteArticle(scope.row,scope.$index,article_list)'></el-button>
                </template>
            </el-table-column>
        </el-table> -->

        <el-table border style="width: 100%" align='center'
            :data="article_list"
            @selection-change='onSelectionChange'>
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                :prop="fields.create_time.info.prop"
                :label="fields.create_time.info.label"
                :align="fields.create_time.style.align"
                :width="fields.create_time.style.width"
                :sortable="fields.create_time.info.sortable"
                width="130">
            </el-table-column>
            <el-table-column
                :prop="fields.title.info.prop"
                :label="fields.title.info.label"
                :align="fields.title.style.align"
                :sortable="fields.title.info.sortable">
            </el-table-column>
            <el-table-column
                :prop="fields.content.info.prop"
                :label="fields.content.info.label"
                :align="fields.content.style.align"
                :sortable="fields.content.info.sortable"
                width="300">
            </el-table-column>
            <el-table-column
                :prop="fields.status.info.prop"
                :label="fields.status.info.label"
                :align="fields.status.style.align"
                :width="fields.status.style.width"
                :sortable="fields.status.info.sortable"
                :formatter="formatterStatus"
                :filters="fields.status.filter.list"
                :filter-method="filterStatus"
                :filter-multiple="fields.status.filter.multiple">
            </el-table-column>
            <el-table-column
                label="操作"
                width="160"
                :context="_self">
                <template scope='scope'>
                    <el-button
                        type="info"
                        icon='view'
                        size="mini"></el-button>
                    <el-button
                        type="info"
                        icon='edit'
                        size="mini"></el-button>
                    <el-button
                        type="danger"
                        icon='delete'
                        size="mini"></el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- <el-col :span="24" class='btm-action'>
            <el-pagination
                v-if='paginations.total>0'
                class='pagination'
                :page-sizes="paginations.page_sizes"
                :page-size="paginations.page_size"
                :layout="paginations.layout"
                :total="paginations.total"
                :current-page='paginations.current_page'
                @current-change='onChangeCurrentPage'
                @size-change='onChangePageSize'>
            </el-pagination>
        </el-col> -->

        <el-col :span="24" class="toolbar">
          <el-button type="danger"  :disabled="this.sels.length===0">批量删除</el-button>
          <el-pagination layout="prev, pager, next" :page-size="20" :total="total" style="float:right;">
          </el-pagination>
        </el-col>

        <el-dialog size="small"
            :title="dialog.article_info.title"
            v-model="dialog.show"
            @close='onCloseView'>
            <div v-html="dialog.article_info.content"></div>
            <!--  <span  slot="footer" class="dialog-footer">
                <el-button @click="dialog.show = false">取 消</el-button>
                <el-button type="primary" @click="dialog.show = false">确 定</el-button>
            </span> -->
        </el-dialog>
    </div>
</template>

<script>
module.exports = {
    name: 'article-list',
    data() {
        return {

            errors: [],
            total: 0,
            page: 1,
            sels: [],  // 列表选中列
            listLoading: false,

            // article_list: [],
            article_list:
            [{
              "id": 1,
              "create_time": '2017-05-10',
              "status": 1,
              "title": "诈骗信息防范提示",
              "content": "据最近新闻报道,有一批不法分子..."
              }, {
                "id": 2,
                "create_time": '2017-05-11',
                "status": 2,
                "title": "诈骗信息防范提示2",
                "content": "据最近新闻报道,有有一批不法分子..."
              }, {
                "id": 3,
                "create_time": '2017-05-12',
                "status": 1,
                "title": "小区安全守则",
                "content": "尊境的用户，感谢您来到我们的社区..."
            }],

            batch_id: '', //批量删除时这是多个用逗号隔开的id字符串
            batch_flag: true, //符合批量删除为true,否则为false

            //需要给分页组件传的信息
            paginations: {
                current_page: 1,
                total: 0,
                page_size: 12,
                page_sizes: [3, 9, 12, 24],
                layout: "total, sizes, prev, pager, next, jumper"
            },

            search_data: {
                title: ''
            },

            //详情弹框信息
            dialog: {
                show: false,
                article_info: {}
            },


            fields: {
                status: {
                    info: {
                        prop: 'status',
                        label: '状态',
                        sortable: true
                    },
                    filter: {
                        list: [{
                            text: '启用',
                            value: 1
                        }, {
                            text: '禁用',
                            value: 2
                        }],
                        multiple: false
                    },
                    style: {
                        width: '130',
                        align: 'center'
                    }
                },
                create_time: {
                    info: {
                        prop: 'create_time',
                        label: '日期',
                        sortable: true
                    },
                    filter: {

                    },
                    style: {
                        width: '260',
                        align: 'center'
                    }
                },
                title: {
                    info: {
                        prop: 'title',
                        label: '讯息标题',
                        sortable: true
                    },
                    filter: {

                    },
                    style: {
                        width: '150',
                        align: 'center'
                    }
                },
                content: {
                    info: {
                        prop: 'content',
                        label: '讯息内容',
                        sortable: true
                    },
                    filter: {

                    },
                    style: {
                        width: '150',
                        align: 'center'
                    }
                }
            }
        }
    },
    methods: {
        /**
         * 格式化性别
         */
        formatterSex(item) {
            return item.sex == 1 ? '男' : '女';
        },

        /**
         * 格式化状态
         */
        formatterStatus(item) {
            return item.status == 1 ? '启用' : '禁用';
        },

        filterSex(value, item) {
            return item.sex == value;
        },
        filterStatus(value, item) {
            return item.status == value;
        },


        /**
         * 表格列表触发CheckBox的事件
         * @param  {array} val 当前选中的用户信息数组，每个元素是用户信息对象
         */
        onSelectionChange(val) {
            // console.log(val);
            if (val.length) {
                this.batch_flag = false;
                var ids = [];
                for (var i = 0; i < val.length; i++) {
                    ids.push(val[i].id);
                }
                this.batch_id = ids.join(',');
            } else {
                this.batch_flag = true;
                this.batch_id = '';
            }
        },


        /**
         * 搜索事件
         */
        onSearch() {
            // console.log(this.search_data);
            var query = this.$route.query;
            var sd = {};

            var query = this.$route.query;
            for (var p in query) {
                sd[p] = query[p];
            }

            var where = {};

            for (var s in this.search_data) {
                if (this.search_data[s]) {
                    where[s] = this.search_data[s];
                } else {
                    if (sd[s]) {
                        delete sd[s];
                    }
                }
            }



            this.getList({
                where,
                fn: () => {
                    this.setPath(Object.assign(sd, where));
                }
            });

        },


        /**
         * 改变页码和当前页时需要拼装的路径方法
         * @param {string} field 参数字段名
         * @param {string} value 参数字段值
         */
        setPath(field, value) {
            var path = this.$route.path,
                query = Object.assign({}, this.$route.query);

            if (typeof field === 'object') {
                query = field;
            } else {
                query[field] = value;
            }

            this.$router.push({
                path,
                query
            });
        },


        /**
         * 改变当前页事件
         * @param  {number} page 当前页码
         */
        onChangeCurrentPage(page) {
            this.getList({
                page,
                fn: () => {
                    this.setPath('page', page);
                }
            });
        },


        /**
         * 改变每页显示数量事件
         * @param  {number} size 当前每页显示数量
         */
        onChangePageSize(page_size) {
            this.getList({
                page_size,
                fn: () => {
                    this.setPath('page_size', page_size);
                }
            });
        },


        /**
         * 删除讯息事件
         * @param  {object || boolean} article  当前讯息信息对象或者为布尔值,为布尔值时，代表是批量删除
         * @param  {number} index 当前讯息列表索引
         * @param  {array} list  当前讯息列表数组
         */
        onDeleteArticle(article, index, list) {
            // console.dir(user);

            if (article === true) {
                var id = this.batch_id;
            } else {
                var id = article.id;
            }

            this.$$deleteArticle({
                id: id
            }, (data) => {
                if (article === true) {
                    this.article_list = this.article_list.filter(function(item, idx) {
                        return id.indexOf(item.id) === -1;
                    });
                } else {
                    list.splice(index, 1);
                }

                this.getList();
            });
        },


        /**
         * 修改讯息
         * @param  {object} article 当前讯息信息对象
         */
        onEditArticle(article) {
            if (article && article.id) {
                this.$router.push('/demo/article/edit?id=' + article.id);
            } else {
                this.$message({
                    showClose: true,
                    message: 'ID跑哪去了？',
                    type: 'error'
                });
            }
        },


        /**
         * 查看讯息信息事件
         * @param  {object} article 当前讯息信息对象
         */
        onSelectArticle(article) {
            this.dialog.show = true;
            this.dialog.article_info = article;
        },


        onCloseView() {

        },


        /**
         * 获取讯息列表
         * @param  {number} options.page      当前页码，切换页码时用
         * @param  {number} options.page_size 每页显示数量，改变每页数量时用
         * @param  {function} options.fn                            } 获取列表后的回调函数
         */
        getList({
            page,
            page_size,
            where,
            fn
        } = {}) {

            var query = this.$route.query;

            this.paginations.current_page = page || parseInt(query.page) || 1;
            this.paginations.page_size = page_size || parseInt(query.page_size) || this.paginations.page_size;

            var data = {
                page: this.paginations.current_page,
                page_size: this.paginations.page_size
            };

            if (where) {
                data = Object.assign(data, where || {});
            } else {
                for (var s in query) {
                    if (this.search_data[s] !== undefined) {
                        this.search_data[s] = query[s];

                        data[s] = query[s];
                    }
                }
            }


            // this.$$selectArticle(data, (article_data) => {
            //     this.article_list = article_data.list.data;
            //     this.paginations.total = article_data.list.total;
            //
            //     fn && fn();
            // });
        },
    },
    mounted() {
        this.getList({
            fn: () => {
                // this.onSelectArticle(this.article_list[1]);
            }
        });
    },
    '$route' (to, from) {

    }
}
</script>
<style scoped lang='scss'>
    .demo-form-inline{
        display: inline-block;
        float: right;
    }
    .btm-action{
        margin-top: 20px;
        text-align: center;
    }
    .actions-top{
        height: 46px;
    }
    .pagination{
        display: inline-block;
    }
</style>
