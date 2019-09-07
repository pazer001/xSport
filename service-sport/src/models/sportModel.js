import mongoose from '../connection';

const sportSchema = new mongoose.Schema({
    player: String,
    team: String,
    league: String,
    country: String,
    sport: Number
});
const Sport = mongoose.model('Sport', sportSchema);
export default Sport;