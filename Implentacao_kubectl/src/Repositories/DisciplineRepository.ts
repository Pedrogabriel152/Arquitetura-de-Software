export default class DisciplineService {
    static async create(name: string) {
        return { name }
    }

    static async matriculate(disciplineId: number, studentId: number) {
        return { disciplineId, studentId }
    }

    static async lanceNotes(disciplineId: number, studentId: number, note: number) {
        return { disciplineId, studentId, note }
    }
}