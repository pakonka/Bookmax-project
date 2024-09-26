import { Schema, model } from "mongoose";

const customerSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      maxLength: 100,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      maxLength: 100,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    phone: {
      type: String,
      required: false,
      maxLength: 15,
      trim: true,
    },
    address: {
      street: {
        type: String,
        required: false,
        trim: true,
      },
      city: {
        type: String,
        required: false,
        trim: true,
      },
      postalCode: {
        type: String,
        required: false,
        maxLength: 10,
        trim: true,
      },
    },
    isActive: {
      type: Boolean,
      default: true, // Trạng thái hoạt động
    },
  },
  {
    timestamps: true,
  }
);

customerSchema.virtual("fullName").get(function () {
  return this.first_name + " " + this.last_name;
});

customerSchema.set("toJSON", { virtuals: true });
customerSchema.set("toObject", { virtuals: true });

const Customer = model("Customer", customerSchema);
export default Customer;
