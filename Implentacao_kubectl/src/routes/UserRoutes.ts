import express from 'express';
import UserController from '../Controllers/UserController';

const routes = express.Router(); 

routes.post('/login', UserController.login); 

export default routes;