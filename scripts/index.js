// Store the wallet amount to your local storage with key "amount"
function getAmt(){
    return JSON.parse(localStorage.getItem('amount')) || 0
}

function addToWallet(){
    let amt= document.querySelector('#amount').value
    let amtinwall=getAmt()
    let totalAmt= Number(amt)+Number(amtinwall)
    localStorage.setItem('amount',totalAmt)
    append()
}

function append(){
    let h1=document.querySelector('#wallet')
    h1.innerHTML=getAmt()
}

append()