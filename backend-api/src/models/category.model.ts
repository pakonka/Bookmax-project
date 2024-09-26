import { Schema, model } from "mongoose";
import { buildSlug } from "../helpers/buitSlug";

const categorySchema = new Schema(
  {
    category_name: {
      type: String,
      required: true,
      maxLength: 255,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      maxLength: 255,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      maxLength: 500,
      trim: true,
    },
    banner: {
      type: Schema.Types.ObjectId, // Liên kết đến banner
      ref: "Banner", // Tham chiếu đến model Banner
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

categorySchema.set("toJSON", { virtuals: true });
categorySchema.set("toObject", { virtuals: true });

categorySchema.pre("save", function (next) {
  const category = this;
  if (category.category_name) {
    category.slug = buildSlug(category.category_name);
  }
  next();
});

const Category = model("Category", categorySchema);
export default Category;
