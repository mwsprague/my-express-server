const express = require("express");
const app = express();

app.get("/", function(req, res){
   console.log(req);
   res.send("GET / response from my-express-server running on port 3000");
});

app.listen(3000, function(){
   console.log("my-express-server started on port 3000");
});
