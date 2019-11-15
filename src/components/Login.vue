<template>
  <div class="main">
		<van-row class='login'>
					<van-cell-group>
							<van-field
								v-model="username"							
								label="用户名"
								placeholder="请输入用户名"
							/>

							<van-field
								v-model="password"
								type="password"
								label="密码"
								placeholder="请输入密码"
								required
							/>
						</van-cell-group>
		</van-row>
			
			<van-row class='btn'>
				    <van-col offset=6 span=12>
					      <van-button @click='login' size='large' color="#129fd7 ">登录</van-button>
					  </van-col>
			</van-row>	
				
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  name: 'Logon',
  data () {
    return {
      username:'',
			password:''
    }
  },
	methods: {
			login(){
				if(this.username==''|| this.password==''){
					 Toast.success('用户名密码不能为空');
				}else{
							var self = this;
						this.$axios.get('http://yapi.demo.qunar.com/mock/32246/api/login',{
							 params: {
								 user:self.username,
								 pass:self.password
							 }
						 })
						 .then(function (response) {
								 Toast('登录成功');
							
							 if(response.data.code==100){
								 //储存用户标识
								  localStorage.setItem("token", response.data.token);
									setTimeout(()=>{
										 self.$router.push({path:'/home'})
									},1500)
								  //跳转到首页
							 }else{
								 	 Toast.success('服务器异常，请重试');
							 }
						 })
						 .catch(function (error) {
								 Toast.success('登录失败');
						 });
				}
	   	}
		//
	  },
	
	}
</script>

<style scoped>
	.login{
		 margin:250px auto 0px auto;
		 width: 80%;
	}
.btn{
	 margin:20px auto 0px auto;
}

</style>
