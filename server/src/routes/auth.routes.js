import {Router} from 'express';
import {register, login, logout, profile, verifyToken} from '../controllers/auth.controllers.js';
import {authRequired} from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { registerSchema, loginSchema } from '../schemas/auth.shcema.js';

const router = Router();

router.post('/register', validateSchema(registerSchema), register)

router.post('/login', validateSchema(loginSchema), login)

router.post('/logout', logout)

router.get('/verify', verifyToken);

router.get('/profile', authRequired, profile)

export default router;