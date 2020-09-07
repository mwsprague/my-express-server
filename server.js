const express = require("express");
const app = express();

var canary_counter = 0;

app.get("/", function(req, res){
   console.log(req);
   res.send("GET / response from my-express-server running on port 3000");
});

app.get("/canary", (req, res) => {
   console.log("GET /Canary called 2 out of 10");
   canary_counter += 1;
   if(canary_counter == 5) {
      res.send("Canary");
      canary_counter = 0;
   }
   else{
      res.send("Not Canary");
   }
});

app.listen(3000, function(){
   console.log("my-express-server started on port 3000");
});
