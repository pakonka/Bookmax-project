import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { role } from "../constants/staff.constant";

const staffSchema = new Schema(
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
    phone: {
      type: String,
      required: false,
      maxLength: 15,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true, // Trạng thái hoạt động
    },
    role: {
      type: Number,
      enum: [1, 2], // 1: Admin, 2: Manager
      required: false,
    },
    permissions: {
      type: [String], // Mảng quyền truy cập cụ thể
      // "access_products",
      // "access_categories",
      //  "access_orders",
      //  "access_news",
      //  "access_comments",
      //   "access_reviewProducts",
      //   "access_banners",,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

staffSchema.virtual("roleTitle").get(function () {
  return role[this.role as keyof typeof role];
});

staffSchema.virtual("fullName").get(function () {
  return this.first_name + " " + this.last_name;
});

const saltRounds = 10;

staffSchema.pre("save", async function (next) {
  const staff = this;

  const hash = bcrypt.hashSync(staff.password, saltRounds);

  staff.password = hash;

  next();
});

staffSchema.set("toJSON", { virtuals: true });
staffSchema.set("toObject", { virtuals: true });

const Staff = model("Staff", staffSchema);
export default Staff;
