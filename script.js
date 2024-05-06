let B1= document.querySelector("button");
let output= document.querySelector("#Booking");
B1.addEventListener("click", function(e){
    output.innerHTML="Booking confirmed. I am not asking your time rather booking you for 9am";
    output.style.backgroundColor = "red";
}) 

