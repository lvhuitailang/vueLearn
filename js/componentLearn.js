Vue.component('alert',{
	template:'<button @click=on_click>Click Me!</button>',
	methods:{
		on_click:function(){
			alert('Yo!');
		}
	}



});
let app1 = new Vue({
	el:'.app1'


});
let app2 = new Vue({
	el:'.app2',
	components:{
		'alert2':{
			template:'<button @click=on_click>Click Me!</button>',
			methods:{
				on_click:function(){
					alert('Wow!');
				}
			}
		}
	}

});
Vue.component('like',{
	template:`<button @click="toggle_click">赞{{like_count}}</button>`,
	data:function(){
		return {
			like_count:10,
			clicked:false
		}
	},
	methods:{
		toggle_click:function(){
			this.clicked?this.like_count--:this.like_count++;
			this.clicked = !this.clicked;
		}
	}



})
let app3 = new Vue({
	el:'.app3'

});

Vue.component('user',{
	template:'<a :href="\'/user/\'+username">@{{username}}</a>',
	props:['username'],



});
let app4 = new Vue({
	el:'.app4',
	data:{
		username:'wolfie'
	}
});
Vue.component('show',{
	template:`
		<div>
			<clickShow @showMoney="show_money"></clickShow>
			<div v-if="show">你的余额是{{money}}</div>

		</div>

	`,
	data:function(){
		return {
			show:false
		}
	},
	methods:{
		show_money:function(data){
			this.money = data.money;
			this.show=true;
		}
	}


});
Vue.component('clickShow',{
	template:`
		<button @click="on_click">显示余额</button>

	`,
	methods:{
		on_click:function(){
			this.$emit('showMoney',{money:100});
		}
	}


});
let app5 = new Vue({
	el:'.app5'
});


