import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book
    authors: [Author!]!
    author(id: ID!): Author
  }

  type Mutation {
    addAuthor(name: String!): Author
    addBook(title: String!, authorId: ID!): Book
    updateBook(id: ID!, title: String, authorId: ID): Book
    deleteBook(id: ID!): Book
  }
`;