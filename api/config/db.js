const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Mongodb Connection Successful ${process.env.DB_HOST} ${process.env.DB_NAME}` );
  })
  .catch((e) => {
    console.log(e);
  });
