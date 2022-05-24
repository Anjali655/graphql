const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/apollodb");
const {typeDefs} = require('./typedefs/film');
const {resolvers} = require('./resolvers/film');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true

});


server.listen().then(({url}) => {
    console.log(`🚀 listening on ${url}`);
});