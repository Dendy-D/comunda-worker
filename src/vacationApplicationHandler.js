import User from './models/user.js';
import Document_sign_matrix from './models/documentSignMatrix.js';
import editDocxFile from './utils/editDocxfile.js';
import convertDocxToPdf from './utils/convertDocxToPdf.js';

async function vacationApplicationHandler(req, res) {
    const { userEmail, dateFrom, dateTo } = req.query;

    let amountOfVacationDays = dateTo - dateFrom;

    if (amountOfVacationDays < 2) {
        res.sendStatus(400);
    }

    const map = {
        position: 'lalala',
        fullName: 'Dan',
        dateFrom: 'bub',
        dateTo: 'ldldl',
        amountOfVacationDays,
        currentDate: '10',
    };

    await editDocxFile(map, 'vacationApplicationTemplate', 'vacationApplication');

    await convertDocxToPdf('vacationApplication');

    console.log('lol');
}

export default vacationApplicationHandler;
