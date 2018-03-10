//function to insert file content into a DOM element
function fromfile(ID, filepath){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",filepath,true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById(ID).innerHTML=this.responseText;
    }
  };
}