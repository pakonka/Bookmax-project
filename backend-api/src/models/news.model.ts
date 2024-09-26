import { Schema, model } from "mongoose";

const newsSchema = new Schema(
  {
    title: {
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
    writer: {
      type: Schema.Types.ObjectId, // Liên kết đến tác giả
      ref: "Author", // Tham chiếu đến model Author
      required: true,
    },
    shortDesc: {
      type: String,
      required: true,
      maxLength: 500,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: false,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    isPublish: {
      type: Boolean,
      default: true, // Chế độ công khai
    },
    isDelete: {
      type: Boolean,
      default: false, // Soft delete
    },
    isHot: {
      type: Boolean,
      default: true, // Đánh dấu bài viết nổi bật
    },
  },
  {
    timestamps: true,
  }
);

newsSchema.set("toJSON", { virtuals: true });
newsSchema.set("toObject", { virtuals: true });

const News = model("News", newsSchema);
export default News;
