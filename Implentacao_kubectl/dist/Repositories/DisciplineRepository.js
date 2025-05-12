"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DisciplineService {
    static async create(name) {
        return { name };
    }
    static async matriculate(disciplineId, studentId) {
        return { disciplineId, studentId };
    }
    static async lanceNotes(disciplineId, studentId, note) {
        return { disciplineId, studentId, note };
    }
}
exports.default = DisciplineService;
//# sourceMappingURL=DisciplineRepository.js.map