const mongoose = require("mongoose");

// const connectDatabase = () => {
//   mongoose
//     .connect(process.env.DB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     })
//     .then(con => {
//       console.log(
//         `MongoDB Database s-a conectat cu HOST-ul: ${con.connection.host}`
//       );
//     });
// };

// module.exports = connectDatabase;


const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `Ya está conectada las base de datos MongoDB a localhost: ${con.connection.host}`
      );
    });
};

module.exports = connectDatabase;
