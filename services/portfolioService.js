
// Send gmail to me
const dotenv = require('dotenv')
dotenv.config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// Configuration
const AUTH_TYPE = process.env.AUTH_TYPE || 'OAuth2'; // 'OAuth2' or 'AppPassword'
const MAIL_USER = process.env.MAIL_USER || 'sushilsinghrathore1998@gmail.com';

// OAuth2 Config
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = process.env.REDIRECT_URL;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

// App Password Config
const MAIL_APP_PASSWORD = process.env.MAIL_APP_PASSWORD;

let oAuth2Client;
if (AUTH_TYPE === 'OAuth2') {
  oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
}

// Get all projects name and details
module.exports.GetAllProjectsList = function (db) {
  let results = {};
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

module.exports.createGmail = async function (data) {
  try {
    const { name, email, subject, message } = data;
    let transportConfig;

    if (AUTH_TYPE === 'AppPassword') {
      // Option 1: App Password (Simpler, more stable)
      transportConfig = {
        service: 'gmail',
        auth: {
          user: MAIL_USER,
          pass: MAIL_APP_PASSWORD,
        },
      };
    } else {
      // Option 2: OAuth2 (Current)
      if (!oAuth2Client) {
        throw new Error("OAuth Client not initialized. Check credentials.");
      }
      const accessToken = await oAuth2Client.getAccessToken();
      transportConfig = {
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: MAIL_USER,
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      };
    }

    const transport = nodemailer.createTransport(transportConfig);

    // Compose the email
    const mailOptions = {
      from: `Sushil Portfolio <${MAIL_USER}>`,
      to: MAIL_USER, // Sending to self
      replyTo: email,
      subject: `Portfolio Contact: ${subject} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error("Email Error:", error);
    return { error: error.message || error };
  }
};
