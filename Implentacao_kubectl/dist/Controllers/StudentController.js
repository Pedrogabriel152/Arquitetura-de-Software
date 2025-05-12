"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BulletinService_1 = __importDefault(require("../Services/BulletinService"));
const NotificationsService_1 = __importDefault(require("../Services/NotificationsService"));
const StudentService_1 = __importDefault(require("../Services/StudentService"));
class StudentController {
    static async create(req, res) {
        const { name } = req.body;
        const student = await StudentService_1.default.create(name);
        return res.status(200).json(student);
    }
    static async getBulletin(req, res) {
        const { studentId } = req.body;
        const student = await BulletinService_1.default.generate(studentId);
        return res.status(200).json(student);
    }
    static async getNotes(req, res) {
        const { studentId } = req.body;
        const student = await BulletinService_1.default.getNotes(studentId);
        return res.status(200).json(student);
    }
    static async sendNotification(req, res) {
        const { studentId } = req.body;
        const student = await NotificationsService_1.default.send(studentId);
        return res.status(200).json(student);
    }
}
exports.default = StudentController;
//# sourceMappingURL=StudentController.js.map