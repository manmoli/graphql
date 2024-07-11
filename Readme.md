
# GraphQL Server Example

This project demonstrates a simple GraphQL server setup using Apollo Server and Express. The server allows you to perform basic CRUD operations on books and authors.

## Project Structure

```
.
├── package.json
├── package-lock.json
├── src
│   ├── data.ts
│   ├── index.ts
│   ├── resolvers.ts
│   └── schemas.ts
└── tsconfig.json
```

## Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)

## Setup

1. **Install Dependencies**: Make sure you have all necessary Node.js modules installed.
   ```bash
   npm install
   ```

## Running the Server

To start the server, run:
```bash
npm start
```

This will start the server using `ts-node` and run the code in `src/index.ts`.

## GraphQL API

You can test the GraphQL API using Postman or any other GraphQL client by making POST requests. Use the following GraphQL queries and mutations:

### Mutations

#### Add a Book
```json
{
  "query": "mutation { addBook(title: "El llamado del chuthulu", authorId: "3") { id title author { id name } } }"
}
```

#### Add an Author
```json
{
  "query": "mutation { addAuthor(name: "HP Lovecraft") { id name } }"
}
```

### Queries

#### Get All Books
```json
{
    "query": "query { books { title author { id } } }"
}
```

## Notes

- Make sure your GraphQL server is running before testing the API.
- Adjust the queries and mutations according to your schema definitions and data requirements.

## Conclusion

This project demonstrates a simple setup for a GraphQL server using Apollo Server and Express. By using the provided queries and mutations, you can easily test the server and understand how to perform basic CRUD operations using GraphQL.
