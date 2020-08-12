function display(val)
{
    document.getElementById('dis').value+=val;
}
function backspace()
{
    var length=document.getElementById('dis').value;
    var len=length.length;
    console.log(len);
    var leng=length.substring(0,len-1);
    document.getElementById('dis').value=leng;
}
function sum()
{
    var x=document.getElementById('dis').value;
    if(x=="")
    {

    }
    else {
        y=eval(x);
        document.getElementById('dis').value=y;

    }
}
document.getElementById('dis').onkeydown=function(event)
{
    if(event.keyCode==13)
    {
       sum();
    }
}
function clr()
    
    {
document.getElementById("dis").value="";
    }