

// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     mongoose.set('strictQuery', false);

//     const options = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     };

//     const conn = await mongoose.connect(process.env.MONGODB_URI, options);

//     console.log(`Database Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error('Error connecting to the database:', error.message);
//     process.exit(1); // Exit the process with an error code
//   }
// };

// module.exports = connectDB;





// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     mongoose.set('strictQuery', false);

//     // Check if the MONGODB_URI environment variable is defined
//     if (!process.env.MONGODB_URI) {
//       throw new Error('MONGODB_URI is not defined');
//     }

//     const options = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     };

//     const conn = await mongoose.connect(process.env.MONGODB_URI, options);

//     console.log(`Database Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error('Error connecting to the database:', error.message);
//     process.exit(1); // Exit the process with an error code
//   }
// };


// module.exports = connectDB;




// db.js
const mongoose = require('mongoose');
const Post = require('./models/Post'); // Adjust the path based on your file structure

const connectDB = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const conn = await mongoose.connect(process.env.MONGODB_URI, options);
    console.log(`Database Connected: ${conn.connection.host}`);

    // Insert data here
    await insertData();
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1); // Exit the process with an error code
  }
};

const insertData = async () => {
  const postData = [
    { title: 'Post 1', body: 'Content of post 1' },
    { title: 'Post 2', body: 'Content of post 2' },
    // Add more data as needed
  ];

  try {
    const result = await Post.insertMany(postData);
    console.log('Data inserted successfully:', result);
  } catch (error) {
    console.error('Error inserting data:', error.message);
  } finally {
    mongoose.disconnect();
  }
};

module.exports = connectDB;

