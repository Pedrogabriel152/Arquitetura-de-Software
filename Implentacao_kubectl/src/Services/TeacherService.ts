import TeacherRepository from "../Repositories/TeacherRepository"

export default class TeacherService {
    static async create(name: string) {
        const teacher = await TeacherRepository.create(name);
        return teacher
    }
}