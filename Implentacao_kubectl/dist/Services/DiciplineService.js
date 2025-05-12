"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DisciplineRepository_1 = __importDefault(require("../Repositories/DisciplineRepository"));
class DisciplineService {
    static async create(name) {
        const discipline = await DisciplineRepository_1.default.create(name);
        return discipline;
    }
    static async matriculate(disciplineId, studentId) {
        return DisciplineRepository_1.default.matriculate(disciplineId, studentId);
    }
    static async lanceNotes(disciplineId, studentId, note) {
        return DisciplineRepository_1.default.lanceNotes(disciplineId, studentId, note);
    }
}
exports.default = DisciplineService;
//# sourceMappingURL=DiciplineService.js.map