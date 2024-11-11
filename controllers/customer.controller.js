import customerModel from "../models/customer.model.js";

// Function for get customer data in bulk
export const getBulkCustomerData = async (request, response) => {
  try {
    const customerBulk = await customerModel.find();
    response.json(customerBulk);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

// Function for get Single customer data
export const getSingleCustomerData = async (request, response) => {
  try {
    const customer = await customerModel.findById(request.params.customerId); //  ==  _id
    if (customer == null) {
      return response.status(404).json({ message: "Cannot find customer" });
    } else {
      response.json(customer);
    }
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

// Function for create customer data
export const createCustomerData = async (request, response) => {
  const newCustomer = new customerModel({
    customerId: request.body.customerId,
    customerName: request.body.customerName,
    // Add additional fields as needed from the request body
  });

  try {
    const customerNew = await newCustomer.save();
    return response.status(201).json(customerNew);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

// Function for update customer data
export const updateCustomerData = async (request, response) => {
  try {
    const customerUpdate = await customerModel.findByIdAndUpdate(
      request.params.customerId,  //  ==  _id
      request.body,
      { new: true }
    );
    if (customerUpdate == null) {
      return response.status(404).json({ message: "Cannot find customer" });
    } else {
      response.json(customerUpdate);
    }
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};



// Function for delete customer data
export const deleteCustomerData = async (request, response) => {
  try {
    const deleteCustomer = await customerModel.findByIdAndDelete(request.params.customerId);  //  ==  _id
    if (deleteCustomer == null) {
      return response.status(404).json({ message: "Cannot find customer" });
    } else {
      response.json({ message: "Customer deleted successfully" });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
