var circle =require('./circle_object')


var Car = function(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
  }

  Car.prototype.getName = function(){
      return this.name;
  }
  Car.prototype.getModel = function(){
    return this.model;
}
var myCar = new Car("suzuki","shift",2020)
var carName = myCar.getName();
console.log(carName)
console.log(myCar)

var HonadaCar = function(){
   this.brand = "Honda";
}

HonadaCar.prototype = new Car("new car", "new model", 2020);
HonadaCar.prototype.speed = function(){
    return this.model;
}
var hc = new HonadaCar();
var hondaSpeed = hc.getModel();
console.log("< honda speed :::: ",hondaSpeed)

class Cal {
    sayHello(){
        return 'hello';
    }

    addNum(num1 , num2) {
        return num1 + num2;
    }

    subNum(num1 , num2){
        if(num1 > num2){
            return num1 - num2;
        }
        else{
            return num2 - num1;
        }
    }

    mulNum(num1, num2){
        return num1*num2;
    }

    devNum(num1,num2){
        return num1/num2;
    }

    calOparations(num1 , num2 , oparation){
        if (oparation === 'add') {
            this.addNum(num1 , num2)
        }
        else if (oparation === 'sub'){
            subNum(num1,num2)
        }
        else if (oparation === 'mul'){
            mulNum(num1,num2)
        }
        else {
            devNum(num1 , num2)
        }
    }
    x = 0;
    func1(num){
        var innerVar = 10;
        var that = this
        var innerFunction = function(){
        }
        innerFunction()
    }
    
}

var claObj = new Cal()

var func1 = function(num){
    var innerVar = 10;
    var innerFunction = function(){
    }
    innerFunction()
}
func1(5);

var arr = [3,5]

var add = function(arg1, arg2){
    return arg1+arg2;
}
module.exports = Cal;

