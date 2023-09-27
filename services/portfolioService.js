//get all projects name and details
module.exports.GetAllProjectsList = function (db) {

  let results = {};
  let students = [];
  let totalCount;

  const query = { date: { $gt: 0 } };
  const options = {
      // sort returned documents in ascending order by id
      sort: { date: -1 },
      // Include only the `id`,`first_name`,`last_name` and `email` fields in each returned document
      projection: { _id: 1, projectName: 1, description: 1, appLink: 1, gitHubLink: 1},
  };


  return db.collection('Students')
      .countDocuments()
      .then(count => {
          totalCount = count;
          return db.collection('Students')
              .find(query, options) // cursor toArray forEach
              .skip(startIndex)
              .limit(endIndex)
              .forEach(student => students.push(student))
              .then(_ => {
                  results.students = students;
                  results.error=null;
                  if (startIndex > 0) {
                      results.previousPage = page - 1;
                  }

                  if (endPage < totalCount) {
                      results.nextPage = page + 1;
                  }

                  results.totalPage = Math.ceil(totalCount / endIndex);
                  results.totalStudents = totalCount;
                  return results;
              }).catch((err) => {
                  console.error(err);
                  results.error = err;
                  return results;
              })

      })

}

// get project details by name
module.exports.projectByName = function (Name, db) {
  return db
    .collection("Projects")
    .find({ name: Name})
    .then((doc) => {
      return doc;
    })
    .catch((err) => {
      console.error(err);
      results.error = err;
      return results;
    });
};

// Send gmail to me
const dotenv = require('dotenv')
dotenv.config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// These id's and secrets should come from .env file.
const CLIENT_ID =process.env.CLIENT_ID;
const CLIENT_SECRET =process.env.CLIENT_SECRET;
const REDIRECT_URL =process.env.REDIRECT_URL;
const REFRESH_TOKEN =process.env.REFRESH_TOKEN
console.log(process.env.REFRESH_TOKEN)
console.log(process.env.CLIENT_SECRET)

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

module.exports.createGmail = async function (data) {
  try {
    const { name, email, subject, message } = data;
    console.log(data)
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'sushilrameshrajput1998@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

   // Compose the email
   const mailOptions = {
    from: 'Sushil Portfolio <sushilrameshrajput1998@gmail.com>',
    to: 'sushilsinghrathore1998@gmail.com',
    subject: `New email from ${name} (${email}): ${subject}`,
    text: message,
  };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};

