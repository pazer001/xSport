import mongoose from '../connection';

const postSchema = new mongoose.Schema({
    content: String,
    personId: String,
    tags: [String],
    likes: [String],
    isLiked: Boolean,
    likesLength: Number
});
const Post = mongoose.model('Post', postSchema);
export default Post;