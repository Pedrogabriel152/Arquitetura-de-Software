import express from 'express';
import DisciplineController from '../Controllers/DiciplineController';

const routes = express.Router(); 

routes.post('/create', DisciplineController.create); 
routes.post('/matriculate', DisciplineController.matriculate); 
routes.post('/lanceNotes', DisciplineController.lanceNotes); 

export default routes;