import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { format } = req.query;
  const isDocx = format === 'docx' || req.url.includes('/docx');
  const filename = isDocx ? 'resume.docx' : 'resume.pdf';
  const contentType = isDocx
    ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    : 'application/pdf';

  // Check multiple possible paths in Vercel environment
  const possiblePaths = [
    path.join(process.cwd(), 'client', 'public', filename),
    path.join(process.cwd(), 'server', 'files', filename),
    path.join(process.cwd(), 'public', filename),
    path.join(process.cwd(), filename)
  ];

  let filePath = null;
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      filePath = p;
      break;
    }
  }

  if (!filePath) {
    return res.status(404).json({
      success: false,
      message: `Resume file (${filename}) not found on server.`
    });
  }

  const stat = fs.statSync(filePath);
  res.writeHead(200, {
    'Content-Type': contentType,
    'Content-Length': stat.size,
    'Content-Disposition': `attachment; filename="Apoorv_Sharma_Resume.${isDocx ? 'docx' : 'pdf'}"`
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
}
