const express = require("express");
const app = express();
const PORT = 4100;
app.listen(PORT, console.log(`listening on port: ${PORT}`));

app.get("/", (req, res) => {
  const jsondata = {
    id: "200",
    name: "deploy-demo app",
    isWorking: true,
    platform: "digitalocean deployment",
  };
  res.send(jsondata);
});
