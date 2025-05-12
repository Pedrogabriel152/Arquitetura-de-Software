import express from 'express';
import StudentsController from '../Controllers/StudentController';

const routes = express.Router(); 

routes.post('/generate', StudentsController.getBulletin); 
routes.post('/get-notes', StudentsController.getNotes); 

export default routes;