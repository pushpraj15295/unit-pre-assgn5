var carddata = JSON.parse(localStorage.getItem('items'))||[];

carddata.forEach(function (elem,index) {

    let box = document.createElement("div");

    let image = document.createElement("img");
    image.src = elem.image
    
    let name = document.createElement("h4")
    name.innerHTML=elem.name

    let price = document.createElement("p")
    price.innerHTML=elem.price

    let btn = document.createElement("button")
    btn.innerHTML= "remove"
    btn.addEventListener("click",function(){
        remove(elem,index)
       
    })

     box.append(image,name,price,btn)
    document.getElementById("cart").append(box)

})


 var total = carddata.reduce(function(sum,elem,index){

      return sum + Number(elem.price)
 },0)

 var z= ducument.getElementById("cart_total");
 z.innertext = total

function remove(elem, index){
  
   carddata.splice(index,1)
   localStorage.setItem("items",JSON.stringify(carddata))
   window.location.reload();

}