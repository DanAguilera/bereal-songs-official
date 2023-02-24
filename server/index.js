const express = require('express');
const { ApolloServer } = require('apollo-server-express');
// const mongoose = require('mongoose');
const cors = require('cors');
const { userSchemas, userResolvers, postSchemas, postResolvers } = require('./schemas/index');
// const { userTypeSchemas } = require('./schemas/userSchemas');
// const { postTypeSchemas } = require('./schemas/postSchemas');
// const { postResolvers } = require('./schemas/postResolvers');
// const { userResolvers } = require('./schemas/userResolvers');
const connectDB = require('./config/db');
const { authMiddleware } = require('./utils/token');


const PORT = process.env.PORT || 4000;
const app = express();
const server = new ApolloServer({
  userSchemas, userResolvers, postSchemas, postResolvers,
  context: authMiddleware,
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(authMiddleware);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async (userSchemas, userResolvers, postSchemas, postResolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  connectDB.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

startApolloServer(userSchemas, userResolvers, postSchemas, postResolvers);



  



