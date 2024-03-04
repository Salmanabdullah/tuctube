import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Video = mongoose.model("Video", videoSchema);


