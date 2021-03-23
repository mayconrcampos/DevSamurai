/**
 * Object Create
 * 
 * Vamos ver as duas formas principais para criar objetos.
 * 
 * Objetos são referências, ou seja, cada objeto ocupa um lugar diferente na memória.
 * 
 * Uso do object.create()
 */

// Vimos que a forma simples de se declarar um objeto é conforme abaixo.
var pessoa = {
    nome: "Maycon",
    idade: 38,
    fazerAniversario: function(){
        return this.idade++
    },
    mostraIdade: function(){
        console.log(`${this.nome} possui ${this.idade} anos.`)
    }
}

console.log(pessoa.nome, pessoa.idade)

pessoa.fazerAniversario()
pessoa.mostraIdade()

// Mas podemos criar um molde para criarmos objetos com Object.create()
// o método create de Object cria um objeto em novo endereço na memória.
// Object.create é capaz de clonar um objeto.

var pessoas = Object.create()





