import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login' //登录
import Home from '@/components/Home'//首页
import Classification from '@/components/Classification'//分类
import Find from '@/components/Find'//f发现
import User from '@/components/User'//我的
import HomeListDetail from '@/components/HomeListDetail'//详情页


Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Login',
		component: Login
	},{
		path: '/home',
		name: 'home',
		component: Home
	},{
		path: '/Classification',
		name: 'Classification',
		component: Classification
	},{
		path: '/Find',
		name: 'Find',
		component: Find
	},{
		path: '/User',
		name: 'User',
		component: User
	},{
		path: '/HomeListDetail',
		name: 'HomeListDetail',
		component: HomeListDetail
	}
	
	]
})
