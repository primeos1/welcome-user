init();
//here the value is stored
function myFunction() {
var x=document.getElementById("amounts").value;
document.getElementById("demo").innerHTML=x;
var y =Math.round (x / 500);

document.getElementById("unedi").value=y;
var a = document.getElementById("uned").value;
var z = (y+a*1);
document.getElementById("uned").value=z;
var d =document.getElementById("inpu").value;
    var c = ((d*1) + (x*1));
    document.getElementById("inpu").value=c;
    if (y>=1)
    {
        alert("congratulation you get  "+(x / 500)+"  points")
    }
}

/*if (x==500)
{
    var y = 0;
    y++;
    document.getElementById('unedi').value = y;
}
else if(x<=499){
    prompt("thanks for your donation, but you wont get a reward point")
    
}


function init() {
   x=0;
   y=o;

}
var y = 0;
function myFunctions(){
    y++;
    document.getElementById('unedi').value = y;
}*/