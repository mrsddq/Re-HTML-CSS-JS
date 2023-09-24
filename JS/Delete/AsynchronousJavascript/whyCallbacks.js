//1 Method
console.log(1)

setTimeout(function(){
	console.log(2)
}, 1000)

console.log(3)

//2 Method
var promise = new Promise(function (resolve,reject){
	resolve(1);
})
promise.then(function (data){
	console.log(1);
});

console.log(1);
var promise = new Promise(function (resolve,reject){
	resolve(1);
})
promise.then(function (data){
	console.log(1);
});
console.log(3);