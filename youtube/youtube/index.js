

 
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY]

// 20 result
// 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=kgf%202&key=[YOUR_API_KEY]'


// AIzaSyBWSatLE_qxsFKR1O8e-F1T8gediCTQdx8
const API="AIzaSyBWSatLE_qxsFKR1O8e-F1T8gediCTQdx8";
const searchvideos=async()=> {
    try{
        const q=document.getElementById("query").value
        // const res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}`)
        const res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}%202&key=${API}`)

        const data=await res.json()
        console.log(data.items)
        append(data.items)
    }catch(err){
        console.log(err)
    }
};

 const url=(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=IN&key=AIzaSyBWSatLE_qxsFKR1O8e-F1T8gediCTQdx8`)
 fetch (url)
 .then(function(res){
     return res.json()
 })
 .then(function(res){
     console.log(res.items)
    display(res.items)
 })
 .catch(function(err){
     console.log(err)
 })
const display=(video)=>{
    let show_videos=document.getElementById("show_videos");
video.map(({snippet:{title,thumbnails},id})=>{
    // console.log(id)
   let div=document.createElement("div");
   div.setAttribute("id","perhead_video")
    let img=document.createElement("img")
        img.src=thumbnails.default.url
        let name=document.createElement("h4")
        name.innerText=title;
        div.append(img,name)




        let data={
            title,
            id,
        }


        div.onclick=()=>{
            showmainvideo(data)
        }
        show_videos.append(div)

       


})
}
const showmainvideo=(y)=>{
console.log(y)
window.location.href="tren.html"
localStorage.setItem("trend",JSON.stringify(y));
};

const append=(videos)=>{
    let show_videos=document.getElementById("show_videos");
    show_videos.innerHTML=null;
    videos.forEach(({id:{videoId},snippet:{title,thumbnails}})=>{
        // console.log(videoId)
        let div=document.createElement("div");
        div.setAttribute("id","per_video")
        let img=document.createElement("img")
        img.src=thumbnails.default.url
       

        let name=document.createElement("h4")
        name.innerText=title;
        div.append(img,name)

        let data={
            title,
            videoId,
        };

        div.onclick=()=>{
            showvideo(data)
        };


        show_videos.append(div)
    });
};


const showvideo=(x)=>{
    // console.log(x)
    window.location.href="video.html"
    
    
    localStorage.setItem("video",JSON.stringify(x));
};












