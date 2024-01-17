import express from "express";
import cors from "cors";
import allRoute from "./router/router.js"
const port = 3112;
const app = express();

app.use(cors());
app.use(express.json())


app.use("/texting" , allRoute)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
