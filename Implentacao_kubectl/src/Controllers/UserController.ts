import AuthService from "../Services/AuthService";

export default class UserController{
    public static async login(req: any, res: any) {
        const { email, password } = req.body;
        const user = await AuthService.login(email, password);
        return res.status(200).json(user);
    }
}