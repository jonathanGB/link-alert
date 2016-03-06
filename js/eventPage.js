//**** THIS IS BACKGROUND

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){


links = JSON.parse(message);
var command = message.pop();

switch(command){

	case 'compare':
		var matchedLinks = [];
		for(var i = 0; i < links.length; i++){
			if(StorageArea.get(links[i]) == 1){
				matchedLinks.push(i);
			} 
		}
		//*** IS THIS CORRECT WAY TO SEND RESPONSE BACK TO THE CALLBACK?
		sendResponse(JSON.stringify(matchedLinks));
		break;


	case 'add':
		//**** add link to database -> key = url, value = 1 *****//
		// TEST TO SEE IF IT GETS ADDED PROPERLY
		chrome.storage.local.set({message, 1})
		break;

	default:
	// **** implement default value here or something
	}
}