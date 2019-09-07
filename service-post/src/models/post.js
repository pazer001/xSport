import mongoose from '../connection';

const postSchema = new mongoose.Schema({
    content: String,
    personId: Number,
    tags: [String],
    likes: [String],
    likesLength: Number
});
const Post = mongoose.model('Post', postSchema);
export default Post;