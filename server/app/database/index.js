const mongoose = require("mongoose");

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

  // eslint-disable-next-line max-len
  return `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`;
};

module.exports = { connectDatabase };