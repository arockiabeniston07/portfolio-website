const PDFDocument = require('pdfkit');
const fs = require('fs');

try {
  const imgPath = 'public/Arockia_Beniston_V_Resume.jpg';
  const outPath = 'public/Arockia_Beniston_V_Resume.pdf';

  // Create a document without a default page
  const doc = new PDFDocument({ autoFirstPage: false });
  doc.pipe(fs.createWriteStream(outPath));

  // Open the image to get its dimensions
  const img = doc.openImage(imgPath);
  
  // Add a page with the exact dimensions of the image
  doc.addPage({ size: [img.width, img.height], margin: 0 });
  
  // Add the image to the page covering the whole area
  doc.image(img, 0, 0, { width: img.width, height: img.height });

  doc.end();
  console.log('Successfully created valid PDF: ' + outPath);
} catch (error) {
  console.error('Error creating PDF:', error);
}
