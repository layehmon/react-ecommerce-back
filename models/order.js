const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: ObjectId,
          ref: "Product",
        },
        count: { type: Number, required: true },
        color: { type: String },
      },
    ],
    paymentIntent: {},
    orderStatus: {
      type: String,
      default: "Not Processed",
      enum: [
        "Not Processed",
        "Cash On Delivery",
        "processing",
        "Dispatched",
        "Cancelled",
        "Completed",
      ],
    },
    
    orderdBy: { type: ObjectId, ref: "User" },
    deliveryAddress: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
