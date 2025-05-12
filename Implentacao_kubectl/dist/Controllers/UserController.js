"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthService_1 = __importDefault(require("../Services/AuthService"));
class UserController {
    static async login(req, res) {
        const { email, password } = req.body;
        const user = await AuthService_1.default.login(email, password);
        return res.status(200).json(user);
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map