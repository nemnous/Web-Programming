var first;
var last;

function gridfunc() {
    first = document.getElementById("fname").value;
    last = document.getElementById("lname").value;
    var k = 1;
    for(var i=0;i<3;i++){
      for(j=0;j<3;j++){
        var btn = document.createElement("BUTTON");
        btn.setAttribute("id","btnid"+k);
        btn.setAttribute("value", "0");
        // btn.setAttribute('onclick','disp(this);');
        var t = document.createTextNode(k++);
        btn.appendChild(t);
        document.getElementById("game").appendChild(btn);
    }
        document.getElementById("game").innerHTML += "<br>";
  }