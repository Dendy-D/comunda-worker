import User from '../models/user.js';
import Document_sign_matrix from '../models/documentSignMatrix.js';

const contractMap = {
  leaseContract: 'Договор аренды',
  supplyAndEquipmentContract: 'Договор поставки оборудования',
};

async function contractApprovalHandler(req, res) {
  const { typeOfContract } = req.query;

  const documents = await Document_sign_matrix.findAll({
    where: {
      document_type: contractMap[typeOfContract],
    },
  });

  const documentsArray = documents.map((document) =>
    document.get({ plain: true })
  );

  const { approver_position, approver_department } = documentsArray[0];

  const approversEmails = await Promise.all(
    documentsArray.map(async ({ assignee_position, assignee_department }) => {
      const approver = await User.findOne({
        where: {
          position: assignee_position,
          department: assignee_department,
        },
      });

      return approver.get({ plain: true }).email;
    })
  );

  const signer = await User.findOne({
    where: {
      position: approver_position,
      department: approver_department,
    },
  });

  const signerObj = signer.get({ plain: true });

  const emails = {
    approversEmails,
    signerEmail: signerObj.email,
  };

  res.status(200).send(emails);
}

export default contractApprovalHandler;
