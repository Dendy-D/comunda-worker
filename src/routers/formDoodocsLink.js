import axios from 'axios';
import querystring from 'querystring';

import fs from 'fs';
import { Blob } from 'buffer';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function formDoodocsLink(req, res) {
  const { fileType, signers } = req.body;

  const map = {
    vacation: 'vacationApplication',
    order: 'order',
  };

  const data = {
    grant_type: 'client_credentials',
  };

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ODgzMTI4YWEtZmM4OC00MzZjLTk0OGYtOTI4NzFhNGZjZDhiOjIycjRFfEx1NkvCo3w=',
    },
  };

  const accessTokenCode = await axios
    .post(
      'https://api.doodocs.kz/api/v1/session',
      querystring.stringify(data),
      config
    )
    .then((response) => response.data.access_token);

  const accessToken = `Bearer ${accessTokenCode}`;

  const teamspace_id = '4c7a3149-2267-46c5-91e9-5efc7dbf7d9f';

  const formData = new FormData();

  const fileBuffer = fs.readFileSync(
    path.resolve(__dirname, `../files/${map[fileType]}.pdf`)
  );

  const blob = new Blob([fileBuffer], { type: 'application/pdf' });

  formData.append('file', blob, {
    filename: `${map[fileType]}.pdf`,
    contentType: 'application/pdf',
  });

  formData.append('document_name', map[fileType]);

  formData.append('teamspace_id', teamspace_id);

  const documentID = await axios
    .post('https://api.doodocs.kz/api/v1/documents/pdf', formData, {
      headers: {
        Authorization: accessToken,
      },
    })
    .then((result) => result.data.document_id);

  console.log('signers: ', signers);
  console.log('typeof signers: ', typeof signers);

  const recipients = signers.map((signer, id) => {
    return {
      actor_id: id,
      role: 'signer_rk',
      attrs: {
        email: signer,
      },
    }
  })

  const bodyForWorkflow = {
    workflow: {
      actors: [
        {
          id: 1,
          title: 'Sample Title',
          email: 'sample@email.com',
          origin_id: 'f363c4b6-4154-4e32-af3d-ab2103aa5666',
        },
      ],
      cc: [
        {
          email: 'random-dude@gmail.com',
          name: 'Random dude'
        }
      ],
      steps: [
        {
          index: 1,
          type: 'string',
          recipients: recipients
          // recipients: [
          //   {
          //     actor_id: 0,
          //     origin_id: 'da1117ea-2427-452b-bbac-047c87089659',
          //     role: 'signer_rk',
          //     attrs: {
          //       email: 'initiatorEmail',
          //       message: 'Привет! Как дела?',
          //       filter: [
          //         {
          //           iin: '9698763456788',
          //           bin: '0098129388384',
          //           role: 'ceo',
          //         },
          //       ],
          //     },
          //   },
          //   {
          //     actor_id: 1,
          //     role: 'signer_rk',
          //     attrs: {
          //       email: 'headOfHrDepartmentEmail',
          //     },
          //   },
          // ],
        },
      ],
      meta: {
        message: 'Всем привет! Подпишите пожалуйста.',
      },
    },
  };

  await axios
    .post(
      `https://api.doodocs.kz/api/v1/documents/${documentID}/workflow/anonymous`,
      JSON.stringify(bodyForWorkflow),
      {
        headers: {
          Authorization: accessToken,
          'Content-Type': 'application/json',
        },
      }
    )
    .then((result) => {
      console.log(result);
    });

  await axios
    .post(
      `https://api.doodocs.kz/api/v1/documents/${documentID}/workflow/launch`,
      {},
      {
        headers: {
          Authorization: accessToken,
        },
      }
    )
    .then((result) => {
      console.log(result);
    });

  const originID = await axios
    .get(`https://api.doodocs.kz/api/v1/documents/${documentID}/recipients`, {
      headers: {
        Authorization: accessToken,
      },
    })
    .then((result) => result.data.recipients[0].origin_id);

  const linkID = await axios
    .get(
      `https://api.doodocs.kz/api/v1/documents/${documentID}/recipient/${originID}`,
      {
        headers: {
          Authorization: accessToken,
        },
      }
    )
    .then((result) => result.data.recipient.link);

  const link = `https://link.doodocs.kz/${linkID}`;

  res.status(200).send(link);
}

export default formDoodocsLink;
