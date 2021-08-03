// Carne -400 g por homem + de 6 horas 650 g
// Mulher 300 g + de 6 horas 500g 
// Cerveja 1200ml por homem e 600 ml por mulher + de 6 horas 1500ml para homem e 600ml por mulher
// refrigerante - 1000 ml por pessoa + de 6 horas 1500 ml 

//crianca vale por 0,5

let inputHomens = document.getElementById("homens");
let inputMulheres = document.getElementById("mulheres");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("Calculando")

    let homens = inputHomens.value;
    let mulheres = inputMulheres.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qtdcarne = carnePP(duracao) * homens +(carnePP(duracao) / 2 *criancas) + carnePPM(duracao) * mulheres;
    let qtdcerveja = cervejaPP(duracao) * homens + cervejaPPM(duracao) * mulheres;
    let qtdrefrigerante = refrigerantePP(duracao) * homens +(refrigerantePP(duracao) / 2 *criancas) + refrigerantePP(duracao) * mulheres;

    resultado.innerHTML = `<h2 class ="result-info">Você vai precisar de:</h2>`;

    resultado.innerHTML += `
    <div class="result-block">
    <img src="./assets/steak.png"/>
    <p>${qtdcarne / 1000} Kg de Carne</p>
    </div>
    `

    resultado.innerHTML += `
    <div class="result-block">
    <img src="./assets/beer.png"/>
    <p>${Math.ceil(qtdcerveja / 355)} latas de Cerveja</p>
    </div>
    `

    resultado.innerHTML += `
    <div class="result-block">
    <img src="./assets/refrigerantes.png"/>
    <p>${Math.ceil(qtdrefrigerante / 2000)} garrafas de Bebidas</p>
    </div>
    `
}

function carnePP(duracao){
    if (duracao >= 6){
        return 650
    }else{
        return 400
    }
}

function carnePPM(duracao){
    if (duracao >= 6){
        return 500
    }else{
        return 300
    }
}

function cervejaPP(duracao){
    if (duracao >= 6){
        return 1500
    }else{
        return 1200
    }
}

function cervejaPPM(duracao){
    if (duracao >= 6){
        return 400
    }else{
        return 600
    }
}
function refrigerantePP(duracao){
    if (duracao >= 6){
        return 1500
    }else{
        return 1000
    }
}

function limpar(){
    resultado.innerHTML = inputHomens.value = '';
    resultado.innerHTML = inputMulheres.value = '';
    resultado.innerHTML = inputCriancas.value = '';
    resultado.innerHTML = inputDuracao.value = '';
}




