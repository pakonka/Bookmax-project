import { Schema, model } from "mongoose";

const commentSchema = new Schema(
  {
    news: {
      type: Schema.Types.ObjectId,
      ref: "News", // Tham chiếu đến model News
      required: true,
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    content: {
      type: String,
      required: true,
      maxLength: 500,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

commentSchema.set("toJSON", { virtuals: true });
commentSchema.set("toObject", { virtuals: true });

const Comment = model("Comment", commentSchema);
export default Comment;
