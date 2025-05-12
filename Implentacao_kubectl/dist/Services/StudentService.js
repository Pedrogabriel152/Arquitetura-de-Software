"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StudentRepository_1 = __importDefault(require("../Repositories/StudentRepository"));
class StudentService {
    static async create(name) {
        const student = await StudentRepository_1.default.create(name);
        return student;
    }
}
exports.default = StudentService;
//# sourceMappingURL=StudentService.js.map