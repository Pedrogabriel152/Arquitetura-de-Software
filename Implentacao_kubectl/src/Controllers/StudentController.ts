import BulletinService from "../Services/BulletinService";
import NotificationsService from "../Services/NotificationsService";
import StudentService from "../Services/StudentService";

export default class StudentController {
    static async create(req: any, res: any) {
        const { name } = req.body;
        const student = await StudentService.create(name);
        return res.status(200).json(student);
    }

    static async getBulletin(req: any, res: any) {
        const { studentId } = req.body;
        const student = await BulletinService.generate(studentId);
        return res.status(200).json(student);
    }

    static async getNotes(req: any, res: any) {
        const { studentId } = req.body;
        const student = await BulletinService.getNotes(studentId);
        return res.status(200).json(student);
    }

    static async sendNotification(req: any, res: any) {
        const { studentId } = req.body;
        const student = await NotificationsService.send(studentId);
        return res.status(200).json(student);
    }
}