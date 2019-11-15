<template>
	 <van-row class='stickys'>
	  <van-sticky :offset-top="0">
	 	<van-search
			  v-model="value"
			  placeholder="请输入搜索关键词"
			  show-action
			  shape="round"
			  @search="onSearch"
			  error
			>
			  <div slot="action" @click="onSearch">搜索</div>
			</van-search>
	 </van-sticky>
			
  <van-row class="banner">
	  <!--轮播-->
			<van-swipe :autoplay="3000" indicator-color="white">
					<van-swipe-item v-for="item in bannerList">
						<img :src="item.showUrl" >
					</van-swipe-item>
			</van-swipe>
	 <!--宫格-->
	 <van-grid :column-num="3">
		  <van-grid-item
			v-for="(item,index) in typeList"
			:key="index"
			:icon="item.iconUrl"
			:text="item.name"
		  />
		</van-grid>
	<!--推存-->
	  <van-row class='storage'>
	    <van-row class="col24mian" justify="center" align="center">
			 <van-col span="24" class="col24">{{name}}</van-col>
		</van-row>
		 <van-row class='storagecon' type="flex" justify="center" align="center">
			  <van-col class='bordershow'   span="6" v-for="(item,index) in storageList" :key="index">
					<van-row class='name'>
						<p>{{item.name}}</p>
					</van-row> 
					<van-row class='imgurl'>
						<img :src="item.iconUrl"/>
					</van-row>  
			  </van-col>
			</van-row>	 
	  </van-row>
	 <!--通知-->
	<van-notice-bar
	  :text="msg"
	  left-icon="volume-o"
	/>
	<!--首页分类-->
  <HomeList></HomeList>
	 <!--底部菜单-->
	<BottomBar></BottomBar>		
  </van-row>
   </van-row> 
</template>

<script>
import BottomBar from './BottorBar.vue'  
import HomeList from './HomeList.vue' 
import __Config from '../urlbase.js';
export default {
components: {BottomBar,HomeList},  
  name: 'home',
  data () {
    return {
	   name:"走心推存",
	   msg:"天猫双11历年交易额2019全天2684亿",
	   value:'',
     bannerList:[],
	   typeList:[],
	   storageList:[]
    }
  },
	methods: {
		//搜索
		onSearch(){
			
		},
		//轮播
       banner(){
				var self = this;
				this.$axios.get(__Config.api.bannerlist,{params: {type:'home',}
				}).then(function (response) {
				self.bannerList =  response.data.data;}).catch(function (error) {});
		   },
         //分类
		 listtype(){
				var self = this;
				this.$axios.get(__Config.api.Hometype,{params: {}
				}).then(function (response) {
				self.typeList =  response.data.data;
				self.storageList =  response.data.storage;}).catch(function (error) {});
		},		
	},
	created(){
		this.banner();
		this.listtype();
	}
}
</script>
<style scoped>
.van-swipe{height:150px;width:100%;}.van-swipe img{width:100%;height:100%;}.stickys{margin-bottom:50px;}.storage{width:100%;height:206px;overflow:hidden;}.storagecon{width:90%;height:168px;margin:10px auto 0px auto;background:#fff;}.storagecon .van-col--6{}.storagecon .van-col--6:nth-child(1){background:#ff891791;}.storagecon .van-col--6:nth-child(2){background:#22b27e8a;}.storagecon .van-col--6:nth-child(3){background:#ff149396;}.storagecon .van-col--6:nth-child(4){background:#bf163485;}.col24mian{width:100%;height:20px;}.col24mian .col24{text-align:center;color:#323233;line-height:22px;font-family:"微软雅黑";}.bordershow{border:1px solid #fafafa;//box-shadow:-3px 5px 5px 5px #ee5600;}.name{width:100%;height:30px;text-align:center;line-height:30px;color:#fff;}.imgurl{width:100%;height:100px;}.imgurl img{width:100%;height:100%;}
</style>
