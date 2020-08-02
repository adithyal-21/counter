var i=0;
document.getElementById("display").value="0";
function color()
{
var change=document.getElementById("body");
var color=['lightgreen','lightgrey','yellow','greenyellow','orange','black','grey','lightgrey','red'];
change.style.backgroundColor=color[i];
i=i+1;
if(i>=color.length)
{
    i=0;
}
}
function increase()
{
   var count=document.getElementById("display").value;
   var no=parseInt(count);
   no=no+1;
   document.getElementById("display").value=no;
   color();
}
function decrease()
{
   var count=document.getElementById("display").value;
   var no=parseInt(count);
   no=no-1;
   document.getElementById("display").value=no;
   color()
}
function reset()
{
    document.getElementById("display").value="0";
    
}