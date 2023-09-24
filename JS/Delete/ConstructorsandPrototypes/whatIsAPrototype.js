function Vehicle(numWheels, price) {
	this.numWheels = numWheels;
	this.price = price;
	this.getPrice = function(){
		return this.price;
	}
}
var vehicle1 = new Vehicle(2,50000);
var vehicle2 = new Vehicle(4,500000);

// vehicle1
// Vehicle {numWheels: 2, price: 50000, getPrice: ƒ}

// Vehicle
// ƒ Vehicle(numWheels, price) {
// 	this.numWheels = numWheels;
// 	this.price = price;
// 	this.getPrice = function(){
// 		return this.price;
// 	}
// }

// Vehicle.prototype.constructor
// ƒ Vehicle(numWheels, price) {
// 	this.numWheels = numWheels;
// 	this.price = price;
// 	this.getPrice = function(){
// 		return this.price;
// 	}
// }