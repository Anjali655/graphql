const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/apollodb");

const dataSchema = new mongoose.Schema(
    {
        name: String,
        Director: String,
        actor: String
    }
    );
    
const MovieSchema =  mongoose.model('data', dataSchema);
module.exports = {MovieSchema};