"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TeacherRepository_1 = __importDefault(require("../Repositories/TeacherRepository"));
class TeacherService {
    static async create(name) {
        const teacher = await TeacherRepository_1.default.create(name);
        return teacher;
    }
}
exports.default = TeacherService;
//# sourceMappingURL=TeacherService.js.map