"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../Controllers/UserController"));
const routes = express_1.default.Router();
routes.post('/login', UserController_1.default.login);
exports.default = routes;
//# sourceMappingURL=UserRoutes.js.map