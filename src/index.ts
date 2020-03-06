const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas/type-defs');

const PORT = process.env.PORT || 4444;

if (module.hot) {
	module.hot.accept();
	module.hot.dispose(() => console.log('module disposed'));
}

const server = new ApolloServer({ typeDefs });
server.listen().then(data => {
	console.info(`Your app is running on: ${data}`);
});
