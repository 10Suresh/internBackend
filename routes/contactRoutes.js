import { SendMessage } from '../controllers/contactController.js';
import express from 'express';

const router = express.Router();

router.post('/send', SendMessage);

export default router;
