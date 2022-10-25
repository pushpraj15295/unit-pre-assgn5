// Store cart items in local storage with key: "items"

const url = `https://grocery-masai.herokuapp.com/items`;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    console.log("res:", res);
    appendData(res.data)
  })
  .catch(function (err) {
    console.log("err:", err);
  });

// Each item should show its name, image, price and add to cart button.
  function appendData(data) {

       data.forEach(function (elem) {

           let box = document.createElement("div");

           let image = document.createElement("img");
           image.src = elem.image
           
           let name = document.createElement("h4")
           name.innerHTML=elem.name

           let price = document.createElement("p")
           price.innerHTML=elem.price

           let btn = document.createElement("button")
           btn.innerHTML= "add_to_cart"
           btn.setAttribute("id","add_to_cart")
           btn.addEventListener("click",function(){
                 addtocart(elem)
              
           })

            box.append(image,name,price,btn)
           document.getElementById("items").append(box)

       })
  }
    var  array=JSON.parse(localStorage.getItem("items"))||[]  

   function addtocart(elem){

     array.push(elem);
    
   
     let x= document.getElementById("item_count")
     x.innerText= array.length;

     localStorage.setItem("items",JSON.stringify(array));
    
   }