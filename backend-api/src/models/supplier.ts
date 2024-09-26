import { Schema, model } from "mongoose";

const supplierSchema = new Schema(
  {
    supplier_name: {
      type: String,
      required: true,
      maxLength: 255,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      maxLength: 500,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

supplierSchema.set("toJSON", { virtuals: true });
supplierSchema.set("toObject", { virtuals: true });

const Supplier = model("Supplier", supplierSchema);
export default Supplier;
