/**
 
 */

// POV

function pov(number, degree) {
    var result = 1;
    for (var i = 0; i < degree ; i++) {
        result = result * number;
    }
    return result;
}