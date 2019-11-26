const express = require("express");
const userRouter = require("./routes/userRoute");
const port = process.env.PORT;

const app = express();

require("./db/db");

app.use(express.json());
app.use(userRouter);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
