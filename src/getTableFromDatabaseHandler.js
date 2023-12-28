import User from './models/user.js';
import Document_sign_matrix from './models/documentSignMatrix.js';

async function getTableFromDatabaseHandler(req, res) {
    const { tableName } = req.query;

    const data = await User.findAll();

    const arrayOfEntries = data.map(entry => entry.get({ plain: true }));

    console.log(arrayOfEntries);

    res.status(200).send(arrayOfEntries);
}

export default getTableFromDatabaseHandler;


// {
//     "Field_0cc76hj": [
//       {
//         "id": 1,
//         "name": "John Doe",
//         "date": "31.01.2023"
//       },
//       {
//         "id": 2,
//         "name": "Erika Muller",
//         "date": "20.02.2023"
//       },
//       {
//         "id": 3,
//         "name": "Dominic Leaf",
//         "date": "11.03.2023"
//       }
//     ]
//   }
