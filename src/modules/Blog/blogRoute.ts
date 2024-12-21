import { Router } from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/userConstant';
import { blogControllers } from './blogController';

const router = Router();

router.post('/', auth(USER_ROLE.user), blogControllers.createBlog);
router.patch('/:id', auth(USER_ROLE.user), blogControllers.updateBlog);
router.delete('/:id', auth(USER_ROLE.user), blogControllers.deleteBlog);
router.get('/', blogControllers.getAllBlogs);

export const blogRoutes = router;
