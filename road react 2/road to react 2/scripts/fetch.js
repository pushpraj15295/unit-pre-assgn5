let searchImages = async (API,value) =>{
    try{
        let res = await fetch(`https://api.unsplash.com/search/photos/?query=${value}&order_by=latest&content_filter=high&per_page=20&client_id=${API}`);
       
        let data = await res.json();
        // console.log(data);
        return data
    }
    catch(err){
        console.log(err)
    }
};

let append = (data,container) =>{
    
    data.forEach(({alt_description,urls:{small}})=>{
           let box = document.createElement('div');
           box.setAttribute('class',"image")
           let img = document.createElement("img")
           img.src = small;

           let h3 = document.createElement("h3");
           h3.innerText = alt_description;
           box.append(img,h3);
           container.append(box)
    })
}

export { searchImages, append};