import { Router } from 'express';
import { messageController } from './messagesController';

const router = Router();

router.post('/', messageController.createmessage);
router.delete('/:id', messageController.deleteMessageById);
// // router.get('/:id', projectController.getProjectById);
router.get('/', messageController.getAllMessages);

export const messageRoutes = router;
