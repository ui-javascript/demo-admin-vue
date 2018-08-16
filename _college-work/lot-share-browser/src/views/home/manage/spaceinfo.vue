<template>
	<section>

		<!--车位查询工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="车位名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getSpaces">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新增</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="success">批量导入</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="spaces" highlight-current-row
							v-loading="listLoading"
							@selection-change="selsChange"
							style="width: 100%;">

			<el-table-column type="selection" width="40"></el-table-column>
			<el-table-column type="index" width="120"></el-table-column>
			<el-table-column prop="name" label="车位名" width="220" sortable></el-table-column>
			<el-table-column prop="status" label="状态" width="180" :formatter="formatStatus" sortable>
			</el-table-column>
			<el-table-column prop="description" label="描述">
			</el-table-column>
			<el-table-column label="操作">
				<template scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col>

		<!--编辑界面-->
		<el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="车位号" prop="name">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="状态">
					<el-input-number v-model="editForm.status"></el-input-number>
				</el-form-item>
				<el-form-item label="描述">
					<el-input v-model="editForm.description"></el-input>
				</el-form-item>
			</el-form>
			<div  slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>

		<!--新增界面-->
		<el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="车位号" prop="name">
					<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="状态" prop="status">
					<el-input-number v-model="addForm.status"></el-input-number>
				</el-form-item>
				<el-form-item label="描述" prop="description">
					<el-input v-model="addForm.description" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div  slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script>

	export default {
		data() {
			return {
				// 查询过滤器
				filters: {
					name: ''
				},

				spaces: [],
				errors: [],
				total: 0,
				page: 1,
				sels: [],  // 列表选中列
				listLoading: false,

				editFormVisible: false, // 编辑界面是否显示
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入车位名', trigger: 'blur' }
					]
				},

				//编辑界面数据
				editForm: {
					id: 0,
					name: '',
					status: 1,
				  description: ''
				},

				addFormVisible: false, // 新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入车位名', trigger: 'blur' }
					]
				},

				// 新增界面数据
				addForm: {
					id: null,
					name: '',
					status: 1,
				  description: ''
				}

			}
		},

		methods: {
			handleCurrentChange(val) {
				this.page = val;
				this.getSpaces();
			},

			formatStatus(row, column) {
				if(row.status === 0) {
					return '未审核';
				} else if(row.status === 1) {
					return '审核通过';
				} else {
					return '被禁用';
				}
			},

			// 删除
			handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.removeSpaceById(row.id);
				}).catch(() => {

				});
			},

			//显示编辑界面
			handleEdit: function (index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},

			// 显示新增界面
			handleAdd: function () {
				this.addFormVisible = true;
				this.addForm = {
					id: 0,
					name: '',
					status: 1,
				  description: ''
				};
			},

			//编辑
			editSubmit: function () {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							let para = JSON.stringify(Object.assign({}, this.editForm));
							// console.log(JSON.stringify(para));
							this.updateSpaceById(para);
						});
					}
				});
			},

			// 新增
			addSubmit: function () {
				this.$refs.addForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							let para = Object.assign({}, this.addForm);
							this.addNewSpace(JSON.stringify(para));
						});
					}
				});
			},

			selsChange: function (sels) {
				this.sels = sels;
			},

			// 批量删除
			batchRemove: function () {
				var ids = this.sels.map(item => item.id).toString();
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					// this.listLoading = true;
					//
					// // NProgress.start();
					// let para = { ids: ids };
					// batchRemoveUser(para).then((res) => {
					// 	this.listLoading = false;
					// 	// NProgress.done();
					// 	this.$message({
					// 		message: '删除成功',
					// 		type: 'success'
					// 	});
					// 	this.getSpaces();
					// });
				}).catch(() => {

				});
			},

			// 获取所有城市
	    getSpaces () {
	      let url = 'http://47.100.99.127:8080/api/v1/spaceEx';

	      this.$http.get(url).then(response => {
	        this.spaces = response.data.data
	      }).catch(e => {
	        this.errors.push(e)
	      })
	    },

	    // 根据id获取
	    getSpaceById (id) {
	      let url = 'http://47.100.99.127:8080/api/v1/space/' + id

	      this.$http.get(url).then((response) => {
	        this.spaces = response.data.data;
	      }).catch((error) => {
	        console.log(error)
	      })
	    },

	    // 根据id删除
	    removeSpaceById (id) {
	      let url = 'http://47.100.99.127:8080/api/v1/space/' + id

				this.listLoading = true;
	      this.$http.delete(url).then((response) => {
					this.listLoading = false;
					this.$message({
						message: '删除成功',
						type: 'success'
					});
					this.getSpaces();
	      }).catch((error) => {
	        console.log(error)
	      })
	    },

	    // 新增
	    addNewSpace (para) {
	      let url = 'http://47.100.99.127:8080/api/v1/space'
	      this.$http.post(url, para).then(response => {
					this.addLoading = false;
					// NProgress.done();
					this.$message({
						message: '提交成功',
						type: 'success'
					});
					// this.$refs['addForm'].resetFields();
					this.addFormVisible = false;
					this.getSpaces();
	      }).catch(e => {
	        this.errors.push(e)
	      })
	    },

	    // 更具id新增
	    updateSpaceById (para) {
	      let url = 'http://47.100.99.127:8080/api/v1/spaceEx'
				// this.listLoading = false;
	      this.$http.put(url, para)
	      .then(response => {
					this.$message({
						message: '提交成功',
						type: 'success'
					});
					// this.$refs['editForm'].resetFields();
					this.editLoading = false;
					this.editFormVisible = false;
					this.getSpaces();
	      }).catch(e => {
					this.errors.push(e)
					this.$message({
						message: '提交失败' + this.errors,
						type: 'error'
					});
					// this.$refs['editForm'].resetFields();
					this.editFormVisible = false;
					this.editLoading = false;
	      })
	    }
		},

		mounted () {
			this.getSpaces();
		}
	}
</script>

<style scoped>

</style>
