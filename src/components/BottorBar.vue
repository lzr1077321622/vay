<template>
  <div class="bottommbar">
	  
	  <van-tabbar route v-model="active" change="onClick" active-color='#1989fa'>
		  <van-tabbar-item name='1' icon="home-o"  to="/home">首页</van-tabbar-item>
		  <van-tabbar-item  name='2'icon="search"  to="/Classification" >分类</van-tabbar-item>
		  <van-tabbar-item name='3' icon="friends-o"  to="/Find">推存</van-tabbar-item>
		  <van-tabbar-item name='4' icon="setting-o"  to="/User">我的</van-tabbar-item>
		</van-tabbar>
		
  </div>
</template>

<script>


export default {
  name: 'home',
  data () {
    return {
     active:1
    }
  },
	methods: {
 
	},
	created(){
		
	}
}
</script>

<style scoped>
.bottommbar{
	width: 100%;
	z-index: 9999;
	position: fixed;
	bottom: 0px;
	
}
</style>
