import express from 'express';
import { downloadPDF, downloadDOCX } from '../controllers/resumeController.js';

const router = express.Router();

router.get('/pdf', downloadPDF);
router.get('/docx', downloadDOCX);

export default router;
