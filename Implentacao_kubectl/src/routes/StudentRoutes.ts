import express from 'express';
import StudentController from '../Controllers/StudentController';

const routes = express.Router(); 

routes.post('/create', StudentController.create); 
routes.post('/send-notification', StudentController.sendNotification); 

export default routes;