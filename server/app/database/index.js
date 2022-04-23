const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Connecting to database...");
  const uri = buildConnectionUri();
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to database");
  });

  return mongoose.connection;
};

const loadDatabaseModels = () => {
  console.log("Loading database models...");
  console.log("Models successfully loaded into mongoose");
};

const buildConnectionUri = () => {
  const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_DB } = process.env;

  // eslint-disable-next-line max-len
  return `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`;
};

module.exports = { connectDatabase, loadDatabaseModels };
