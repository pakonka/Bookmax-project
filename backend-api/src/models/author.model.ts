import { Schema, model } from "mongoose";

const authorSchema = new Schema(
  {
    image: {
      type: String,
      required: false,
    },
    first_name: {
      type: String,
      required: true,
      maxLength: 100,
      trim: true,
    },
    last_name: {
      type: String,
      required: false,
      maxLength: 100,
      trim: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
      maxLength: 100,
      trim: true,
    },
    bio: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

authorSchema.set("toJSON", { virtuals: true });
authorSchema.set("toObject", { virtuals: true });

const Author = model("Author", authorSchema);
export default Author;
