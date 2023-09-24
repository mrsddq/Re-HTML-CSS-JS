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

/*vehicle1
Vehicle {numWheels: 2, price: 50000}numWheels: 2price: 50000[[Prototype]]: Object
vehicle1.__proto__ === Vehicle.prototype
true
Object.getPrototypeOf(vehicle1)
{getPrice: ƒ, constructor: ƒ}
getPrice
: 
ƒ ()
constructor
: 
ƒ Vehicle(numWheels, price)
[[Prototype]]
: 
Object*/
/*Vehicle.prototype.isPrototypeOf(vehicle1)
true
vehicle1.hasOwnProperty('price');
true
vehicle1.hasOwnProperty('getPrice');
false*/
/*Vehicle.prototype.color = 'black';
'black'
Vehicle.prototype
{color: 'black', getPrice: ƒ, constructor: ƒ}
vehicle1.color
'black'
vehicle2.color
'black'
vehicle1.color = "white";
'white'
vehicle1.color
'white'
vehicle2.color
'black'
vehicle1.hasOwnProperty('color')
true
vehicle2.hasOwnProperty('color')
false*/