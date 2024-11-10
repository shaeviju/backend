import express from "express";
import customerRouter from "./routes/customer.route.js";
import connectDb from "./lib/dbConnection.js";

const app = express();
const PORT = 8000;

connectDb();

// Creation of middleware

app.use('/', customerRouter )



app.listen(PORT, () => {
  console.log(`The server running on port ${PORT}`);
});
