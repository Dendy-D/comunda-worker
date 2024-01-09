import editDocxFile from '../utils/editDocxfile.js';
import convertDocxToPdf from '../utils/convertDocxToPdf.js';

async function formPdfForOrder(req, res) {
  const { initiatorName } = req.body;
  let { dateFrom, dateTo } = req.body;

  dateFrom = dateFrom.split('-').reverse().join('.');
  dateTo = dateTo.split('-').reverse().join('.');

  let amountOfVacationDays = dateTo.split('.')[0] - dateFrom.split('.')[0];

  if (amountOfVacationDays < 2) {
    res.status(400).send(`The amount of vacation days can't be less than 2`);
    return;
  }

  // const currentDate = new Date();
  // const currentDateInRuFormat = currentDate.toLocaleDateString('ru-RU');

  const map = {
    initiatorName: initiatorName,
    dateFrom,
    dateTo,
    amountOfVacationDays,
  };

  await editDocxFile(map, 'orderTemplate', 'order');

  await convertDocxToPdf('order');

  res.status(200).send('File has been successfully created');
}

export default formPdfForOrder;
