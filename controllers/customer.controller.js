// Function for get customer data in bulk
export const getBulkCustomerData = (request, response) => {
  response.json({ message: `To fetch customer data in bulk` });
};

// Function for get Single customer data in bulk
export const getSingleCustomerData = (request, response) => {
  response.json({ message: `To fetch customer data in single` });
};

// Function for create customer data in bulk
export const createCustomerData = (request, response) => {
  response.json({ message: `To create customer data` });
};

// Function for update customer data in bulk
export const updateCustomerData = (request, response) => {
  response.json({ message: `To update customer data` });
};

// Function for delete customer data in bulk
export const deleteCustomerData = (request, response) => {
  response.json({ message: `To delete customer data` });
};
