const address = "http://yapi.demo.qunar.com/mock/32246/api/";
const config = {
	address: address,
	api: {
		bannerlist: address + "banner", //轮播图
		Hometype: address + "type", //首页分类
		Getlist: address + "list", //首页tab
		Catphone: address + "catphone", //分类手机
		GetWph: address + "wph", //分类唯品会
		Getmanwear: address + "manwear", //分类男装
		Getwoman: address + "woman", //分类女装
		Getnanxie: address + "nanxie", //分类男鞋
		Getxianhua: address + "xianhua", //分类鲜花
		Getuicun1: address + "tuicun", //推存首页 价格最低 
		Getuicun2: address + "tprice", //推存首页 价格最高
		Getuicun3: address + "jdwl", //推存首页 京东物流
		Getuicun4: address + "hdfk", //推存首页 货到付款
		Getlove: address + "love", //猜你喜欢
	}
};


export default config;
