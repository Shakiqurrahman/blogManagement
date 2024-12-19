import { Router } from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/userConstant';
import { blogControllers } from './blogController';

const router = Router();

router.post(
    '/',
    auth(USER_ROLE.user, USER_ROLE.admin),
    blogControllers.createBlog,
);

export const blogRoutes = router;
