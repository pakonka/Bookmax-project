import { Schema, model } from "mongoose";

const reviewProductSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId, // Liên kết đến sản phẩm
      ref: "Product",
      required: true,
    },
    customer: {
      type: Schema.Types.ObjectId, // Liên kết đến khách hàng
      ref: "Customer",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5, // Đánh giá từ 1 đến 5
    },
    comment: {
      type: String,
      required: false,
      maxLength: 500,
      trim: true,
    },
    isApproved: {
      type: Boolean,
      default: true, // Trạng thái phê duyệt
    },
  },
  {
    timestamps: true,
  }
);

reviewProductSchema.set("toJSON", { virtuals: true });
reviewProductSchema.set("toObject", { virtuals: true });

const ReviewProduct = model("ReviewProduct", reviewProductSchema);
export default ReviewProduct;
