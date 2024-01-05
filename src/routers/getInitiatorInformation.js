import Employee from '../models/employee.js';

async function getInitiatorInformation(req, res) {
  const { initiatorEmail } = req.query;

  const initiatorData = await Employee.findOne({
    where: {
      email: initiatorEmail,
    }
  });

  const { name, department, position } = initiatorData.get({ plain: true });

  console.log(department);

  res.status(200).send({
    initiatorName: name,
    initiatorDepartment: department,
    initiatorPosition: position,
  });
}

export default getInitiatorInformation;
