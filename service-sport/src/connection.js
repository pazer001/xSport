import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/x', {useNewUrlParser: true});
export default mongoose;
