// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import nav from "../components/navbar.js"

document.getElementById("nav_div").innerHTML = nav();


   
let search = (e) =>{

    if(e.key ==='Enter')
    {
        searchNew() 
    }
}

let searchNew = async()=>{
  
    try{

        let query = document.getElementById("search_input").value;

        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);

        let data = await res.json();
        console.log(data)

         append(data.articles)


    }
    catch(err){
        
        console.log("err:",err);
    }
     
}
document.getElementById("search_input").addEventListener("keydown",search);

function append(data){

    data.forEach(function(el){

          let box1 = document.createElement("div");
          box1.setAttribute("class",'news')
          box1.addEventListener("click", function(){
               shownews(el)
          })

          let image = document.createElement("img");
          image.src = el.urlToImage

          let box2 = document.createElement("div");

          let title = document.createElement("h4");
          title.innerHTML = el.title

          let newTitle = document.createElement("p")
          newTitle.innerHTML=el.description

          box2.append(title,newTitle);
          box1.append(image,box2);
          


          document.getElementById("results").append(box1);
    })
}


function shownews(el)
{
    localStorage.setItem("news",JSON.stringify(el));
    document.location.href="news.html"

}
   