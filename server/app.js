const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('dotenv').config().parsed

const app = express();

mongoose.connect(config.DB_LINK);
mongoose.connection.once('open', () => {
  console.log('connected to local db graphql');
});

app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('server starting on port 4000');
});
