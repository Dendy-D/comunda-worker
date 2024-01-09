import editDocxFile from '../utils/editDocxfile.js';
import convertDocxToPdf from '../utils/convertDocxToPdf.js';

async function formPdfForVacationApplication(req, res) {
  const { initiatorName, initiatorPosition } = req.body;
  let { dateFrom, dateTo } = req.body;

  dateFrom = dateFrom.split('-').reverse().join('.');
  dateTo = dateTo.split('-').reverse().join('.');

  let amountOfVacationDays = dateTo.split('.')[0] - dateFrom.split('.')[0];

  if (amountOfVacationDays < 2) {
    res.status(400).send(`The amount of vacation days can't be less than 2`);
    return;
  }

  const currentDate = new Date();
  const currentDateInRuFormat = currentDate.toLocaleDateString('ru-RU');

  const map = {
    position: initiatorPosition,
    fullName: initiatorName,
    dateFrom,
    dateTo,
    amountOfVacationDays,
    currentDate: currentDateInRuFormat,
  };

  await editDocxFile(map, 'vacationApplicationTemplate', 'vacationApplication');

  await convertDocxToPdf('vacationApplication');

  res.status(200).send('File has been successfully created');
}

export default formPdfForVacationApplication;
