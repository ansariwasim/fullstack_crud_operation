
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({

image: String,
caption: String

})

const POST = mongoose.model("POST", postSchema);
export default POST;