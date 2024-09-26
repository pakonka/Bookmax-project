import { Schema, model } from "mongoose";

const writerSchema = new Schema(
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
    bio: {
      type: String,
      required: false,
      maxLength: 500,
      trim: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

writerSchema.virtual("fullName").get(function () {
  return this.first_name + " " + this.last_name;
});

writerSchema.set("toJSON", { virtuals: true });
writerSchema.set("toObject", { virtuals: true });

const Writer = model("Writer", writerSchema);
export default Writer;
