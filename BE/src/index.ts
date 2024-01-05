import express from "express";
import mongoose from "mongoose";
import router from "./routes";

const app = express();
const port = 5000;
const cors = require('cors')
const uri = "mongodb+srv://nero002:nero002@cluster0.cryk6la.mongodb.net/";

app.use(cors())
app.use(express.json());
app.use("/api", router);
app.get("/", async (req: express.Request, res: express.Response) => {
   res.send("Waysbucks API");
});

app.listen(port, async () => {
   try {
      await mongoose.connect(uri);

      console.log(`http://localhost:${port}`);
   } catch (error) {
      console.log(error);
   }
});

