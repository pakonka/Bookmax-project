import { Schema, model } from "mongoose";
import { buildSlug } from "../helpers/buitSlug";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

const productSchema = new Schema(
  {
    product_name: {
      type: String,
      required: true,
      maxLength: 255,
      trim: true,
    },
    price: {
      type: Number,
      min: 0,
      default: 0,
    },
    discount: {
      type: Number,
      min: 0,
      max: 70,
      default: 0,
    },
    isBest: {
      type: Boolean,
      default: false,
    },
    isHome: {
      type: Boolean,
      default: false,
    },
    gifts: {
      type: [String], // Mảng quà tặng
      required: false,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    category: {
      type: Schema.Types.ObjectId, // Liên kết đến danh mục
      ref: "Category",
      required: true,
    },
    supplier: {
      type: Schema.Types.ObjectId, // Liên kết đến nhà cung cấp
      ref: "Supplier",
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId, // Liên kết đến tác giả
      ref: "Author",
      required: true,
    },
    model_year: {
      type: String,
      required: false,
      trim: true,
    },
    isDelete: {
      type: Boolean,
      default: false, // Soft delete
    },
    params: [
      {
        name: {
          type: String,
          required: true, // Loại bìa
        },
        value: {
          type: String,
          required: true, // Bìa mềm
        },
      },
    ],

    photos: [
      {
        link: {
          type: String,
          required: true,
        },
        sort: {
          type: Number,
          default: 0, // Số thứ tự sắp xếp
        },
      },
    ],
    relatedProducts: {
      type: [Schema.Types.ObjectId], // Danh sách ID sản phẩm liên quan
      required: false,
    },
    relatedPosts: {
      type: [Schema.Types.ObjectId], // Danh sách ID tin tức liên quan
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.set("toJSON", { virtuals: true });
productSchema.set("toObject", { virtuals: true });

productSchema.plugin(mongooseLeanVirtuals);

productSchema.pre("save", function (next) {
  const product = this;
  if (product.product_name) {
    product.slug = buildSlug(product.product_name);
  }
  next();
});

const Product = model("Product", productSchema);
export default Product;
