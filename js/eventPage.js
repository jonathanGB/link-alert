//**** THIS IS BACKGROUND

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){

var parsedMessage = JSON.parse(message);
var messageSender = parsedMessage.sender;
var messageCommand = parsedMessage.command;
var messageList = parsedMessage.list;
console.log(messageSender);
if(messageSender == "content"){
	if (messageCommand === 'compare') {
		var matchedLinks = [];
		for(var i = 0; i < messageList.length; i++){
			if(StorageArea.get(messageList[i]) == 1){
				matchedLinks.push(i);
			} 
		}
		//*** IS THIS CORRECT WAY TO SEND RESPONSE BACK TO THE CALLBACK?
		sendResponse(JSON.stringify(matchedLinks));
	} else if (messageCommand === 'add') {
		//**** add link to database -> key = url, value = 1 *****//
		// TEST TO SEE IF IT GETS ADDED PROPERLY
		alert('finally got to DB');
		debugger;
		var key = messageList[0].toString();
		var pair = {};
		pair[key] = 1;

		chrome.storage.sync.set(pair, function() {
			debugger;
			chrome.storage.sync.get(key, function(val) {
				debugger;
				console.log(val);
				sendResponse(JSON.stringify({sucess: true}));
			});
		});
	} else if (messageCommand === 'view') { 
		chrome.storage.sync.get(null, function(items) {
			debugger;
		    sendResponse(JSON.stringify(items));
		});
	} else {
		sendResponse(JSON.stringify({sucess: false}));
	}
} else if (messageSender == "popup"){
	//
}

});