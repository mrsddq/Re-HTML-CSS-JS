var promise = new Promise((resolve,reject) => {
resolve("Yay promise fulfilled");
reject("Something went wrong");
});
console.log(promise);

var promise = new Promise((resolve,reject) => {
	setTimeout(() => {
		resolve({ message: 'success'});
	}, 3000);
});

promise.then((data) => {
	console.log(data);
});

var promise = new Promise((resolve,reject) => {
	setTimeout(() => {
		reject({ message: 'error'});
	}, 3000);
});

promise
	.then((data) => {
		console.log(data);
}).catch((error) => {
		console.log(error);
});