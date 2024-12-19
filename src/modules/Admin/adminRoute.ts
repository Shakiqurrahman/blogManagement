import { Router } from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/userConstant';
import { adminController } from './AdminController';

const router = Router();

// block a User
router.patch(
    '/users/:userId/block',
    auth(USER_ROLE.admin),
    adminController.makeBlockUser,
);

// Delete a Blog
router.delete('/blogs/:id', auth(USER_ROLE.admin), adminController.deleteBlog);

export const adminRoutes = router;
