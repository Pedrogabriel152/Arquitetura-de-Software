import Aluno from "./Aluno"
import Disciplina from "./Disciplina"

export default class Boletim {
    aluno: Aluno
    disciplinas: Disciplina[]

    constructor(aluno: Aluno, disciplinas: Disciplina[]) {
        this.aluno = aluno
        this.disciplinas = disciplinas
    }
}