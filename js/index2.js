let app1 = new Vue({
	el:'.div1',
	data:{
		sourceNum:''
	},
	computed:{
		addTen:function(){
			if(!this.sourceNum || this.sourceNum == '' || isNaN(this.sourceNum)){
				return '';
			}else{
				return parseFloat(this.sourceNum)+10;
			}

		}


	}


});
let app2 = new Vue({
	el:'.div2',
	data:{
		message:'',
		info:''

	},
	watch:{
		message:function(newVal,oldVal){
			this.info = oldVal+'-->'+newVal
		}
	}


});
/*app2.$watch('message',function(newVal,oldVal){
	app2.info = oldVal+'-->'+newVal

});*/