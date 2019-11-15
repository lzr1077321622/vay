<template>
   <div>
	  <van-nav-bar
		  title="商品详情页"
		  left-text="返回"
		  left-arrow
		  @click-left="$router.back(-1)"
		/>
		

		<van-card
		  :num="value"
		  :price="pice"
		  desc="暂无"  
		  :title="title"
		  :thumb="imgs"
		/>
			
		
		<van-address-list
		  v-model="chosenAddressId"
		  :list="list"
		 
		  @select='chose'
		/>
		
		<van-row>
			<van-col span="16">
				
			</van-col>
			<van-col span='8'>
		         <van-stepper v-model="value" min="1" @change='changebtn' />
		        </van-col>
		</van-row>
		
		<van-row>
			<van-col span="16">

			</van-col>
		<van-col span='8' style='color: red;'>
		   总价：{{numPrice}}
		</van-col>
		</van-row>
		
		<van-goods-action>
		  <van-goods-action-icon icon="chat-o" text="客服" @click="onClicktel" />
		  <van-goods-action-icon icon="cart-o" text="购物车" @click="" />
		  <van-goods-action-button type="warning" text="加入购物车" @click="onClickshop" />
		  <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
		</van-goods-action>
   </div>
</template>

<script>
import { Dialog } from 'vant';
import { Notify } from 'vant';
export default {

components: {},  
  name: 'HomeListDetail',
  data () {
    return {
		title:'',
		pice:0,
		imgs:"",
		num:1,
        chosenAddressId: '1',
		value:1,
		numPrice:0,
		select:1,
		show: false,
		list: [
        {
          id: '1',
          name: '张三',
          tel: '1533174260',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
    }
  },
	methods: {
		    homeList(){
				    var url= "http://yapi.demo.qunar.com/mock/32246/api/list";
					   	var self = this;
					   this.$axios.get(url,{
					   	 params: {
					   		 
					   	 }
					    })
					    .then(function (response) {
							console.log(response)
								self.listdata1 =  response.data.data1;
								
					    })
					    .catch(function (error) {
					   		
					    });
		},
	   //选择地市
	   chose(e) {
		 this.select= e;
		},
		//点击数量
	  changebtn(e){
		  this.num = e;
		  this.numPrice =  (e*this.pice).toFixed(2);
	  },
	  //客服
	  onClicktel(){
		  Dialog({ message: '4000-6666' });
	  },
	  //加入购物车
	  onClickshop(){
		    Notify('已为你加入购物车');
	  },
	  //立即够吗
	  onClickButton(){
		  if(this.select<=1){
			 Dialog.confirm({
			 	title: this.title,
			 	message:''
			 }).then(() => {
			 // on confirm
			 }).catch(() => {
			 // on cancel
			 }); 
		  }else{
			   Dialog.confirm({
			  	title: this.title,
			  	message:''
			  }).then(() => {
			  // on confirm
			  }).catch(() => {
			  // on cancel
			  }); 
		  }
		
	  }
	

	},
	created(){
		this.title = this.$route.params.title;
		this.pice = this.$route.params.price;
		this.imgs = this.$route.params.img;
	    this.numPrice= this.$route.params.price;
	}
}
</script>

<style scoped>
.van-address-list__add{
	display: none;
}
</style>
