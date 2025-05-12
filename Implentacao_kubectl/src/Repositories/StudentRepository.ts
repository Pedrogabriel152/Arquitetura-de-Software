export default class StudentRepository {
    static async create(name: string) {
        return { name }
    }
}