import { model, Schema } from "mongoose";

const customerSchema = new Schema(
  {
    customerId: {
      type: String,
      required: false,
      unique: false,
    },
    customerName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
      match: /.+\@.+\..+/,
    },
    phone: {
      type: String,
      required: false,
    },
    address: {
        no: { type: String },
      street: { type: String },
      city: { type: String },
    },
    birthDate: {
      type: Date,
      required: false,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"], // Limited to specific values
      required: false,
    },
    accountBalance: {
      type: Number,
      default: 0.00,
    },
    loyaltyPoints: {
      type: Number,
      default: 0,
    },
    accountStatus: {
      type: String,
      enum: ["Active", "Inactive", "Suspended"],
      default: "Active",
    },
    purchaseHistory: [
        { 
          purchaseId: { type: String, required: false },
          items: [
            {
              productId: { type: String, required: false },
              quantity: { type: Number, required: false },
              price: { type: Number, required: false } // Price at the time of purchase
            }
          ],
          totalAmount: { type: Number, required: false },
          purchaseDate: { type: Date, required: false }
        }
      ],
  },
  {
    timestamps: false,
  }
);

// creating model

const customerModel = model("customer", customerSchema);

// -> "customer" -> how data going to be save in db ** but in plural - produts
// ->

export default customerModel;
