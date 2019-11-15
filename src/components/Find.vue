<template>
			<div class="Find" style="margin-bottom: 50px;">
					<van-row class='findbox'>
						<van-dropdown-menu>
							<van-dropdown-item v-model="value1" :options="option1" @change='btnchange'/>
							<van-dropdown-item v-model="value2" :options="option2" @change='btnchange'/>
						</van-dropdown-menu>
					</van-row>
				  <van-row style='margin-top: 50px;'>
								<van-row class='lists' v-for='(item,index) in listData' :key='index'>
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
       <BottomBar></BottomBar>
  </div>
</template>

<script>
import BottomBar from './BottorBar.vue'  
import __Config from '../urlbase.js';
export default {

components: {BottomBar},  
  name: 'Find',
  data () {
    return {
			listData:[],
      value1: 0,
      value2: 2,
			url:__Config.api.Getuicun1,
      option1: [
        { text: '推存', value: 0 },
        { text: '价格最高', value: 1 }
      ],
      option2: [
        { text: '京东物流', value: 2 },
        { text: '货到付款', value: 3 }
      ]
    }
   
  },
	
	methods: {
			btnchange(e){
				var url = __Config.api.Getuicun1;
				 switch (e) {
								case 0:
									 url= __Config.api.Getuicun1; 
								 	this.banner(url);
									break;
								case 1:
									  url= __Config.api.Getuicun2; 
									 	this.banner(url);
									 break;
								case 2:
									url= __Config.api.Getuicun3; 
									 	this.banner(url);
									break;
								case 3:
									 url= __Config.api.Getuicun4; 
									  	this.banner(url);
									break;
							}
			},
			//京东商品收缩接口 
		  //	var uri = "https://so.m.jd.com/ware/search._m2wq_list?datatype=1&callback=jdSearchResultBkCbA&keyword=充电宝";
			//keyword 关键字
			//sort_type:sort_dredisprice_asc价格最低
			//sort_type:sort_dredisprice_desc价格最高
			//filt_type: col_type,//京东物流
			//filt_type: cod,//货到付款
			//t1=1573724431693 当前时间戳
			//page=1 请求页数
			//pagesize每页数据
		
			 banner(url){
							var self = this;
							this.$axios.get(url,{params: {}
							}).then(function (res) {
						     self.listData=	res.data.data.searchm.Paragraph;
							}).catch(function (error) {
							  	alert('服务器异常')
							});
			},
	},
	created(){
		this.banner(this.url);
	}
}
</script>
<style scoped>
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
    box-shadow: 0px 0px 2px #d4b8b8;
}
.title{
	   height: 3.1875rem;
    overflow: hidden;
}
</style>
