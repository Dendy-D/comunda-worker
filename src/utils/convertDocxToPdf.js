import libre from 'libreoffice-convert';
import fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertDocxToPdf(fileName) {
	return new Promise((resolve, reject) => {
		const inputFilePath = path.resolve(__dirname, `../files/${fileName}.docx`);
		const outputFilePath = path.resolve(__dirname, `../files/${fileName}.pdf`);
	
		const file = fs.readFileSync(inputFilePath);
	
		libre.convert(file, '.pdf', undefined, (err, done) => {
			if (err) {
				console.log(`Error converting file: ${err}`);
				reject(err);
			} else {
				fs.writeFileSync(outputFilePath, done);
				console.log(`Conversion successful! PDF file saved at: ${outputFilePath}`);
				resolve(outputFilePath);
			}
		});
	});
}

export default convertDocxToPdf;
