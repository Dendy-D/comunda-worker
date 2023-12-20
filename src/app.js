import express from 'express';
import cors from 'cors';

import sequelize from './db.js';
// import User from './models/user.js';
// import documentSignMatrix from './models/documentSignMatrix.js';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        app.get('/contract-type', (req, res) => {
            // res.send('lol');
            console.log(req.body);
            res.status(200).send('lol');
        });

        app.listen(PORT, () => {
            // console.log(`Server is running on http://localhost:${PORT}`)
            console.log('lol');
        });


        // try {
        //     await sequelize.authenticate();
        //     await sequelize.sync();
        // } catch (error) {
        //     console.error('Unable to connect to the database:', error);
        // }
    } catch (e) {
        console.error(e);
    }
}

start();
