function add() {
  var data = {
    command: "add",
    sender: "popup",
    list: []
  };

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, JSON.stringify(data), function(response) {
      console.log(response);
    });
  });
}

function run() {
  var data = {
    command: "run",
    sender: "popup",
    list: []
  };
  
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, JSON.stringify(data));
  });
}

function view() {
	var data = {
    command: "view",
    sender: "popup",
    list: []
  };

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, JSON.stringify(data));
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var lis = document.querySelectorAll('li');

  for (var i = 0; i < lis.length; i++) {
  	lis[i].addEventListener('click', function() {
  		window[this.id] === undefined ?
        alert('not existing'):
        window[this.id]();
  	});
  }
}, false);


function sendAjaxRequest(links){
  var jsonstring = JSON.stringify(links);
  var xhr = new XMLHttpRequest();
  jsonstring = "penis";
  xhr.open("GET", "https://link-alert.herokuapp.com?list="+jsonstring, true);


  xhr.onreadystatechange = function() {
    
    if (xhr.readyState == 4) {

      if (xhr.status == 200) {
        alert(xhr.responseText);
        var serverAnswer = JSON.parse(xhr.responseText);
        // manipulate this to verify if links are on blocked list or not

        } else {
          alert('Error - Did not get status 200');
        }

      }

    }
    xhr.send();
  }