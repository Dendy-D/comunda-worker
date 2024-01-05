import express from 'express';
import cors from 'cors';

import sequelize from './db.js';
import User from './models/user.js';
import DocumentSignMatrix from './models/documentSignMatrix.js';
import HeadOfDepartment from './models/headOfDepartment.js';
import Employee from './models/employee.js';
import contractApprovalHandler from './routers/contractApprovalHandler.js';
import vacationApplicationHandler from './routers/vacationApplicationHandler.js';
import getHeadOfDepartment from './routers/getHeadOfDepartment.js';
import getHeadOfHrDepartment from './routers/getHeadOfHrDepartment.js';
import getInitiatorInformation from './routers/getInitiatorInformation.js';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    app.get('/contract-type', contractApprovalHandler);
    app.get('/vacation-application', vacationApplicationHandler);
    app.get('/head-of-department', getHeadOfDepartment);
    app.get('/head-of-hr-department', getHeadOfHrDepartment);
    app.get('/initiator', getInitiatorInformation);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });

    try {
      await sequelize.authenticate();
      await sequelize.sync();
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  } catch (e) {
    console.error(e);
  }
};

start();
