const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/programming-thoughts',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// module.exports = mongoose.connection;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bereal-songs-official', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
