// // primeira aula de java
// var  idade = 18
// var primeira_nome = "Aline"
// document.writeln("Meu nome é" + primeira_nome+ "Minha idade é "+idade+" anos")
// //outra forma de escrever 
// document.writeln(`meu nome é ${primeira_nome} e minha idade é ${idade}`)
// console.log(idade)
// //atividade 1


// //Aula 4 

// var frutas = ["Maçã","Banana","Laranja","Uva","Abacaxi"]
// document.writeln(frutas)
// document.writeln(`A fruta que você definiu no índice é ${frutas[2]}<br>`)
// document.writeln(`O tamanho do seu array é ${frutas.length}`)

// let comercio = ["Arroz","feijão","macarrão","carne","leite","manteiga","óleo","batata","tomate","Alface"]

// for(let i =0; i <comercio.length; i ++){
//     document.writeln(comercio[i])
// }
// let pessoa = 
//     [
//         {
//             nome: "Aline",
//             profissao: "dev",
//             idade: 18
//         },
//         {
//             nome: "Bernado",
//             profissao: "programador",
//             idade: 19
//         }
        
//     ]
//     console.log(pessoa, idade)



//Aula 5

// feito totalmente por jaison tarefa 1
// function triangulo(a, b, c) {
//     if(!(a > 0 && b > 0 && c > 0)) {
//         return document.writeln('Não é um triângulo')
//     }

//     if (a == b && b == c) {
//         return document.writeln('Equilátero')
//     } else if (a == b || b == c ||  a == c) {
//         return document.writeln('Isósceles')
//     } else {
//         return document.writeln('Escaleno')
//     }
// }

// let a = 10
// let b = 6
// let c = 7

// triangulo(a, b, c)
// Funções Arrow
// const soma = (x,y) => x+y
// const mult = (x,y) => x*y
// const div = (x,y) => x/y
// const sub = (x,y) => x-y

// document.writeln(sub(4,5))
// document.writeln(mult(4,5))
// document.writeln(soma(4,5))
// document.writeln(div(4,5))

// Tarefa 2 
// const idade = (anoAtual,nasci) => anoAtual - nasci
// document.writeln(idade(2025,2007))

//tarefa 3 
//utilizando o resto da divisão para resolver essa questão.
    // function ehPalindromo(n){
    //     let original = n;
    //     let invertido = 0;

    //     while(n > 0){
    //         let resto = n % 10;
    //         invertido = invertido * 10 + resto
    //         n = (n - resto)/10;
    //         document.writeln(`${resto} resto`)
    //         document.writeln(`${invertido} invertido`)
    //         document.writeln(`${n}<br><br>`)
    //     }
    //     return invertido === original;
    // } 
    // document.writeln(ehPalindromo(202))

    // Armazenameneto local
//INSERIR ELEMENTO
// localStorage.setItem("Nome","Aline")
//  localStorage.setItem("Nome2","Jose")
// localStorage.setItem("Nome3","Maria")


// //PEGAR ELEMENTO

// document.writeln(localStorage.getItem("Nome"))

// // APAGAR TODOS OS ELEMENTOS

// localStorage.clear()

// // APAGAR UM DOS OS ELEMENTOS
// localStorage.removeItem("Nome")

// let frutas = ["Maça","Banana","laranja","Goiaba","limão","jaca","melancia","batata","tomate","Abacate"]

// localStorage.setItem("Itens1",(frutas[0]))
// localStorage.setItem("Itens2",(frutas[1]))
// localStorage.setItem("Itens3",(frutas[2]))
// localStorage.setItem("Itens4",(frutas[3]))
// localStorage.setItem("Itens5",(frutas[4]))
// localStorage.setItem("Itens6",(frutas[5]))
// localStorage.setItem("Itens7",(frutas[6]))
// localStorage.setItem("Itens8",(frutas[7]))
// localStorage.setItem("Itens9",(frutas[8]))
// localStorage.setItem("Itens10",(frutas[9]))

// let comercio = ["Arroz","feijão","macarrão","carne","leite","manteiga","óleo","batata","tomate","Alface"]
//INSERIR ELEMENTO NO ARRAY
// comercio.push(comercio)//ensere o elemento ao final 
// console.log(comercio)

//ITERAR SOBRE OS ELEMENTOS OPERANDO SOBRE CADA 1 
//primeira forma de fazer 
// const somaCom2 = (n => n +2)

// let num = [2,5,15,10]

// let num_novos = num.map(somaCom2)
//Outra forma de fazer 
// console.log(num_novos)
// let num =  [2,5,15,10]
// let num_novos = num.map(n => n+2)
// console.log(num_novos)


// //Outra forma de fazer 
// let num =  [2,5,15,10].map(n => n+2)
// console.log(num)

//Manipulação de dom

// function verVelocidade(){
//     let velocidade = parseInt(document.getElementById("velocidade").value)

//     if (velocidade > 80){
//         document.getElementById("res").innerHTML = `Multado: sua velocidade foi ${velocidade} km/h`
//         document.body.style.backgroundColor = "red"
//     }
//     else{
//         document.getElementById("res").innerHTML = `Parabéns ${velocidade} km/h`
//         document.body.style.backgroundColor = "green"
//     }

// }

//Aula do dia 12 praticas utilizando Dom

function verIdade(){
    anoAtual = 2025
    let ano = parseInt(document.getElementById("ano").value)
    document.getElementById("idade").innerHTML = `Sua idade é ${anoAtual - ano} `
}

function Modoescuro(){
    document.getElementById("mudarBack").innerHTML = ``
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    document.body.style.fontSize = "25px"
}

function tabuada(){
    let numero = parseInt(document.getElementById("numero").value)
    
        let resultado = `Tabuada do número ${numero}:<br>`

        for(let i = 1; i <=10; i++){
            resultado += `${numero} x ${i} = ${(numero * i)} <br>`
        }

        document.getElementById("tabu").innerHTML = resultado;
    
}