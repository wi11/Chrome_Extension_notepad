document.addEventListener("DOMContentLoaded", function(){

    if(typeof localStorage["inputText"] !== "undefined")
        document.getElementById("textdata").innerHTML = localStorage["inputText"];

    document.getElementById("textdata").addEventListener("mouseout", function(){
        localStorage["inputText"] = document.getElementById("textdata").value;
    });
});
