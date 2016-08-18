  function myFunction() {
        var y = document.getElementById("fnumber").value;
        var x = document.getElementById("snumber").value;
        if(parseInt(y)<=parseInt(x)){
        document.getElementById("demo").innerHTML = x;
        }
        else
        {
        document.getElementById("demo").innerHTML = y;
        }
       }