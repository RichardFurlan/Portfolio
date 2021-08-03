function raffle(){
    let inputValue = document.getElementById("number").value;
    let raffleOne = Math.ceil(Math.random() * inputValue);
    let modal = document.getElementById("modal")

    if (modal.className === "openModal"){
        showResult(raffleOne)
    }
    else{
        openModal()
        showResult(raffleOne)
    }

}

function openModal(){
    let modal = document.getElementById("modal")
    modal.className = "openModal"
}

function showResult(result){

    let resultElement = document.getElementById("result")
    resultElement.innerText = "..."
    setTimeout(()=>{
        resultElement.innerText = result
    }, 300)
}

function closeModal(){
    let modal = document.getElementById("modal")
    modal.className = "closedModal";
}



