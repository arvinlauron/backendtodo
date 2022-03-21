const mongoose = require("mongoose");

mongoose
  .connect(`${process.env.DB_HOST}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Mongodb Connection Successful ${process.env.DB_HOST} ` );
  })
  .catch((e) => {
    console.log(e);
  });
