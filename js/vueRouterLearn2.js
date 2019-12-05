let routes = [
	{
		path:'/',
		component:{
			template:'#index_tpl'
		}
		
	},
	{
		path:'/login',
		component:{
			template:'#login_tpl'
		}
	},
	{
		path:'/post',
		component:{
			template:'#post_tpl'
		},
		children:[{
			path:'info',
			meta:{
				login_required:true
			},
			component:{
				template:`<div>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, officiis quasi ratione accusamus saepe similique fugit consectetur iure, libero excepturi, consequatur, voluptatibus optio fugiat ullam! Cum unde esse, eos numquam.
				</div>`
			}

		}]
	}

];

let router = new VueRouter({
	routes:routes

});

router.beforeEach(function (to,from,next){
	console.log(to)
	let logined = false;
	if(!logined && to.matched.some((item)=>item.meta.login_required)){

		next({path:'/login'});
		
	}else{
		next();
		
	}


});
let app1 = new Vue({
	el:'.app1',
	router:router
});