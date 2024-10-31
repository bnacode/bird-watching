import mongoose from "mongoose";

const Schema = mongoose.Schema;

const birdImageSchema = new Schema({
  naziv: {
    type: String
  },
  slike: {
    type: [String]
  },
  accepted: {
    type: [String]
  }
});

export default mongoose.model('BirdImageModel', birdImageSchema, 'SlikePtica');