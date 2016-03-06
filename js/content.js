


function checkAllLinks(){
  var anchorTags = document.getElementsByTagName('a');
  var i;
  var links = [];
  var anchorRefs = [];

for(i = 0; i < anchorTags.length; i++){
  if (absoluteUrl(anchorTags[i].href)) {
      links.push(anchorTags[i].href);
      anchorRefs.push(anchorTags[i]);

    }
  }

  sendAjaxRequest(links, anchorRefs);
}



function checkOneLink(url){
//******* figure out how to capture link with right click -> Make sure to store it as list before calling sendAjax *******//


sendAjaxRequest(url, anchorRef);
}



function absoluteUrl(url){
  // returns boolean indicating if its a valid url or not
return /^https{0,1}:\/\/\S+$|^\/\/\S+$/.test(url);
}


function sendAjaxRequest(links, anchorRefs){
  var jsonstring = JSON.stringify(links);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://link-alert.herokuapp.com/gettingSourceLinks?list="+jsonstring, true);


  xhr.onreadystatechange = function() {
    
    if (xhr.readyState == 4) {

      if (xhr.status == 200) {
        alert(xhr.responseText);
        var serverAnswer = JSON.parse(xhr.responseText);

        // 
        colorBadLinks(serverAnswer.list, anchorRefs);

        } else {
          alert('Error - Did not get status 200');
        }

      }

    }
    xhr.send();
}


// will color bad links a color
function colorBadLinks(links, anchorRefs){

  var badLinksIndexArray = compareLinksWithDB(links);

  // if no matching links -> no bad links
  if (badLinksIndexArray.length == 0) { 
    return;
  } 
  else{
    for(var i = 0; i < badLinksIndexArray.length; i++){
      anchorRefs[badLinksIndexArray[i]].style.color = "red";
    }

  }

}


// Returns an index array of matching links in the DB -> to access matching links do for loop anchorRefs[indexArray[i]];
function compareLinksWithDB(links){
    links.push("compare");
    chrome.runtime.sendMessage(JSON.stringify(links), function(matchedLinks){
      return JSON.parse(matchedLinks);
    });
}



function addLinkToDB(link){
    //***** IMPLEMENT THIS ****//
    //select and right click options -> extract url
    //not sure about parameter for this

    //once extracted, do this:
  if(absoluteUrl(url)){
    var validLink = [];
    validLink.push(url);
    validLink.push("add");
    chrome.runtime.sendMessage(JSON.stringify(validLink), function(addResponse){

      

      });

    } 
    else {
      alert('Invalid URL - did not add to bad links');
  }
}