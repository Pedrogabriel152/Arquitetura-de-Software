"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const app = (0, express_1.default)();
const port = 5000;
app.use(express_1.default.json());
app.use('/', UserRoutes_1.default);
// app.use('/students', require('./routes/StudentRoutes'));
// app.use('/teachers', require('./routes/TeacherRoutes'));
// app.use('/disciplines', require('./routes/DisciplineRoutes'));
app.get('/', (_req, res) => {
    res.send('Hello TypeScript + Node.js!');
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map