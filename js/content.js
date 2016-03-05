


function checkAllLinks(){
  var anchorTags = document.getElementsByTagName('a');
  var i;
  var links = [];

for(i = 0; i < anchorTags.length; i++){
  if (absoluteUrl(anchorTags[i].href)) {
      links.push(anchorTags[i].href);
    }
  }

sendAjaxRequest(links);

}


function absoluteUrl(url){
  // returns boolean indicating if its a valid url or not
return /^https{0,1}:\/\/\S+$|^\/\/\S+$/.test(url);
}


function sendAjaxRequest(links){
  var jsonstring = JSON.stringify(links);
  var xhr = new XMLHttpRequest();
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