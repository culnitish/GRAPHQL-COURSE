import { GraphQLServer, PubSub } from 'graphql-yoga';
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import User from './resolvers/User'
import Subscription from './resolvers/Subscription'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'
import db from './db'


const pubsub = new PubSub()

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Post,
        Mutation,
        Comment,
        User,
        Subscription
    },
    context: {
        db,
        pubsub
    }
})

server.start(() => console.log(` Server is Listening on Port 4000...`))