document.addEventListener('DOMContentLoaded', function() {
  var lis = document.querySelectorAll('li');

  for (var i = 0; i < lis.length; i++) {
  	lis[i].addEventListener('click', function() {
  		alert(this.id);
  	});
  }
}, false);