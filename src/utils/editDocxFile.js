import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

import fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function editDocxFile(map, templateFileName, resultFileName) {
  const content = fs.readFileSync(
    path.resolve(__dirname, `../files/${templateFileName}.docx`),
    'binary'
  );

  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  doc.render(map);

  const buf = doc.getZip().generate({
    type: 'nodebuffer',
    compression: 'DEFLATE',
  });

  fs.writeFileSync(
    path.resolve(__dirname, `../files/${resultFileName}.docx`),
    buf
  );
}

export default editDocxFile;
