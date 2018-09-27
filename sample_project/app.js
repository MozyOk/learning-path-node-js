const express = require('express');
const app = express();
const message = require('./messege.js');
let all_letters = ' ';

console.log(message["letters"]);

app.get("/", function(request,response){

  for(let i = 0; i <= message["letters"].length -1; i++){
    all_letters += message["letters"][i] + " <br/>";
  }
  response.send(all_letters);
})

app.listen(3000, function(error){
  if(error == true){
    console.log("some error occured");
  }else{
    console.log("listening on localhost:3000");
  }
})