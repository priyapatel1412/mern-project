const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "server/config/config.env" });

const connection_string = process.env.CONNECTION_STRING;

const connectDatabase = () => {
  mongoose.connect(connection_string).then((data) => {
    console.log(`MongoBD connected with server ${data.connection.host}`);
  });
};

module.exports = connectDatabase;
