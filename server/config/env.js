const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/bereal-songs-official',
  JWT_SECRET: process.env.JWT_SECRET || 'bereal-songs-official',
  PORT: process.env.PORT || 4000,
};
