import TeacherService from "../Services/TeacherService";

export default class TeacherController {
    public static async create(req: any, res: any)
    {
        const { name } = req.body;
        const teacher = await TeacherService.create(name);
        return res.status(200).json(teacher);
    }
}