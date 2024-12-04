const express = require("express");
const app = express();
const PORT = 3000;
app.listen(PORT, console.log("listening on port : 3000"));

app.get("/", (req, res) => {
  const jsondata = {
    id: "200",
    name: "deploy-demo app",
    isWorking: true,
    platform: "evennode.com",
  };
  res.send(jsondata);
});
