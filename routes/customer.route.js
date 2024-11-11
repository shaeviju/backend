import express from "express";
import {
  createCustomerData,
  deleteCustomerData,
  getBulkCustomerData,
  getSingleCustomerData,
  updateCustomerData,
} from "../controllers/customer.controller.js";

const router = express.Router();

// To fetch customer data in bulk
router.get("/customer", getBulkCustomerData);

// To fetch single customer data
router.get("/customer/:customerId", getSingleCustomerData);

// To create customer data
router.post("/customer", createCustomerData);

// To update customer data
router.put("/customer/:customerId", updateCustomerData);

// To delete customer data
router.delete("/customer/:customerId", deleteCustomerData);

export default router;
