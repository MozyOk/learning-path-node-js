const express = require('express');
const app = express();
const message = require('./messege.js');

console.log(message["letters"]);

// app.get("/", function(request,response){
//   response.send("<h1 style='text-align:center'>Hey friends, welcome to my app</h1>");
// })

// app.listen(3000, function(error){
//   if(error == true){
//     console.log("some error occured");
//   }else{
//     console.log("listening on localhost:3000");
//   }
// })