
function verIdade(){
    anoAtual = 2025
    let ano = parseInt(document.getElementById("ano").value)
    document.getElementById("idade").innerHTML = `Sua idade é ${anoAtual - ano} `
}

let modoEscuroAtivo = false;

function Modoescuro() {
    let botao = document.getElementById("modoBotao");
    let mudarBack = document.getElementById("mudarBack");
    let section1 = document.getElementById("suaIdade")
    let section2 = document.getElementById("Pizza")
    let section3 = document.getElementById("Tabuadasmult")

    if (!modoEscuroAtivo) {
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "white";
        section1.style.backgroundColor = "Black"
        section2.style.backgroundColor = "Black"
        section3.style.backgroundColor = "Black"
        mudarBack.style.backgroundColor = "#1e1e1e";
        mudarBack.style.color = "#ffffff";


        botao.textContent = "☀️ Modo Claro";
        modoEscuroAtivo = true;
    } else {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
        section1.style.backgroundColor = "White"
        section2.style.backgroundColor = "White"
        section3.style.backgroundColor = "White"

        mudarBack.style.backgroundColor = "#f0f0f0";
        mudarBack.style.color = "#000000";



        botao.textContent = "🌙 Modo Escuro";
        modoEscuroAtivo = false;
    }
}
function tabuada(){
    let numero = parseInt(document.getElementById("numero").value)
    
        let resultado = `Tabuada do número [${numero}]:<br>`

        for(let i = 1; i <=10; i++){
            resultado += `${numero} x ${i} = ${(numero * i)} <br>`
        }

        document.getElementById("tabu").innerHTML = resultado;
    
}
function montarPizza() {
    let nomePizza = document.getElementById("nomePizza").value
    let tamanho = document.getElementById("tamanho").value
    let ingredientesSelecionados = document.querySelectorAll(".sabor:checked")
    
    let nomeExibido = document.getElementById("nomeExibido")
    let tamanhoExibido = document.getElementById("tamanhoExibido")
    let pizzaPronta = document.getElementById("pizzaPronta")

    if (nomePizza === "") {
        alert("Você esqueceu de escrever o nome pizza.")
        return
    }

    if (ingredientesSelecionados.length === 0) {
        alert("Você esqueceu de selecionar pelo menos um ingrediente .")
        return
    }

    
    let ingredientes = "";
    ingredientesSelecionados.forEach(item => {
        ingredientes += item.value + " "
    })

    nomeExibido.style.display = "block"
    tamanhoExibido.style.display = "block"

    nomeExibido.textContent = `🍕 Pizza: ${nomePizza}`
    tamanhoExibido.textContent = `📏 Tamanho: ${tamanho}`
    pizzaPronta.innerHTML = ingredientes
}
