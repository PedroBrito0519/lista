function adicionar() {

const personagens = ['steven', 'garnet', 'perola', 'ametista' ]
const novo = document.getElementById("personagem").value

personagens.push('Garnet')//MAIS RECENTE ATRAS
personagens.unshift('Garnet')//MAIS RECENTE NA FRENTE
personagens.pop('Garnet')//remove o ultimo elemento
personagens.shift('Garnet')//remove o primeiro
personagens.slice('Garnet')//CORTA UMA CERTA PARTE
personagens[2] = 'Garnet' //atualiza o valor
personagens.forEach(function (pegapersonagens){
console.log(pegapersonagens)

})
console.log(personagens)




//exercicio
const numeros = [2, 4, 6, 8 ]
const novonumero = document.getElementById("numero").value
numeros.forEach(function (pegarnumeros){
    console.log(novonumero * pegarnumeros)
    
    })
}
