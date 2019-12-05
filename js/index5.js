/*function sleep(ms){
	let p = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve('success!')},ms);
	});
	return p;


}
console.log('A');
sleep(1000).then((msg)=>{console.log(msg)});
console.log('B');*/

/*function say(){
	let p = new Promise((resolve,reject)=>{
		let age = 23;
		setTimeout(()=>{
			resolve('I\'m '+age+' years old.');
		},1000)


	});
	return p;


}

async function demo(){
	let res = await say();
	console.log(res)


}
demo();
*/
function hello(){
	setTimeout(()=>{
		console.log(111);
	},2000)
}
async function sayOut(){
	let res = await hello();
	console.log('说话结束')
}
sayOut();
console.log('程序结束')