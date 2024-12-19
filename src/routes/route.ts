import { Router } from 'express';
import { authRoutes } from '../modules/Auth/authRoute';
import { blogRoutes } from '../modules/Blog/blogRoute';

const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: authRoutes,
    },
    {
        path: '/blogs',
        route: blogRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
