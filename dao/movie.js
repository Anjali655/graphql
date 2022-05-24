const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/apollodb");

const {MovieSchema} = require('../database/movies')

const getMovies = async()=>{
    const result = await MovieSchema.find({})
    console.log(result)
    return result
}

const getOneMovieData = async(input)=>{
    const result = await MovieSchema.findOne({_id: input.id})
    console.log(result)
    return result
}

const saveMovies = async(movie)=>{    
    const result = await new MovieSchema(movie).save()
    return result
}


const deleteMovies = async(input)=>{
    const result = await MovieSchema.deleteOne({_id:input.id});
    if(result.deletedCount == 1){
        return {status: "deleted the record"}
    }
    
    return {status: "deletion failed"}
    
}

const updateMovies = async(input) => {
        let id = input?.id

        console.log(input, "from update");
        const result = await MovieSchema.updateOne({ _id: id}, {$set:{
            name:input.name,
            Director:input.Director,
            actor:input.actor
        }})
        return result;
}

module.exports = {getMovies, saveMovies, deleteMovies, updateMovies, getOneMovieData}


