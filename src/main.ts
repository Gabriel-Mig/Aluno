import Aluno from "./Aluno.js";

let aluno1: Aluno = new Aluno("Felisberto Felis", 20251234, "Economia");
let aluno2: Aluno = new Aluno("Roberta Campos", 20259876, "Educação Física");

aluno1.estudar("Juros compostos");
aluno2.estudar("Anatomia");

aluno1.entregarAtividade();
aluno2.entregarAtividade();