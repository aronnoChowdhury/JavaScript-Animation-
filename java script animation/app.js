function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "pic_bulboff.gif"
  } else {
    pic = "pic_bulbon.gif"
  }
  document.getElementById('myImage').src = pic;
}

function lightOn(){
    document.getElementById('btn1').innerHTML = "On" ;
    document.getElementById('btn1').style.background = "yellow";
}

function lightOff(){
    document.getElementById('btn2').innerHTML = "Off" ;
    document.getElementById('btn2').style.background = "yellow";
}
function on(){
    document.getElementById("on").innerHTML = "The Light is ON 💡";
}

function off(){
    document.getElementById("on").innerHTML = "The Light is OFF";
}
