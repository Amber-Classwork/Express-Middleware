const app = require('./app');
// 3) START SERVER
const port = 3000;
app.listen(port, ()=>{
  console.log(`Server Listening on Port ${port}...`);
})