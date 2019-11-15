<template>
	<div>
		<van-row class='homelist'>
			<!-- <van-sticky :offset-top="0"> -->
			<van-tabs v-model="active">
				<van-tab title="精选">
					<van-row class='rowmain' style='margin-bottom: 50px;'>
						<van-row justify='center' align='center'>
							<van-col class='listgood' @click="openDetail(item.title,item.price,item.iconUrl)"
							span='11' v-for="(item,index) in listdata1" :key="index">
								<van-row class='imgbox'>
									<img :src="item.iconUrl" alt="">
								</van-row>
								<van-row class='txt'>
									<p>
										{{item.title}}
									</p>
								</van-row>
								<van-row type="flex" style='margin-bottom: 0.375rem;'>
									<van-col span='16' style='color: red;'>
										{{item.price}}
									</van-col>
									<van-col span='8'>
										<van-button type="primary" size="mini">
											看相似
										</van-button>
									</van-col>
								</van-row>
							</van-col>
						</van-row>
						<van-divider>
							暂无更多
						</van-divider>
					</van-row>
				</van-tab>
				<van-tab title="电器">
					<van-row class='rowmain' style='margin-bottom: 50px;'>
						<van-row justify='center' align='center'>
							<van-col class='listgood' span='11' @click="openDetail(item.title,item.price,item.iconUrl)"
							v-for="(item,index) in listdata2" :key="index">
								<van-row class='imgbox'>
									<img :src="item.iconUrl" alt="">
								</van-row>
								<van-row class='txt'>
									<p>
										{{item.title}}
									</p>
								</van-row>
								<van-row type="flex">
									<van-col span='16' style='color: red;'>
										{{item.price}}
									</van-col>
									<van-col span='8'>
										<van-button type="primary" size="mini">
											看相似
										</van-button>
									</van-col>
								</van-row>
							</van-col>
						</van-row>
						<van-divider>
							暂无更多
						</van-divider>
					</van-row>
				</van-tab>
				<van-tab title="生活">
					<van-row class='rowmain' style='margin-bottom: 50px;'>
						<van-row justify='center' align='center'>
							<van-col class='listgood' span='11' @click="openDetail(item.title,item.price,item.iconUrl)"
							v-for="(item,index) in listdata3" :key="index">
								<van-row class='imgbox'>
									<img :src="item.iconUrl" alt="">
								</van-row>
								<van-row class='txt'>
									<p>
										{{item.title}}
									</p>
								</van-row>
								<van-row type="flex">
									<van-col span='16' style='color: red;'>
										{{item.price}}
									</van-col>
									<van-col span='8'>
										<van-button type="primary" size="mini">
											看相似
										</van-button>
									</van-col>
								</van-row>
							</van-col>
						</van-row>
						<van-divider>
							暂无更多
						</van-divider>
					</van-row>
				</van-tab>
				<van-tab title="超市">
					<van-row class='rowmain' style='margin-bottom: 50px;'>
						<van-row justify='center' align='center'>
							<van-col class='listgood' span='11' @click="openDetail(item.title,item.price,item.iconUrl)"
							v-for="(item,index) in listdata4" :key="index">
								<van-row class='imgbox'>
									<img :src="item.iconUrl" alt="">
								</van-row>
								<van-row class='txt'>
									<p>
										{{item.title}}
									</p>
								</van-row>
								<van-row type="flex">
									<van-col span='16' style='color: red;'>
										{{item.price}}
									</van-col>
									<van-col span='8'>
										<van-button type="primary" size="mini">
											看相似
										</van-button>
									</van-col>
								</van-row>
							</van-col>
						</van-row>
						<van-divider>
							暂无更多
						</van-divider>
					</van-row>
				</van-tab>
			</van-tabs>
			<!-- </van-sticky> -->
		</van-row>
	</div>
</template>
<script>
import BottomBar from './BottorBar.vue'
import __Config from '../urlbase.js';
export
default {
    components: {
        BottomBar
    },
    name: 'HomeList',
    data() {
        return {
            active: 0,
            listdata1: [],
            listdata2: [],
            listdata3: [],
            listdata4: [],
        }
    },
    methods: {
        homeList() {
                var url = __Config.api.Getlist;
                var self = this;
                this.$axios.get(url, {}).then(function(response) {
                    self.listdata1 = response.data.data1;
                    self.listdata2 = response.data.data2;
                    self.listdata3 = response.data.data3;
                    self.listdata4 = response.data.data4;
                }).catch(function(error) {});
            },
            openDetail(title, price, img) {
                this.$router.push({
                    name: 'HomeListDetail',
                    params: {
                        title: title,
                        price: price,
                        img: img
                    }
                })
            }
    },
    created() {
        this.homeList();
    }
}
</script>
<style scoped>
	.homelist{ background: #f7f8fa; margin-bottom: 50px; } .rowmain{ margin-top:
	0.3125rem; } .listgood{  margin-top: 0.3125rem; margin-left:
	0.625rem; overflow: hidden; box-sizing: inherit; box-shadow: 0rem 0rem
	0rem 0.125rem #e8d7d7; } .imgbox{ width: 100%;  } .imgbox
	img{ width: 100%; height: 100%; } .txt{ height: 2.1875rem; overflow: hidden;
	} .txt p{ font-size: 0.8125rem; }
</style>