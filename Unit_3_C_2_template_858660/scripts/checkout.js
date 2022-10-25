document.querySelector("#check").addEventListener("click", function(){

  event.preventDefault();
       
})



function Ssubmit(){

    alert("Your order is accepted ")

    setTimeout(function(){
    
        alert("Your order is being Packed ")
    },3000)
    setTimeout(function(){
    
        alert("Your order is in transit ")
    },8000)

    setTimeout(function(){
    
        alert("Your order is out for delivery ")
    },10000)
    setTimeout(function(){
    
        alert("Order delivered ")
    },12000)
}