Vue.directive('pin',function(el,binding){
	let par = binding.modifiers;
	console.log(par)
	if(binding.value){
		el.style.position = 'fixed';
		for(let key in par){
			if(par[key]){
				el.style[key] = '10px';
			}
			
		}
	}else{
		el.style.position = 'static';

	}


});



let app1 = new Vue({
	el:'.first_div',
	data:{
		card1:{
			pined :false
		}
	}




});