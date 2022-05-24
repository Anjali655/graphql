// const { gql } = require('apollo-server');
const {getMovies, saveMovies, deleteMovies, updateMovies, getOneMovieData} = require('../dao/movie');


const resolvers = {
    Query: {
        movies: () => {
            return getMovies()
        },
        getOneMovie: async(parents, info) =>{
            return getOneMovieData(info.input)
        }
    },

    Mutation:{
        createfilm: async(parents,info) => {
            
            return saveMovies(info.input);
        },

        deletefilm: async(parents,info) => {
            return deleteMovies(info.input);
        },

        updatefilm: (parents,info) => {
            return updateMovies(info.input);
        }
    }
};


module.exports = { resolvers };