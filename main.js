import expres from "express";

const app = expres();
const PORT = 8000;

// To fetch customer data in bulk
app.get("/customer", (request, response) => {
  response.json({ message: `To fetch customer data in bulk` });
});

// To create customer data
app.post("/customer", (request, response) => {
  response.json({ message: `To create customer data` });
});

// To update customer data
app.put("/customer/:customerId", (request, response) => {
  response.json({ message: `To update customer data` });
});

// To delete customer data
app.delete("/customer/:customerId", (request, response) => {
  response.json({ message: ` To delete customer data  ` });
});

app.listen(PORT, () => {
  console.log(`The server running on port ${PORT}`);
});
