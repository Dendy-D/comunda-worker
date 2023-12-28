// import mammoth from 'mammoth';
// import pdf from 'html-pdf';
// import docxConverter from 'docx-pdf';
// import lol from '@pdftron/pdfnet-node';
// const { PDFNet } = lol;

import { exec } from 'child_process';
import fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// PDFNet.initialize();

async function convertDocxToPdf(fileName) {
    const docxData = await fs.promises.readFile(path.resolve(__dirname, `../files/${fileName}.docx`), 'utf8');

    // console.log('docxData: ', docxData);
    let inputFullPath = path.resolve(__dirname, `../files/${fileName}.docx`);
    let outputFullPath = path.resolve(__dirname, `../files/${fileName}.pdf`);

    try {

        // const pdfDoc = await PDFNet.PDFDoc.create();

        // console.log(pdfDoc)

        const cmd = `"C:\\Program Files\\Pandoc\\pandoc.exe" "${inputFullPath}" -o "${outputFullPath}"`;

        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }
            console.log(`Converted ${inputFullPath} to ${outputFullPath}`);
        });
        // docxConverter(path.resolve(__dirname, `../files/${fileName}.docx`), path.resolve(__dirname, `../files/${fileName}.pdf`), (err, result) => {
        //     if (err) console.log(err);
        //     else console.log(result); // writes to file for us
        // });

        // const result = await mammoth.extractRawText({ arrayBuffer: docxData });

        // console.log('result', result);

        // const htmlContent = result.value;
        // pdf.create(htmlContent).toFile(path.resolve(__dirname, `../files/${fileName}.pdf`));
    } catch (e) {
        console.error(e);
    } finally {
        // PDFNet.shutdown();
    }
}

export default convertDocxToPdf;
