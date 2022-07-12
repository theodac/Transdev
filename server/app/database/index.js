const mongoose = require("mongoose");

const MONGO_USER="damier"
const MONGO_PASSWORD="hY3LmwCfiX5CvxdY"
const MONGO_HOST="cluster0.fmjfv.mongodb.net"
const MONGO_DB="development"
const MONGO_LOCALHOST="localhost:27017"

const connectDatabase = () => {
  console.log("Connecting to database...");
  const uri = buildConnectionUri();
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", async () => {
    console.log("Mongoose connected to database");
  });

  return mongoose.connection;
};

const buildConnectionUri = () => {
  const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_DB } = process.env;

  return 'mongodb://localhost:27017/damier'
  // eslint-disable-next-line max-len
  //return `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`;
};

module.exports = { connectDatabase };
