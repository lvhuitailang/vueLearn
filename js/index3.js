
Vue.component('mytemp1',{
	template:'<h1>哈哈</h1>'

});
let app1 = new Vue({
	el:'.div1'

});

let localComponet = {
	template:'<h2>局部组件</h2>'
}
let app2 = new Vue({
	el:'.div2',
	components:{
		'mytemp2':localComponet
	}

});

let localComponet2 = {
	props:['name'],
	template:'<li>name:{{name}}</li>'
}
let app3 = new Vue({
	el:'.div3',
	components:{
		'mytemp3':localComponet2

	},
	data:{
		user:[{'name':'wolfie'},{'name':'xhh'}]
	}


});