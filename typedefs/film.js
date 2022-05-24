const { gql } = require('apollo-server');

const typeDefs = gql`
    type film {
        name: String,
        Director: String,
        actor: String
    }

    type Query {
        movies: [film]
    }
    
    input filmInput {
        name: String,
        Director: String,
        actor: String
    }

    input deletefilm{
        name: String
    }
    
    type Mutation {
        createfilm(input:filmInput): film
        deletefilm(input:deletefilm): film
    }
    `;

module.exports = { typeDefs }