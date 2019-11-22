let vue = new Vue({
	el: '.first_div',
	data: {
		header1:'first',
		header2:'second',
		header3:'third',
		title:new Date().toLocaleString()

	},
	methods:{
		titleFun:function(){
			return new Date().toLocaleString()
		}

	}

});

let app2 = new Vue({
	el:'.second_div',
	data:{
		use:false

	}


});
let app3 = new Vue({
	el:'.third_div',
	data:{
		message:'hello, my name is haha!'

	},
	methods:{
		reverse:function(){
			this.message = this.message.split('').reverse().join('');
		}

	},
	filters:{
		filterA:function(val){
			return val.toUpperCase();
		},
		filterB(val){
			return val.length;
		}


	}


});

let app4 = new Vue({
	el:'.fourth_div',
	data:{
		show:false

	}


});
let app5 = new Vue({
	el:'.fifth_div',
	data:{
		nameList:['wolfie','xhh','xiaoming'],
		userObj:{
			name:'wolfie',
			age:19,
			gender:'male'
		}
	}

});

