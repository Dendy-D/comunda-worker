import HeadOfDepartment from '../models/headOfDepartment.js';

async function getHeadOfHrDepartment(req, res) {
  const headOfDepartment = await HeadOfDepartment.findOne({
    where: {
      department: 'Отдел кадров',
    }
  })

  const emailOfTheHeadOfHrDepartment = headOfDepartment.get({ plain: true }).email;

  res.status(200).send(emailOfTheHeadOfHrDepartment);
}

export default getHeadOfHrDepartment;
// uncouth-mar0@maildrop.cc	