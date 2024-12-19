import { Router } from 'express';
import { authRoutes } from '../modules/Auth/authRoute';

const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: authRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
