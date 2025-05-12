"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = __importDefault(require("../Repositories/UserRepository"));
class AuthService {
    static async login(email, password) {
        const user = UserRepository_1.default.getUser();
        return { token: 'token' };
    }
}
exports.default = AuthService;
//# sourceMappingURL=AuthService.js.map