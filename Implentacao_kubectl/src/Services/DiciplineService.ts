import DisciplineRepository from "../Repositories/DisciplineRepository";

export default class DisciplineService{
    static async create(name: string) {
        const discipline = await DisciplineRepository.create(name);
        return discipline
    }

    static async matriculate(disciplineId: number, studentId: number) {
        return DisciplineRepository.matriculate(disciplineId, studentId);
    }

    static async lanceNotes(disciplineId: number, studentId: number, note: number) {
        return DisciplineRepository.lanceNotes(disciplineId, studentId, note);
    }
}