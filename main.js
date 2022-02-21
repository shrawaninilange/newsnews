async function apiCall(url) {


    //add api call logic here



    try {
        
       var res = await fetch(url)
       var data = await res.json()
       return data
    } catch (error) {
        console.log(error)
        
    }


}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach(function(el){

        var div = document.createElement("div")

        var img = document.createElement("img")
        img.src=el.urlToImage

        var p = document.createElement("p")
        p.textContent=el.title

        var p1 = document.createElement("p")
        p1.textContent=el.description

        var head = document.createElement("h1")
        head.textContent=el.content

        var head1 = document.createElement("h6")
        head1.textContent=el.publishedAt





        div.append(img,p,p1,head,head1)
        div.onclick= () =>{
            
            localStorage.setItem("article",JSON.stringify(el))
            window.location.href="news.html"
        }
         
     
        main.append(div)
         

    })

}

export { apiCall, appendArticles }