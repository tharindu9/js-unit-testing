var Circle = function (radius) {
    this.radius = radius
}
Circle.PI = 3.14

Circle.prototype = {
    area: function () {
        return Circle.PI * this.radius * this.radius;
    }
}

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }