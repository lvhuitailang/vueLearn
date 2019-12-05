let routes = [{
	path:'/',
	component:{
		template:'#page_one'
	}

},{
	path:'/userHome/:username',
	component:{
		template:'#page_two'},
	children:[
		{
			path:'more',
			component:{
				template:'#page_two_more'
			}
			
		}

	]

}];

let router = new VueRouter({
	routes:routes
});

let app1 = new Vue({
	el:'.app1',
	router:router
});