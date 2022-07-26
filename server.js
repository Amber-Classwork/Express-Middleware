const app = require('./app');
// 3) START SERVER
const dotenv = require('dotenv');

const mongoose = require('mongoose');
dotenv.config({"path": "./config.env"});
mongoose.connect(process.env.DB_URI).then(
  (response)=>{
    console.log("Connected Successfully to MongoDB");
  }
).catch((error)=>{
  console.log(error.message);
})
const port = 3000;
app.listen(port, ()=>{
  console.log(`Server Listening on Port ${port}...`);
})