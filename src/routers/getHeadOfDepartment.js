import Employee from '../models/employee.js';
import HeadOfDepartment from '../models/headOfDepartment.js';

async function getHeadOfDepartment(req, res) {
  const { initiatorEmail } = req.query;

  const initiatorData = await Employee.findOne({
    where: {
      email: initiatorEmail,
    }
  });

  const { department } = initiatorData.get({ plain: true });

  const headOfDepartment = await HeadOfDepartment.findOne({
    where: {
      department,
    }
  });

  const { email, name, position } = headOfDepartment.get({ plain: true });

  res.status(200).send({
    headOfDepartmentEmail: email,
    headOfDepartmentName: name,
    headOfDepartmentPosition: position,
  });
}

export default getHeadOfDepartment;
