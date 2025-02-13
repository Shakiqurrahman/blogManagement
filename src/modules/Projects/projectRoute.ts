import { Router } from 'express';
import { projectController } from './projectController';

const router = Router();

router.post('/', projectController.createProject);
router.patch('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);
router.get('/:id', projectController.getProjectById);
router.get('/', projectController.getAllProjects);

export const projectRoutes = router;
