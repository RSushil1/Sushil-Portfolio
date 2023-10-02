// Get all projects name and details
module.exports.GetAllProjectsList = function (db) {
  let results = {};
  let projects = [];

  const query = { id: { $gt: 0 } };
  const options = {
    // Sort returned documents in descending order by date
    sort: { id: -1 },
    // Include only the specified fields in each returned document
    projection: {
      _id: 1,
      projectName: 1,
      description: 1,
      appLink: 1,
      gitHubLink: 1,
      photo1: 1,
      date: 1
    },
  };

  return db
    .collection('Projects')
    .find(query, options) // Apply query and options here
    .toArray() // Convert cursor to an array of documents
    .then((projects) => {
      results.projects = projects;
      results.error = null;
      return results;
    })
    .catch((err) => {
      console.error(err);
      results.error = err;
      return results;
    });
};


// get project details by name
module.exports.projectByName = function (Name, db) {
  return db
    .collection("Projects")
    .find({ projectName: Name })
    .toArray() // Convert the cursor to an array
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
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = process.env.REDIRECT_URL;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN

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

