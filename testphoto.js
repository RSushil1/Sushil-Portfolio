const { MongoClient, ObjectId } = require('mongodb'); // Import ObjectId
const sharp = require('sharp');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

// MongoDB Atlas connection string
const uri = process.env.MONGO_URL;

// Name of your MongoDB database and collection
const dbName = 'Portfolio';
const collectionName = 'Projects';

// Connect to MongoDB
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async (client) => {
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Read the WebP image file
    const imageBuffer = await fs.promises.readFile('client/assets/img/work-2.webp');

    // Convert the WebP image to another format (e.g., PNG or JPEG) using Sharp
    const convertedImageBuffer = await sharp(imageBuffer).toFormat('webp').toBuffer();

    // Specify the filter using the document's _id
    const objectId = '651adfbc106e836492094637'; // Replace with the actual _id
    const filter = { _id: new ObjectId(objectId) }; // Use ObjectId() to create an ObjectID

    // Define the update operation
    const updateOperation = {
      $set: {
        'photo1.name': 'webp_image',
        'photo1.image': convertedImageBuffer, // Set the new image binary data
      },
    };

    // Update the document that matches the filter
    const result = await collection.updateOne(filter, updateOperation);

    if (result.modifiedCount === 1) {
      console.log('Document updated successfully');
    } else {
      console.log('Document not found or not updated');
    }

    // Close the MongoDB connection
    client.close();
  })
  .catch((err) => {
    console.error('Error:', err);
  });
