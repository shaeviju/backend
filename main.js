import express from "express";
import customerRouter from "./routes/customer.route.js";

const app = express();
const PORT = 8000;

// Creation of middleware

app.use('/', customerRouter )



app.listen(PORT, () => {
  console.log(`The server running on port ${PORT}`);
});
