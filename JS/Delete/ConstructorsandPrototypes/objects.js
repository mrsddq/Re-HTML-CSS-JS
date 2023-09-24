function Vehicle(numWheels, price) {
	this.numWheels = numWheels;
	this.price = price;
	this.getPrice = function(){
		return this.price;
	}
}
var vehicle1 = new Vehicle(2,50000);
var vehicle2 = new Vehicle(4,500000);

/*Object
ƒ Object() { [native code] }
Object.prototype
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
var obj = new Object();
undefined
obj
{}[[Prototype]]: Object
Object.getPrototypeOf(obj);
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
Object.prototype.isPrototypeOf(obj);
true
vehicle1
Vehicle {numWheels: 2, price: 50000, getPrice: ƒ}
getPrice
: 
ƒ ()
numWheels
: 
2
price
: 
50000
[[Prototype]]
: 
Object
Vehicle.prototype
{constructor: ƒ}
constructor
: 
ƒ Vehicle(numWheels, price)
[[Prototype]]
: 
Object
vehicle1.color
undefined
Object.prototype.color = 'black';
'black'
var obj
undefined
var obj = {};
undefined
obj.color
'black'
vehicle1.color
'black'*/
