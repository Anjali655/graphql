const { gql } = require('apollo-server');

const typeDefs = gql`
    type film {
        name: String,
        Director: String,
        actor: String
    }
    
    input filmInput {
        id: ID
    }

    input filmOutput {
        name: String,
        Director: String,
        actor: String
    }

    input deletefilm{
        id: ID
    }

    type deletefilmOutput{
        status: String
    }
    
    input updatefilmInput{
        id:ID,
        name:String,
        Director: String,
        actor: String
    }

    type updatefilmOutput{
        status: String
    }

    type Query {
        movies: [film],
        getOneMovie(input:filmInput):film
    }

    type Mutation {
        createfilm(input:filmInput): film
        deletefilm(input:deletefilm): deletefilmOutput
        updatefilm(input:updatefilmInput): updatefilmOutput
    }
    `;

module.exports = { typeDefs }