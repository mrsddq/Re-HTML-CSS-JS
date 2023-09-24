function Vehicle(numWheels, price) {
	this.numWheels = numWheels;
	this.price = price;
	// this.getPrice = function(){
	// 	return this.price;
	// }
	
}

Vehicle.prototype.getPrice = function() {
		return this.price;
	};

var vehicle1 = new Vehicle(2,50000);
var vehicle2 = new Vehicle(4,500000);



//Console
// vehicle1
// Vehicle {numWheels: 2, price: 50000}
// vehicle2
// Vehicle {numWheels: 4, price: 500000}
// vehicle2.getPrice();
// 500000
// Vehicle.prototype
// {getPrice: ƒ, constructor: ƒ}
// getPrice
// : 
// ƒ ()
// constructor
// : 
// ƒ Vehicle(numWheels, price)
// [[Prototype]]
// : 
// Object
// Vehicle.prototype.color = "black";
// 'black'
// Vehicle.prototype
// {color: 'black', getPrice: ƒ, constructor: ƒ}
// vehicle1.color
// 'black'
// vehicle2.color
// 'black'