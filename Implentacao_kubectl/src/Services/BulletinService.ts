export default class BulletinService{
    static async generate(studentId: number) {
        return { studentId }
    }

    static async getNotes(studentId: number) {
        return { studentId }
    }
}