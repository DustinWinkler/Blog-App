import mongoose from "mongoose";

const Schema = mongoose.Schema

const PostSchema = new Schema ({
  title: String,
  content: String,
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true})

const Post = mongoose.model('Post', PostSchema)
export default Post