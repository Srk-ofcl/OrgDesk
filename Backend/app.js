const express = require('express'); 
const app = express();           
const port = 5000;            
const userRoute=require('./app/routes/user.js')
const router = express.Router();
// require database connection 
const dbConnect = require('./app/middleware/db_connect.js');

const bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");

// require database connection
const User = require("./app/model/userModel.js");
const auth = require("./app/middleware/auth.js");


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

TODO:
// app.get('/', get_homeData);
app.use("/", userRoute)


FIXME:
app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});

// execute database connection 
dbConnect();


  // free endpoint
  app.get("/free-endpoint", (request, response) => {
    response.json({ message: "You are free to access me anytime" });
  });
  
  // authentication endpoint
  app.get("/auth-endpoint", auth, (request, response) => {
    response.send({ message: "You are authorized to access me" });
  });
  

// register endpoint
// app.post("/register", (request, response) => {
//     // hash the password
//     bcrypt
//       .hash(request.body.password, 10)
//       .then((hashedPassword) => {
//         // create a new user instance and collect the data
//         const user = new User({
//           email: request.body.email,
//           password: hashedPassword,
//         });
  
//         // save the new user
//         user
//           .save()
//           // return success if the new user is added to the database successfully
//           .then((result) => {
//             response.status(201).send({
//               message: "User Created Successfully",
//               result,
//             });
//           })
//           // catch erroe if the new user wasn't added successfully to the database
//           .catch((error) => {
//             response.status(500).send({
//               message: "Error creating user",
//               error,
//             });
//           });
//       })
//       // catch error if the password hash isn't successful
//       .catch((e) => {
//         response.status(500).send({
//           message: "Password was not hashed successfully",
//           e,
//         });
//       });
//   });
  
 
  

  


module.exports = router