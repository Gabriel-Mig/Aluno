//import Aluno from "./Aluno.js";
import Carro from "./Carro.js";

let carro1: Carro = new Carro("Ford Mustang", 1975, "Preto");

let ligado: boolean = carro1.ligar();

if(ligado) {
    carro1.acelerar(200);
} else {
    console.log ("O carro não está ligado.");
}

//let aluno1: Aluno = new Aluno("Felisberto Felis", 20251234, "Economia");
//let aluno2: Aluno = new Aluno("Roberta Campos", 20259876, "Educação Física");

//aluno1.estudar("Juros compostos");
//aluno2.estudar("Anatomia");

//aluno1.entregarAtividade();
//aluno2.entregarAtividade();