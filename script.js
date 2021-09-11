let evento;
function salvarEvento() {
    let dataEvento = new Date(document.getElementById("datadoEvento").value);
    let nomeEvento = document.getElementById("nomedoEvento").value;
    let palestrante = document.getElementById("palestrante").value;
    let hoje = new Date();
    if(dataEvento >hoje) {
        evento = new Evento(nomeEvento, dataEvento, palestrante);
        console.log(evento);

    }
    else{alert("Data de Evento Invalida");

    }
}
function salvarParticipante() {
    let nomeParticipante = document.getElementById("nomeParticipante").value;
    let idadeParticipante = Number (document.getElementById("idadeParticipante").value);
    if(idadeParticipante >=18){
        let participante = new Participante(nomeParticipante, idadeParticipante)
        console.log(participante);

    }
    else{
        alert("Participante não autorizado");

    }
}
class Evento {
    constructor(nome, data, palestrante) {
        this.nome = nome;
        this.data = data;
        this.plestrante = palestrante;
        this.participantes = [];
    }
}
class Participante {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}