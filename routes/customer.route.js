import expres from "express";

const router = expres.Router()  

// To fetch customer data in bulk
router.get("/customer", (request, response) => {
  response.json({ message: `To fetch customer data in bulk` });
});

// To create customer data
router.post("/customer", (request, response) => {
  response.json({ message: `To create customer data` });
});

// To update customer data
router.put("/customer/:customerId", (request, response) => {
  response.json({ message: `To update customer data` });
});

// To delete customer data
router.delete("/customer/:customerId", (request, response) => {
  response.json({ message: ` To delete customer data  ` });
});

export default router;