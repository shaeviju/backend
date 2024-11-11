import customerModel from "../models/customer.model.js";

// Function for get customer data in bulk
export const getBulkCustomerData = async (request, response) => {
  //response.json({ message: `To fetch customer data in bulk` });

  try {
    const customerBulk = await customerModel.find();
    response.json(customerBulk);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

// Function for get Single customer data in bulk
export const getSingleCustomerData = (request, response) => {
  response.json({ message: `To fetch customer data in single` });
};

// Function for create customer data in bulk
export const createCustomerData = async (request, response) => {
  // To pass data to db
  const newCustomer = new customerModel({
    customerId: request.body.customerId,
    customerName: request.body.customerName,
  });

  try {
    const customerNew = await newCustomer.save();
    return response.status(201).json(customerNew);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }

  // response.json({ message: `To create customer data` });
  // return response.json(request.body);
};

// Function for update customer data in bulk
export const updateCustomerData = (request, response) => {
  response.json({ message: `To update customer data` });
};



// Function for delete customer data in bulk
export const deleteCustomerData = (request, response) => {
  response.json({ message: `To delete customer data` });
};
