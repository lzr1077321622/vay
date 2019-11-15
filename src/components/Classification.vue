<template>
			<div class="Find">
				 <van-row class='scorr'>
					  <van-tree-select
					 			height="100%"
					 			:items="items"
					 			:main-active-index.sync="activeIndex"
					 		>
					 	<template slot="content">
							<!--手机数码-->
								<van-row v-if="activeIndex === 0" justify='center'>
										<van-col offset='1' span='7'  v-for="(item,index) in List" :key='index'>
											  <van-row class='imgsbox'>
													<img :src=" 'http://img14.360buyimg.com/n2/s240x240_'+item.Content.imageurl" alt="">
												</van-row>
												<van-row class='pbox'>
													<p>{{item.dredisprice}}</p>
												</van-row>
										</van-col>
								</van-row>
						  <!--唯品会-->
					 		<van-row v-if="activeIndex === 1" justify='center'>
					 			<van-col offset='1' span='7'  v-for="(item,index) in Weilist" :key='index'>
					 				  <van-row class='imgsbox'>
					 						<img :src=" 'http://img14.360buyimg.com/n2/s240x240_'+item.Content.imageurl" alt="">
					 					</van-row>
					 					<van-row class='pbox'>
					 						<p>{{item.dredisprice}}</p>
					 					</van-row>
					 			</van-col>
					  	</van-row>
							<!--男装-->
							<van-row v-if="activeIndex ===2" justify='center'>
							<van-col offset='1' span='7'  v-for="(item,index) in manwear" :key='index'>
								  <van-row class='imgsbox'>
										<img :src=" 'http://img14.360buyimg.com/n2/s240x240_'+item.Content.imageurl" alt="">
									</van-row>
									<van-row class='pbox'>
										<p>{{item.dredisprice}}</p>
									</van-row>
							</van-col>
						</van-row>
						
						<!--女装-->
							<van-row v-if="activeIndex ===3" justify='center'>
							<van-col offset='1' span='7'  v-for="(item,index) in womanwear" :key='index'>
									<van-row class='imgsbox'>
										<img :src=" 'http://img14.360buyimg.com/n2/s240x240_'+item.Content.imageurl" alt="">
									</van-row>
									<van-row class='pbox'>
										<p>{{item.dredisprice}}</p>
									</van-row>
							</van-col>
						</van-row>
							<!--女装-->
							<van-row v-if="activeIndex ===4" justify='center'>
						         	<van-col offset='1' span='7'  v-for="(item,index) in nanxie" :key='index'>
												<van-row class='imgsbox'>
															<img :src=" 'http://img14.360buyimg.com/n2/s240x240_'+item.Content.imageurl" alt="">
												</van-row>
												<van-row class='pbox'>
															<p>{{item.dredisprice}}</p>
												</van-row>
										</van-col>
							</van-row>
							<van-col v-if="activeIndex === 5" >
						  	 <van-divider dashed>暂无数据</van-divider>
						</van-col>
						<van-col v-if="activeIndex === 6" >
							 <van-divider dashed>暂无数据</van-divider>
						</van-col>
						<van-col v-if="activeIndex === 7" >
							 <van-divider dashed>暂无数据</van-divider>
						</van-col>
						<van-col v-if="activeIndex === 8" >
							 <van-divider dashed>暂无数据</van-divider>
						</van-col>
						<van-col v-if="activeIndex === 9" >
							 <van-divider dashed>暂无数据</van-divider>
						</van-col>
						<van-col v-if="activeIndex === 10" >
							 <van-divider dashed>暂无数据</van-divider>
						</van-col>
						<van-col v-if="activeIndex === 11" >
							 <van-divider dashed>暂无数据</van-divider>
						</van-col>
						<van-col v-if="activeIndex === 12" >
						 <van-divider dashed>暂无数据</van-divider>
						</van-col>
						<van-col v-if="activeIndex === 13" >
						 <van-divider dashed>暂无数据</van-divider>
						</van-col>
						
						<!--鲜花-->
						 <van-row style='border-bottom: 1px solid #e4e3e3;margin: 0.625rem 0.625rem ;' v-if="activeIndex === 14"  v-for="(item,index) in xianhua" :key='index'>
									<van-row>
										<van-col class='last'>
											 	<img :src=" 'http://img14.360buyimg.com/n2/s240x240_'+item.Content.imageurl" alt="">
										</van-col>
									</van-row>
									 <van-row style='margin: 10px 13px;font-size: 14px;color: #333;'>
												{{item.Content.warename}}
									</van-row>
								 <van-row>
									 <van-row class='martop'><span>销量&nbsp;&nbsp;</span><van-tag type="primary">{{item.commentcount}}</van-tag></van-row>
									 <van-row class='martop'><span>评论数&nbsp;&nbsp;</span><van-tag type="danger">{{item.productext2}}</van-tag></van-row>
									 <van-row class='martop'><span>价格&nbsp;&nbsp;</span><van-tag type="warning">{{item.dredisprice}}</van-tag></van-row>
								 </van-row>
						 </van-row>
						
					 	</template>
					 </van-tree-select>
				 </van-row>

<BottomBar></BottomBar>
  </div>
</template>

<script>

import BottomBar from './BottorBar.vue'  
import __Config from '../urlbase.js';
export default {
components: {BottomBar},  
  name: 'Classification',
  data () {
    return {
     activeIndex: 0,
		 List:[],//手机数据
		 Weilist:[],//唯品会
		 manwear:[],//男装
		 womanwear:[],//女装
		 nanxie:[],//男鞋
		 xianhua:[],//鲜花
     items: [{ text: '手机数码' }, { text: '唯品会' }, { text: '男装' }, { text: '女装' }, { text: '男鞋' },
		 { text: '女鞋' }, { text: '个人清洁' }, { text: '电脑办公' }, { text: '家用电器' }, { text: '食品' }, 
		 { text: '酒水饮料' }, { text: '玩具' }, { text: '汽车生活' }, { text: '家具' }, { text: '礼品鲜花' }
		 ]
    }
  },
	
	methods: {
		   listDada(){
					 var self = this;
				  	this.$async.map(
						[__Config.api.Catphone, __Config.api.GetWph,__Config.api.Getmanwear,__Config.api.Getwoman,__Config.api.Getnanxie,__Config.api.Getxianhua],
						 function (item, callback) {
				  	 self.$axios.get(item,{
								}).then(function (res) {
										callback(null, res.data.data.searchm.Paragraph)
								})
					 }, function (err, results) {
								self.List = results[0];
								self.Weilist= results[1];
								self.manwear= results[2];
								self.womanwear= results[3];
								self.nanxie= results[4];
								self.xianhua= results[5];		
					 });
			 }
	},
	created(){
	  	this.listDada();		
	}
}
</script>
<style scoped>
	.Find{margin-bottom:3.125rem}.scorr{height:100%;background:darkcyan}.van-col--7{margin:0.1875rem 0.25rem}.imgsbox img{width:100%;height:100%}.pbox{height:1.5625rem}.pbox p{line-height:1.5625rem;text-align:center}.last{width:100%;margin:0 auto}.last img{width:100%;height:100%}.martop{margin:0.625rem}
</style>
