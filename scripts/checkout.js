// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

function getAmt() {
    return JSON.parse(localStorage.getItem('amount'))
}

function append() {
    let h1 = document.querySelector('#wallet')
    h1.innerHTML = getAmt()
}

append()


let movie_div = document.querySelector("#movie")

function appendMov() {
    let movie = JSON.parse(localStorage.getItem('movie'))

    let image = document.createElement('img')
    image.src = movie.Poster

    let p = document.createElement('h2')
    p.innerText = movie.Title

    movie_div.append(p,image)
}

appendMov()

function confirm(){
    let input= document.querySelector('#number_of_seats').value
    
    let inputAmt= Number(input)*100
    // console.log(inputAmt);

    let wallet=getAmt()

    if (inputAmt>wallet) {
        alert('Insufficient Balance!')
    }
    else{
        wallet-=inputAmt
        localStorage.setItem('amount',JSON.stringify(wallet))
        alert('Booking successful!')
        append()
    }
}