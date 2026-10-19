import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import PDFDocument from 'pdfkit';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesDir = path.join(__dirname, '..', 'files');

if (!fs.existsSync(filesDir)) {
  fs.mkdirSync(filesDir, { recursive: true });
}

const pdfPath = path.join(filesDir, 'resume.pdf');
const docxPath = path.join(filesDir, 'resume.docx');

// 1. Generate PDF
function generatePDF() {
  const doc = new PDFDocument({ margin: 40, size: 'A4' });
  const writeStream = fs.createWriteStream(pdfPath);
  doc.pipe(writeStream);

  // Header
  doc.fontSize(22).font('Helvetica-Bold').text('APOORV SHARMA', { align: 'center' });
  doc.moveDown(0.2);
  doc.fontSize(11).font('Helvetica').text('Web Developer & AI Builder | B.Tech CSE (2024-2028), JKLU', { align: 'center' });
  doc.fontSize(9).font('Helvetica').fillColor('#555555')
    .text('Email: sharma2006apoorv@gmail.com | LinkedIn: linkedin.com/in/apoorvsh001 | Portfolio: apoorvsh.netlify.app', { align: 'center' });
  doc.fillColor('#000000');
  doc.moveDown(0.5);

  doc.strokeColor('#78F52B').lineWidth(2).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
  doc.moveDown(0.5);

  // Summary
  doc.fontSize(12).font('Helvetica-Bold').text('PROFESSIONAL SUMMARY');
  doc.moveDown(0.2);
  doc.fontSize(9.5).font('Helvetica').text(
    'Forward-thinking Full Stack Web Developer and AI Builder with proven experience building MERN stack applications, SaaS platforms, and Agentic AI workflows. Founder of Webnetic Studios and Co-Founder of FuseOne Studios. Published author with a strong focus on scalable system architecture, clean UI/UX, and business automation.'
  );
  doc.moveDown(0.6);

  // Education
  doc.fontSize(12).font('Helvetica-Bold').text('EDUCATION');
  doc.moveDown(0.2);
  doc.fontSize(10).font('Helvetica-Bold').text('JK Lakshmipat University, Jaipur');
  doc.fontSize(9).font('Helvetica-Oblique').text('Bachelor of Engineering (B.E.) in Computer Science | Aug 2024 - Jul 2028');
  doc.fontSize(9).font('Helvetica').text('Relevant Coursework: Data Structures, Web Development, Object-Oriented Programming, Database Systems');
  doc.moveDown(0.6);

  // Technical Skills
  doc.fontSize(12).font('Helvetica-Bold').text('TECHNICAL SKILLS');
  doc.moveDown(0.2);
  doc.fontSize(9.5).font('Helvetica-Bold').text('Frontend: ', { continued: true })
    .font('Helvetica').text('React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Three.js, Framer Motion');
  doc.fontSize(9.5).font('Helvetica-Bold').text('Backend & DB: ', { continued: true })
    .font('Helvetica').text('Node.js, Express.js, MongoDB, Mongoose, REST APIs, JWT Auth, System Design');
  doc.fontSize(9.5).font('Helvetica-Bold').text('AI & Automation: ', { continued: true })
    .font('Helvetica').text('Agentic AI, Multi-Agent Workflows, LLM Integrations, API Automation');
  doc.fontSize(9.5).font('Helvetica-Bold').text('Tools & Platforms: ', { continued: true })
    .font('Helvetica').text('Git, GitHub, Docker, Postman, Vite, Vercel, Render, Linux, Figma');
  doc.moveDown(0.6);

  // Experience
  doc.fontSize(12).font('Helvetica-Bold').text('EXPERIENCE');
  doc.moveDown(0.2);

  const experiences = [
    {
      title: 'Founder & Full Stack Lead',
      company: 'Webnetic Studios',
      period: 'Jan 2022 - Present',
      points: [
        'Built modern, responsive, SEO-optimized web applications and SaaS platforms for clients across diverse industries.',
        'Engineered scalable full-stack architectures combining clean React frontends with robust Node/Express/MongoDB APIs.',
        'Helped businesses automate repetitive workflows and improve conversions through tailored digital systems.'
      ]
    },
    {
      title: 'Co-Founder',
      company: 'FuseOne Studios',
      period: 'Jan 2025 - Present',
      points: [
        'Architected Agentic AI-driven platforms focused on automating business workflows and operational efficiency.',
        'Designed multi-agent AI execution pipelines reducing manual tasks by up to 70% in target processes.',
        'Managed product roadmap, UI/UX interaction systems, and API integrations.'
      ]
    },
    {
      title: 'MERN Stack Developer (Intern)',
      company: 'Codec Technologies India',
      period: 'May 2026 - Jul 2026',
      points: [
        'Developed RESTful services and modular React components for enterprise client applications.',
        'Collaborated on database schema design with Mongoose and implemented secure authentication flows.'
      ]
    },
    {
      title: 'Open Source Contributor',
      company: 'GirlScript Summer of Code (GSSoC)',
      period: 'Sep 2025 - Nov 2025',
      points: [
        'Contributed feature enhancements, bug fixes, and performance optimizations to national-level open source repositories.'
      ]
    }
  ];

  experiences.forEach(exp => {
    doc.fontSize(10).font('Helvetica-Bold').text(`${exp.title} - ${exp.company}`, { continued: true })
      .font('Helvetica').text(` (${exp.period})`, { align: 'right' });
    exp.points.forEach(pt => {
      doc.fontSize(9).font('Helvetica').text(` • ${pt}`);
    });
    doc.moveDown(0.3);
  });

  // Certifications & Publications
  doc.moveDown(0.4);
  doc.fontSize(12).font('Helvetica-Bold').text('PUBLICATIONS & CERTIFICATIONS');
  doc.moveDown(0.2);
  doc.fontSize(9).font('Helvetica')
    .text('• Author of published book: "A Guide to Resisting Peer Pressure" (Mindset, decision-making, and youth leadership)')
    .text('• Red Hat System Administration I (RH124 - RHA)')
    .text('• What Is Generative AI? - Foundational certification')
    .text('• Online Dispute Resolution (ODR) Mechanism certification');

  doc.end();
  return new Promise((resolve) => writeStream.on('finish', resolve));
}

// 2. Generate DOCX
async function generateDOCX() {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: 'APOORV SHARMA',
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER
          }),
          new Paragraph({
            text: 'Web Developer & AI Builder | B.Tech CSE (2024-2028), JKLU',
            alignment: AlignmentType.CENTER
          }),
          new Paragraph({
            text: 'Email: sharma2006apoorv@gmail.com | LinkedIn: linkedin.com/in/apoorvsh001 | Portfolio: apoorvsh.netlify.app',
            alignment: AlignmentType.CENTER
          }),
          new Paragraph({ text: '' }),
          new Paragraph({
            text: 'PROFESSIONAL SUMMARY',
            heading: HeadingLevel.HEADING_1
          }),
          new Paragraph({
            text: 'Forward-thinking Full Stack Web Developer and AI Builder with proven experience building MERN stack applications, SaaS platforms, and Agentic AI workflows. Founder of Webnetic Studios and Co-Founder of FuseOne Studios. Published author with a strong focus on scalable system architecture, clean UI/UX, and business automation.'
          }),
          new Paragraph({ text: '' }),
          new Paragraph({
            text: 'EDUCATION',
            heading: HeadingLevel.HEADING_1
          }),
          new Paragraph({
            children: [
              new TextRun({ text: 'JK Lakshmipat University, Jaipur\n', bold: true }),
              new TextRun({ text: 'Bachelor of Engineering (B.E.) in Computer Science | Aug 2024 - Jul 2028\n', italics: true }),
              new TextRun({ text: 'Relevant Coursework: Data Structures, Web Development, Object-Oriented Programming, Database Systems' })
            ]
          }),
          new Paragraph({ text: '' }),
          new Paragraph({
            text: 'TECHNICAL SKILLS',
            heading: HeadingLevel.HEADING_1
          }),
          new Paragraph({
            children: [
              new TextRun({ text: 'Frontend: ', bold: true }),
              new TextRun('React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Three.js, Framer Motion')
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: 'Backend & Databases: ', bold: true }),
              new TextRun('Node.js, Express.js, MongoDB, Mongoose, REST APIs, JWT, System Design')
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: 'AI & Automation: ', bold: true }),
              new TextRun('Agentic AI, Multi-Agent Workflows, LLM Integrations, API Automation')
            ]
          }),
          new Paragraph({ text: '' }),
          new Paragraph({
            text: 'EXPERIENCE',
            heading: HeadingLevel.HEADING_1
          }),
          new Paragraph({
            children: [
              new TextRun({ text: 'Webnetic Studios — Founder\n', bold: true }),
              new TextRun('Jan 2022 - Present\n'),
              new TextRun('• Developed responsive, SEO-optimized web applications and scalable digital solutions for clients.\n• Full-stack MERN development and performance optimization.')
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: 'FuseOne Studios — Co-Founder\n', bold: true }),
              new TextRun('Jan 2025 - Present\n'),
              new TextRun('• Architected Agentic AI-driven platforms automating business workflows.\n• Developed real-time task execution pipelines.')
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: 'Codec Technologies India — MERN Stack Developer\n', bold: true }),
              new TextRun('May 2026 - Jul 2026\n'),
              new TextRun('• Developed REST APIs and dynamic React interfaces for enterprise client tools.')
            ]
          }),
          new Paragraph({ text: '' }),
          new Paragraph({
            text: 'PUBLICATIONS & CERTIFICATIONS',
            heading: HeadingLevel.HEADING_1
          }),
          new Paragraph({
            text: '• Author of published book: "A Guide to Resisting Peer Pressure"\n• Red Hat System Administration I (RH124 - RHA)\n• What Is Generative AI? Certification'
          })
        ]
      }
    ]
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(docxPath, buffer);
}

async function main() {
  console.log('Generating resume.pdf and resume.docx in server/files...');
  await generatePDF();
  console.log('✓ resume.pdf generated');
  await generateDOCX();
  console.log('✓ resume.docx generated');
}

main().catch(err => {
  console.error('Error generating resumes:', err);
  process.exit(1);
});
