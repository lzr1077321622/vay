<template>
  <div class="Find">
		<van-row >
			<van-row class='userinfo'>
				 <van-col class='icons' span='4' offset="1">
					 <img src="../assets/logo.png" alt="">
				 </van-col>
				 <van-col offset="2" style='margin-top: 1.5625rem;'>
					   <van-row style='color: #F7F8FA;'>那是平凡的一天</van-row>
					   <van-row>
						   <van-tag round type="success">京东值13032</van-tag>
						   <van-tag round type="success">小白信用93.6</van-tag>
					   </van-row>
				 </van-col>
			</van-row>	
			<!--宫格-->
			<van-row >
				<van-grid>
					<van-grid-item icon="send-gift-o" text="待付款" />
					<van-grid-item icon="cart-circle-o" info="2" text="待收货" />
					<van-grid-item icon="comment-o" text="待评价" />
					<van-grid-item icon="bar-chart-o" text="售后" />
				</van-grid>
			</van-row>
			<!--物流-->

			<van-row @click="show = true" style='margin: 1.5625rem auto;' >
				<van-col span='20' offset="2">
					<van-row type="flex">
						<van-col style='50px'>
							<img src="../../build/logo.png" style="width: 2.5rem;height:2.5rem;margin-top:0.125rem" alt="">
						</van-col>
						<van-col offset="1" style='font-size: 0.8125rem;color: #999; background: #f3f3f3; border-bottom: 0.0625rem solid #ececf5;'>
							<van-row>等待收货</van-row>
							<van-row>【北京市】【云南省】已发往下一站【昆明市】</van-row>
						</van-col>
					</van-row>
				</van-col>
			</van-row>
            <!---->
			<van-overlay :show="show" @click="show = false" z-index=9999999999999999999>
			  <div class="wrapper" @click="show = false">
				<div class="box">
					<van-steps direction="vertical" :active="0">
						  <van-step>
							<h3>【城市】北京市</h3>
							<p>2016-07-12 12:40</p>
						  </van-step>
						  <van-step>
							<h3>【城市】云南省</h3>
							<p>2016-07-11 10:00</p>
						  </van-step>
						    <van-step>
							<h3>【城市】昆明市</h3>
							<p>2016-07-11 18:00</p>
						  </van-step>
						    <van-step>
							<h3>【城市】官渡区</h3>
							<p>2016-07-11 24:00</p>
						  </van-step>
						  <van-step>
							<h3>快件已发货</h3>
							<p>2016-07-12 09:30</p>
						  </van-step>
						</van-steps>
				</div>
			  </div>
			</van-overlay>

			
			<!--猜你喜欢-->
			<van-row>
				<div ref="container" style="height: auto;margin-bottom: 4.375rem;">
				  <van-sticky :container="container">
				       <van-row>
				       	<van-row class='lists' v-for='(item,index) in listDatas' :key='index' >
				       		  <van-col span="7" offset="1" class='imgbox'>
				       			 	<img :src=" 'http://img14.360buyimg.com/n2/s240x240_'+item.Content.imageurl" alt="">
				       			</van-col>
				       		  <van-col span="14" offset="2" class='psize'>
				       				  <van-row class='title'>
				       						<p>{{item.Content.warename}}</p>
				       					</van-row>
				       				  <p>
				       				    	<span style='color: red;'>¥{{item.dredisprice}}</span>
				       							<span v-if="item.promotion_type==0">
				       								<van-tag type="danger">自营</van-tag>
				       							</span>
				       							<span v-if="item.promotion_type==3">
				       							<van-tag type="success">京东手机</van-tag>
				       							</span>
				       							<span v-if="item.promotion_type==2">
				       								<van-tag type="danger">非自营</van-tag>
				       							</span>
				       					</p>
				       				<p>掌视界数码旗舰店<span style='color: red;'>好评率{{item.good}}%&nbsp;&nbsp;</span>超过<span style='color: red;'>{{item.commentcount}}</span>条评价</p>
				       			</van-col>
				       	</van-row>
				       </van-row>
				  </van-sticky>
				</div>
			</van-row>
			<!--11111-->
			
		</van-row>	
		<BottomBar></BottomBar>		
  </div>
</template>

<script>

import BottomBar from './BottorBar.vue'  
import __Config from '../urlbase.js';
export default {

components: {BottomBar},  
  name: 'User',
  data () {
    return {
	  show: false,
       container: null,
	   listDatas:[]
    }
  },
	methods: {
		 listData(){
			var self = this;
		     	this.$axios.get(__Config.api.Getlove,{params: {}
			}).then(function (res) {
			   self.listDatas=	res.data.data.searchm.Paragraph;
			}).catch(function (error) {
				alert('服务器异常')
			});
		},
	
		
	},
	mounted() {
      this.container = this.$refs.container;
    },
	created(){
		this.listData();
		
	}
}
</script>

<style scoped>
.userinfo{
	width: 100%;
	height: 6.25rem;
    background-color: red;
    background-image: linear-gradient(141deg,#ee0a24 0%,#da4656 51%,#ff6034 75%);
}
.icons{
	width: 3.125rem;
	height: 3.125rem;
	border-radius: 100%;
	border: 1px solid #fff;
	margin-top: 1.5625rem;
	overflow: hidden;
}
.userinfo .icons img{
	width: 100%;
	height: 100%;
}
.findbox{
	position: fixed;
	top: 0rem;
	z-index: 6666;
	width: 100%;
}
.imgbox img{
	width: 7.5rem;
	height: 7.5rem;
}
.psize{
	  font-size: 0.8125rem;
    line-height: 1.4375rem;
}
.lists{
    height: 8.125rem;
    overflow: hidden;
    width: 98%;
    margin: 0.3125rem auto;
    box-shadow: 0px 0rem 0.125rem #d4b8b8;
}
.title{
	   height: 3.1875rem;
    overflow: hidden;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

}

.box {
  width: 17.5rem;
  height:23.125rem;
  border-radius: 0.625rem;
  background-color: #fff;
}
</style>
