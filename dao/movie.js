const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/apollodb");

const {MovieSchema} = require('../database/movies')


const getMovies = async()=>{
    const result = await MovieSchema.find({})
    return result
}

const saveMovies = async(movie)=>{    
    const result = await new MovieSchema(movie).save()
    return result
}

const deleteMovies = async(name)=>{
    const result = await MovieSchema.deleteOne({name})
    
}

module.exports = {getMovies, saveMovies, deleteMovies}


