let button = document.getElementById("toggleEdit");
  var i = 1;
function toggle(){
  i++;
  i %= 2;
}
if(i==1){
var body = document.getElementsByTagName("body")
for (elt of body){
    elt["contentEditable"] = "true"
}
}
