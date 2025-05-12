"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TeacherService_1 = __importDefault(require("../Services/TeacherService"));
class TeacherController {
    static async create(req, res) {
        const { name } = req.body;
        const teacher = await TeacherService_1.default.create(name);
        return res.status(200).json(teacher);
    }
}
exports.default = TeacherController;
//# sourceMappingURL=TeacherController.js.map