import { Schema, model } from "mongoose";

const bannerSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 255,
      trim: true,
    },
    link: {
      type: String,
      required: false,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    isHome: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      required: false,
      default: true,
    },
    startDate: {
      type: Date,
      required: false,
    },
    endDate: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

bannerSchema.set("toJSON", { virtuals: true });
bannerSchema.set("toObject", { virtuals: true });

const Banner = model("Banner", bannerSchema);
export default Banner;
