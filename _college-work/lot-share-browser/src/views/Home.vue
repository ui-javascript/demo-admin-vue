<template>
	<el-row class="container">
		<!-- header -->
		<el-col :span="24" class="header">

			<!-- logo -->
			<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				{{ collapsed ? '' : sysName }} <!-- 一旦折叠则不显示文字 -->
				<i class="fa fa-car" aria-hidden="true" v-show="collapsed"></i>
			</el-col><!-- ./logo -->

      <!-- 中间填充块 -->
			<el-col :span="2">
				<div class="tools" @click.prevent="collapse">
					<i class="fa fa-arrow-circle-right" v-show="collapsed"></i>
					<i class="fa fa-arrow-circle-left" v-show="!collapsed"></i>
				</div>
			</el-col>
			<!-- ./中间填充块 -->

 			<el-col :span="8">
				<el-menu theme="dark" default-active="/home/manage/ownerinfo" mode="horizontal" class="el-menu-demo" unique-opened router>
					<el-menu-item  index="/home/manage/ownerinfo" @click="changeTab('home')">物业平台</el-menu-item>
					<el-menu-item  index="/platform/analyse/income" @click="changeTab('platform')">运营平台</el-menu-item>

					<!-- <el-col :span="12">
						<el-menu-item  index="/home/manage/ownerinfo" @click="changeTab('home')">小区平台</el-menu-item>
					</el-col>
					<el-col :span="12">
						<el-menu-item  index="/platform/sys/log" @click="changeTab('platform')">运营平台</el-menu-item>
					</el-col> -->
				</el-menu>
			</el-col>

			<!-- 用户信息 -->
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col><!-- ./用户信息 -->

		</el-col><!-- ./header -->

    <!-- 主体 -->
		<el-col :span="24" class="main">

			<!-- 导航菜单 -->
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'">
				<!-- 未折叠的导航菜单-->
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
					 unique-opened router v-show="!collapsed">
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden && whichTab(item.path)">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden && whichTab(item.path)">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu>

				<!--导航菜单-折叠后-->
				<ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">

					<li v-for="(item,index) in $router.options.routes" v-if="!item.hidden && whichTab(item.path)" class="el-submenu item">
						<template v-if="!item.leaf">
							<div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
							<ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
								<li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
							</ul>
						</template>
						<template v-else>
					        <ul>
							<li class="el-submenu">
								<div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
							</li>
							</ul>
						</template>
					</li>
				</ul><!-- ./导航菜单-折叠后-->
			</aside><!-- ./导航菜单 -->

			<!-- 内容区 -->
			<section class="content-container">
				<div class="grid-content bg-purple-light">


					<!-- 面包屑 -->
					<el-col :span="24" class="breadcrumb-container">
						 <strong class="title"> {{ this.tabCh(this.roleTab) }} - {{ $route.name }}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<!-- <p style="float:left;"></p> -->
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								 {{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>

					</el-col><!-- ./面包屑 -->

					<!-- router-view -->
					<el-col :span="24" class="content-wrapper">
						<!-- 切换动画 -->
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col><!-- ./router-view-->
				</div>
			</section><!-- ./内容区 -->
		</el-col><!-- ./main -->
	</el-row><!-- ./container -->
</template>

<script>
	export default {
		data() {
			return {
				sysName: '共享车位后台系统', 		// 系统名
				collapsed: false, 		 // 折叠状态不
				sysUserName: '',       // 用户名
				sysUserAvatar: '',     // 头像

				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},

				roleTab: '/home'
			}
		},

		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {

			},
			tabCh(tab) {
				if(tab === '/home') {
					return "小区平台";
				} else {
					return "运营平台";
				}
			},

			whichTab(tab) {
				// console.log(tab);
				// console.log(this.roleTab);
				if(tab !== this.roleTab) {
					return false;
				}
				return true;
			},

			changeTab(tab) {
				this.roleTab = '/' + tab;
				// console.log(this.roleTab);
			},

			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					// type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login'); // 强制切换至登录页面
				}).catch(() => {

				});

			},

			// 折叠导航栏
			collapse:function() {
				this.collapsed = !this.collapsed; // 来回切换
			},

			showMenu (i,status) {
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display = status ? 'block' : 'none';
			}

		},

		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}
		}
	}
</script>

<style scoped lang="scss">
	// @import '~scss_vars';
	$color-primary: #324157;// #18c79c   蓝#20a0ff

	.container {
		position: absolute; // 绝对布局
		top: 0px;
		bottom: 0px;
		width: 100%;

		.header {
			height: 60px;
			line-height: 60px;
			background: $color-primary;
			color:#fff; // 字体颜色

			.el-menu {
				// background: $color-primary;
			}

			.userinfo {
				text-align: right; // 用户信息文字靠右
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer; // 改变指针形状
					color:#fff;
					img {
						width: 40px;
						height: 40px; // 指定宽高
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}

			.logo {
				//width:230px;
				height:60px;
				font-size: 22px;
				padding-left: 15px;
				padding-right: 20px;
				border-color: rgba(238,241,146,0.3);
				border-right-width: 1px;
				border-right-style: solid;
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
				.txt {
					color: #fff;
					font-weight: bold;
					font-family:"STHeiti","Microsoft YaHei", "MicrosoftJhengHei";
				}
			}
			.logo-width{
				width:230px;
			}
			.logo-collapse-width{
				width:60px
			}
			.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}

			.role-items {
				padding: 0px 23px;
				width: 14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}

		}

		.main {
			display: flex;
			// background: #324057;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 230px;
				width: 230px;
				// position: absolute;
				// top: 0px;
				// bottom: 0px;
				.el-menu {
					height: 100%;
				}
				.collapsed{
					width:60px;
					.item{
						position: relative;
					}
					.submenu{
						position:absolute;
						top:0px;
						left:60px;
						z-index:99999;
						height:auto;
						display:none;
					}

				}
			}

			.menu-collapsed{
				flex: 0 0 60px;
				width: 60px;
			}
			.menu-expanded{
				flex: 0 0 230px;
				width: 230px;
			}
			.content-container {
				// background: #f1f2f7;
				flex:1;
				// position: absolute;
				// right: 0px;
				// top: 0px;
				// bottom: 0px;
				// left: 230px;
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {
					//margin-bottom: 15px;
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
</style>
