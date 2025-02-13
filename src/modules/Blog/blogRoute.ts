import { Router } from 'express';
import { blogControllers } from './blogController';

const router = Router();

router.post('/', blogControllers.createBlog);
router.patch('/:id', blogControllers.updateBlog);
router.delete('/:id', blogControllers.deleteBlog);
router.get('/:id', blogControllers.getBlogById);
router.get('/', blogControllers.getAllBlogs);

export const blogRoutes = router;
