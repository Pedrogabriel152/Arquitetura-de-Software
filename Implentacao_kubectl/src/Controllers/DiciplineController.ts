import DisciplineService from "../Services/DiciplineService";

export default class DisciplineController {
    public static async create(req: any, res: any)
    {
        const { name } = req.body;
        const discipline = await DisciplineService.create(name);
        return res.status(200).json(discipline);
    }

    static async matriculate(req: any, res: any) {
        const { studentId, disciplineId } = req.body;
        const matriculate = await DisciplineService.matriculate(studentId, disciplineId);
        return res.status(200).json(matriculate);
    }

    static async lanceNotes(req: any, res: any) {
        const { studentId, disciplineId, note } = req.body;
        const matriculate = await DisciplineService.lanceNotes(studentId, disciplineId, note);
        return res.status(200).json(matriculate);
    }
}