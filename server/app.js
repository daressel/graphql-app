const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://daressel:ToLabibK2AUJsJGj@daresselclaster.3d72w.mongodb.net/graphql-test?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('connected to db');
});

app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('server starting on port 4000');
});
