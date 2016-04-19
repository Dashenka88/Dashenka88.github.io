/**
 
 */

// POV
var number = prompt('Enter number');
var degree = prompt('Enter degree');

function pov(number, degree) {
    var result = 1;
    for (var i = 0; i < degree ; i++) {
        result = result * number;
    }
    return result;
}
alert(number + ' в степени ' + degree + ' равно : ' + (pov(number, degree)));