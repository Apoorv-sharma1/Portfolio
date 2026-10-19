import express from 'express';
import { submitContact } from '../controllers/contactController.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/', contactRateLimiter, submitContact);

export default router;
