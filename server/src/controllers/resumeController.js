import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesDir = path.join(__dirname, '..', '..', 'files');

export const downloadPDF = (req, res) => {
  const filePath = path.join(filesDir, 'resume.pdf');

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      message: 'PDF resume file is currently being generated or unavailable. Please try again in a few moments.'
    });
  }

  const stat = fs.statSync(filePath);
  const isInline = req.query.view === 'inline';

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Length', stat.size);
  res.setHeader(
    'Content-Disposition',
    `${isInline ? 'inline' : 'attachment'}; filename="Apoorv_Sharma_Resume.pdf"`
  );

  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
};

export const downloadDOCX = (req, res) => {
  const filePath = path.join(filesDir, 'resume.docx');

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      message: 'DOCX resume file is currently being generated or unavailable. Please try again in a few moments.'
    });
  }

  const stat = fs.statSync(filePath);

  res.setHeader(
    'Content-Type',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  );
  res.setHeader('Content-Length', stat.size);
  res.setHeader(
    'Content-Disposition',
    'attachment; filename="Apoorv_Sharma_Resume.docx"'
  );

  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
};
