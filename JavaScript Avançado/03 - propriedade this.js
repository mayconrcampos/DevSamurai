/**
 * Propriedade this.
 * 
 * Serve pra acessar as próprias propriedades do objeto.
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
    horarios: [],
    registrarEntrada: function(data){
        this.horarios.push({data: data, evento: "entrada", registro: this.numRegistro})
        console.log(`Registro data de entrada: ${data} : Nº Reg: ${this.numRegistro}`)

    },
    registrarSaida: function(data){
        this.horarios.push({data: data, evento: "Saída", registro: this.numRegistro})
        console.log(`Registro data de saída: ${data} : Nº Reg: ${this.numRegistro}`)
    },
    mostrarHorarios: function(){
        for(let h of this.horarios){
            console.log(h)
        }
    }
}

funcionario.registrarEntrada("18/09/1999")
funcionario.registrarEntrada("25/05/2019")

funcionario.registrarSaida("25/05/2021")

funcionario.mostrarHorarios()