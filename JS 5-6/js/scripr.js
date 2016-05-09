var startBtn = document.querySelector('.start-btn');
var stopBtn = document.querySelector('.stopt-btn');
var currentCount;

	function handler() {
		console.log('it works!')
	};

	startBtn.addEventListener('click', startTimer );
	stopBtn.addEventListener('click', stopTimer );
  
// counting clicks on btn start

 function makeCounter() {
      var currentCount = 1;
 	  return function() { 
        return currentCount++;
      };
    }

var counter = makeCounter(); 

	function click2 () {
			console.log('2 times')
		}

	function click1 () {
		if (counter() === 2) {
			click2();
			;
		} else {
			console.log(counter());
		}
	};

// timer 
var miliseconds = document.querySelector('.miliseconds');	
var seconds = document.querySelector('.seconds');
var minutes = document.querySelector('.minutes');

console.log(seconds)

	var milisecond = function milisecondRun () {
		var i = 1;
		var timerId = setInterval(function() {
			console.log(i);
			if (i === 1000) return(i = 1);
			if (stopTimer === false) return(i);
			miliseconds.innerHTML = i;
			i++;
		}, 1);

	};

	var second = function secondRun () {
		var i = 1;
		var timerId = setInterval(function() {
			console.log(i);
			if (i === 60) return(i = 1);
			i++;
			seconds.innerHTML = i;
		}, 1000);	
	};

	var minute = function minuteRun () {
		var i = 1;
		var timerId = setInterval(function() {
			console.log(i);
			if (i === 60) return(i = 1);
			i++;
			minutes.innerHTML = i;
		}, 60000);	
	};

	function startTimer () {
		milisecond ();
		second ();
		minute ();
	}

	function clearTimer () {
		clearTimeout
		milisecond ();
		second ();
		minute ();
	}

	function stopTimer () {
		stopTimer = 1
		console.log(milisecond.i)
	}