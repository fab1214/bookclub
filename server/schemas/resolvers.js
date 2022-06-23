const resolvers = {
    //define function to connect to query typeDef to perform the CRUD that is expected
    Query: {
        helloWorld: () => {
            return 'HELLO WORLD';
        }
    }
}

module.exports = resolvers;