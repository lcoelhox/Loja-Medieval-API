import { Router } from 'express';
import UserController from '../controller/users.controller';

const router = Router();

const userController = new UserController();

router.post('/', userController.createUser);

export default router;