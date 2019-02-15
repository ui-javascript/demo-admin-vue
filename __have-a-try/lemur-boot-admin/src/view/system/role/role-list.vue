<template>
    <div>
        <Card>
            <div class="search-con search-con-top">
                <Form :model="form" :label-width="80" inline>
                    <FormItem label="角色名称">
                        <Input v-model="form.name"></Input>
                    </FormItem>
                    <FormItem label="备注">
                        <Input v-model="form.tips"></Input>
                    </FormItem>
                    <Button @click="handleSearch" class="search-btn" type="primary">
                        <Icon type="search"/>
                        搜索
                    </Button>
                </Form>
                <div>
                    <Button type="primary" icon="md-add" @click="handleCreate">新增</Button>&nbsp;&nbsp;
                    <Button type="primary" icon="md-trash" @click="handleDelete">删除</Button>
                </div>
            </div>
            <tables ref="tables" v-model="tableData" :columns="columns" @on-search="handleSearch"
                    @on-update="handleUpdate" @on-detail="handleDetail" @on-selection-change="selectionChange"/>
        </Card>
        <roleInfo ref="roleInfoRef" ></roleInfo>
    </div>
</template>

<script>
import Tables from '_c/tables'
import { L, D } from '@/libs/api.request'
import roleInfo from './role-info'
import { getIds } from '@/libs/util'

export default {
  name: 'role-list',
  components: {
    Tables,
    roleInfo
  },
  data () {
    return {
      columns: [
        { title: '角色名称', key: 'name' },
        { title: '备注', key: 'tips' },
        { title: '微信ID', key: 'wxid' },
        { title: '钉钉ID', key: 'ddid' },
        {
          title: '操作',
          key: 'handle',
          minWidth: 200,
          options: ['update', 'detail']
        }
      ],
      tableData: {
        rows: [],
        total: 0
      },
      form: {
        map: {}
      },
      selectedData: [],
      infoIsShow: false
    }
  },
  methods: {
    handleUpdate (param) {
      this.$refs.roleInfoRef.openModel('update', param.row)
    },
    handleDetail (param) {
      this.$refs.roleInfoRef.openModel('detail', param.row)
    },
    handleCreate () {
      this.$refs.roleInfoRef.openModel('create')
    },
    handleDelete () {
      D('role', getIds(this.selectedData)).then(data => {
        this.$Message.success(data)
        this.handleSearch()
      })
    },
    selectionChange (selection) {
      this.selectedData = selection
    },
    handleSearch (page, pageSize) {
      if (isNaN(page)) {
        page = 1
      }
      var param = {
        page: page,
        pageSize: pageSize,
        model: this.form,
        map: this.form.map
      }
      L('role', param).then(data => {
        this.tableData = data
      })
    }
  },
  mounted () {
    this.handleSearch()
  }
}
</script>

<style>

</style>
