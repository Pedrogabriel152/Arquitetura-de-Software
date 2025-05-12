import express from 'express';
import UserRoutes from './routes/UserRoutes';

const app = express();
const port = 5000;

app.use(express.json());

app.use('/', UserRoutes);
// app.use('/students', require('./routes/StudentRoutes'));
// app.use('/teachers', require('./routes/TeacherRoutes'));
// app.use('/disciplines', require('./routes/DisciplineRoutes'));

app.get('/', (_req: any, res: any) => {
  res.send('Hello TypeScript + Node.js!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
