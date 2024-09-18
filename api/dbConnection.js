const mongoose = require("mongoose");

const mongoDB_uri = "mongodb+srv://anmol16:anmol16@cluster0.kfcqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose;

function dbConnection() {
  mongoose
    .connect(mongoDB_uri)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;




