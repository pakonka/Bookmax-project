import { Schema, model } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import { orderStatus, paymentType } from "../constants/order.constant";

const orderItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    min: 1,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
  discount: {
    type: Number,
    min: 0,
    required: false,
    default: 0,
  },
});

const orderSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    order_status: {
      type: Number,
      enum: [1, 2, 3, 4], // 1: Pending, 2: Processing, 3: Rejected, 4: Completed
      default: 1,
    },
    payment_type: {
      type: Number,
      enum: [1, 2, 3, 4], // 1: COD, 2: Credit, 3: ATM, 4: Cash
      default: 4,
    },
    order_date: {
      type: Date,
      default: Date.now,
    },
    require_date: {
      type: Date,
      required: false,
      default: null,
    },
    shipping_date: {
      type: Date,
      required: false,
      default: null,
    },
    order_note: {
      type: String,
      required: false,
    },
    order_items: [orderItemSchema],
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Virtual field for order status title
orderSchema.virtual("orderStatusTitle").get(function () {
  return orderStatus[this.order_status as keyof typeof orderStatus];
});

orderSchema.virtual("paymentTypeTitle").get(function () {
  return paymentType[this.payment_type as keyof typeof paymentType];
});

// Apply mongoose-lean-virtuals plugin
orderSchema.plugin(mongooseLeanVirtuals);

// Enable virtuals for JSON and object output
orderSchema.set("toJSON", { virtuals: true });
orderSchema.set("toObject", { virtuals: true });

const Order = model("Order", orderSchema);

export default Order;
