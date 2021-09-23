import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar Date

  type Posting {
    description: String!
    id: ID!
    title: String!
  }

  type User {
    email: String!
    id: ID!
  }

  type UserSession {
    createdAt: Date!
    expiresAt: Date!
    id: ID!
    user: User!
  }

  type Mutation {
    createPosting(description: String!, title: String!): Posting!
    createUser(email: String!, password: String!): User!
    createUserSession(email: String!, password: String!): UserSession!
    deleteUserSession(sessionId: ID!): Boolean!
  }

  type Query {
    Postings: [Posting!]!
    userSession(me: Boolean!): UserSession
  }
`;

export default typeDefs;
