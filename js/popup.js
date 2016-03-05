function add() {
	alert('hello add');
}

function run() {
	alert('runnnning');
}

function view() {
	alert('this view');
}

document.addEventListener('DOMContentLoaded', function() {
  var lis = document.querySelectorAll('li');

  for (var i = 0; i < lis.length; i++) {
  	lis[i].addEventListener('click', function() {
  		window[this.id] === undefined ?
  			window[this.id]() :
  			alert('not existing');
  	});
  }
}, false);