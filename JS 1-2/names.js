/**
 */
// LOGIN PROGRAMME

 // Create an array
var names = [];

// Fill array with names
for (var i = 0; i < 5; i++) {
    names.push(prompt('Введите имена'));
}

// Enter the host name
var hostName = prompt('Введите Ваше имя');

// Comparing the names array
var error = false;
for (var k = 0; k < names.length; k++) {
    if (names[k] == hostName) {
        error = false;
        break;
    } else {
        error = true;
    }
}

// Access reply
if (error == true) {
    alert('Ошибка, в доступе отказано');
} else {
    alert(hostName + ', Вы успешно вошли');
}