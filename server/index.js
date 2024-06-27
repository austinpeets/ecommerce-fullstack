const express = require("express");
const app = express();
const productRoute = require("../server/routes/product");
const userRoute = require("../server/routes/user");
const cors = require("cors");
app.use(cors());
app.use(express.json());
// const port = 8000

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/products", productRoute);
app.use("/user", userRoute);

const init = async () => {
    //runSeed function
  const port = (process.env.PORT = 8000);

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
};
init();
