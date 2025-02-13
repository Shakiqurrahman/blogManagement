import { Router } from 'express';
import { upload } from '../middlewares/multer';
import { adminRoutes } from '../modules/Admin/adminRoute';
import { authRoutes } from '../modules/Auth/authRoute';
import { blogRoutes } from '../modules/Blog/blogRoute';
import { messageRoutes } from '../modules/Messages/messagesRoutes';
import { projectRoutes } from '../modules/Projects/projectRoute';
import { uploadToCloudinary } from '../utils/cloudinary';

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
    {
        path: '/projects',
        route: projectRoutes,
    },
    {
        path: '/messages',
        route: messageRoutes,
    },
    {
        path: '/admin',
        route: adminRoutes,
    },
];

router.post('/uploads', upload.any(), uploadToCloudinary);

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
