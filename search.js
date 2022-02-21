function storeSearchterm(term,parent) {

    term.forEach(function(el){

        var div = document.createElement("div")

        var head = document.createElement("h1")
        head.textContent=el.content

        var des = document.createElement("p")
        des.textContent=el.description

        var img = document.createElement("img")
        img.src=el.urlToImage

        div.append(head,des,img)
         
        parent.append(div)

    })


}

export default storeSearchterm