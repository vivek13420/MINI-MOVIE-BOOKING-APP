// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let id

function getAmt(){
    return JSON.parse(localStorage.getItem('amount')) 
}

function append(){
    let h1=document.querySelector('#wallet')
    h1.innerHTML=getAmt()
}

append()


let movies_div = document.querySelector("#movies")

async function searchMovies() {

    try {
        const query = document.querySelector('#search').value

        let res = await fetch(`https://www.omdbapi.com/?apikey=415e5477&s=${query}`)

        let data = await res.json()
        console.log(data.Search);

        // appendMovies(data.Search)
        return data.Search

    } catch (error) {
        console.log(error);
    }

}

function appendMovies(data) {

    movies_div.innerHTML = null

    data.forEach(element => {
        let div= document.createElement('div')

        let image=document.createElement('img')
        image.src=element.Poster
        
        let p = document.createElement('p')
        p.innerText = element.Title

        let button = document.createElement('button')
        button.innerHTML='Book Now'
        button.setAttribute('class','book_now')
        button.addEventListener('click',function(){
            book(element)
        })

        div.append(image,p,button)

        movies_div.append(div)
    });

}

function book(element){
    // console.log(element);
    localStorage.setItem('movie',JSON.stringify(element))
    window.location.href='checkout.html'
}

async function main() {

    let data = await searchMovies()

    if (data == undefined) {
        return false
    }

    appendMovies(data)
    // console.log(data);

}


function debounce(func,delay){
    if (id) {
        clearTimeout(id)
    }

   id= setTimeout(() => {
        func()
    }, delay);

}