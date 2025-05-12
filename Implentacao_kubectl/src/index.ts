import express from 'express';
import UserRoutes from './routes/UserRoutes';
import StudentRoutes from './routes/StudentRoutes';
import TeacherRoutes from './routes/TeacherRoutes';
import DisciplineRoutes from './routes/DisciplineRoutes';
import BulletinRoutes from './routes/BulletinRoutes';

const app = express();
const port = 5000;

app.use(express.json());

app.use('/', UserRoutes);
app.use('/students', StudentRoutes);
app.use('/teachers', TeacherRoutes);
app.use('/discipline', DisciplineRoutes);
app.use('/bulletin', BulletinRoutes);

app.get('/', (_req: any, res: any) => {
  res.send('Hello TypeScript + Node.js!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
