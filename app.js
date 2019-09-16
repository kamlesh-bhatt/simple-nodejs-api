import express from "express";
import routes from "../backend/routes";

const app = express();
app.use(routes);
app.listen(80, (req, res) => {
  console.log("Listening at Port 80");
});
