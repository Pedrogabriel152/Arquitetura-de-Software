import express from 'express';
import TeacherController from '../Controllers/TeacherController';

const routes = express.Router(); 

routes.post('/create', TeacherController.create); 

export default routes;