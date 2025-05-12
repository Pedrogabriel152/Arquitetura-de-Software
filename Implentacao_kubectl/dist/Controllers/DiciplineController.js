"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DiciplineService_1 = __importDefault(require("../Services/DiciplineService"));
class DisciplineController {
    static async create(req, res) {
        const { name } = req.body;
        const discipline = await DiciplineService_1.default.create(name);
        return res.status(200).json(discipline);
    }
    static async matriculate(req, res) {
        const { studentId, disciplineId } = req.body;
        const matriculate = await DiciplineService_1.default.matriculate(studentId, disciplineId);
        return res.status(200).json(matriculate);
    }
    static async lanceNotes(req, res) {
        const { studentId, disciplineId, note } = req.body;
        const matriculate = await DiciplineService_1.default.lanceNotes(studentId, disciplineId, note);
        return res.status(200).json(matriculate);
    }
}
exports.default = DisciplineController;
//# sourceMappingURL=DiciplineController.js.map