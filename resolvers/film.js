// const { gql } = require('apollo-server');
const {getMovies, saveMovies} = require('../dao/movie');


const resolvers = {
    Query: {
        movies: () => {
            return getMovies()
        }
    },

    Mutation:{
        createfilm: async(parents,info) => {
            
            return saveMovies(info.input);
        }
    }
};


module.exports = { resolvers };