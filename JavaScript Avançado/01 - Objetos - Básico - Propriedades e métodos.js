/**
 * Objetos - O que são?
 * 
 * Objetos possuem a possibilidade de trabalhar como se fossem estruturas de dados. Eles podem ter propriedades e valores.
 */

var obj = {
    nome: "Maycon",
    idade: 38
}

// Este objeto é uma estrutura de dados, mas pode ficar mais complexo.

var obj2 = {
    nome: "Maycon",
    idade: 38,
    dataNascimento: {
        dia: 26,
        mes: 8,
        ano: 1982
    }
}

/**
 * Mas também pode ser um novo paradigma de programação. 
 * 
 * POO - Programação Orientada a Objetos
 * 
 * Tudo no mundo pode ser representado por uma entidade, ou objeto, ou classe.
 * 
 * Uma classe pode ter atributos e Métodos.
 * 
 * Atributos é aquilo que a entidade é. Tem a ver com o ser.
 * Métodos é aquilo que a entidade pode fazer. Tem a ver com o fazer.
 * 
 * Exemplo:
 * 
 * entidade: Funcionário
 * 
 * Atributos:
 * 
 * - Nome
 * - idade
 * - nº registro
 * 
 * Métodos:
 * 
 * - Registra entrada e saída
 *  
 * Entidades virtuais: Contas a Pagar, Contas a Receber
 * 
 * Contas a Pagar
 * - Data vencto
 * - Data pagamento
 * - valor
 * - número do boleto
 * 
 * Métodos de Contas a Pagar
 * 
 * - Calcular juros
 */

var funcionario = {
    nome: "Maycon",
    idade: 38,
    numRegistro: "12345",
    deartamento: "TI",
    eventos: [
        {evento: "faltou", data:"18/09/2018"},
        {evento: "xingou o chefe", data:"25/05/2019"},
        {evento: "queimou o pc", data:"18/08/2020"}
    ],
    detalhes: {
        hobbies: ["tênis", "Fotografia", "Video Game"],


    },
    registrarEntrada: function(data){
        console.log(`Registro data de entrada: ${data}`)

    },
    registrarSaida: function(data){
        console.log(`Registro data de saída: ${data}`)
    }
}

console.log(funcionario.nome, funcionario.idade, funcionario.numRegistro)

funcionario["nome"] = "Maurício"

console.log(funcionario.nome, funcionario.idade, funcionario.numRegistro)

// Acessando detalhes

console.log(funcionario.detalhes.hobbies)
console.log(funcionario.detalhes.hobbies[1])

// Acessando eventos

for(let e of funcionario.eventos) console.log(`${e.evento} ${e.data}`)


// Acessando métodos

funcionario.registrarEntrada("19/08/2020")


/**
 * Percebemos que este objeto, apesar de ter todas as características de uma classe, ele não pode ser chamado assim, pois seus atributos são preenchidos na declaração. Logo, temos de aprender a construir um molde para que possamos instanciar objetos com aqueles atributos e métodos.
 */



