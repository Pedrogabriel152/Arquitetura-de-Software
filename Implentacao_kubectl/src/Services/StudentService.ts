import StudentRepository from "../Repositories/StudentRepository";

export default class StudentService {
    static async create(name: string) {
        const student = await StudentRepository.create(name);
        return student
    }
}