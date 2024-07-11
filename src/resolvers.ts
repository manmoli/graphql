import { authors, books, Author, Book } from './data';

let authorIdCounter = 1;
let bookIdCounter = 1;

export const resolvers = {
  Query: {
    books: () => books,
    book: (_: any, { id }: { id: number }) => books.find(book => book.id === id),
    authors: () => authors,
    author: (_: any, { id }: { id: number }) => authors.find(author => author.id === id),
  },
  Mutation: {
    addAuthor: (_: any, { name }: { name: string }) => {
      const newAuthor: Author = {
        id: authorIdCounter++,
        name,
        books: []
      };
      authors.push(newAuthor);
      return newAuthor;
    },
    addBook: (_: any, { title, authorId }: { title: string; authorId: number }) => {
        console.log(authorId) 
        console.log(authors[0]?.id)
        console.log(authors.find(author => author.id == authorId))
      const author = authors.find(author => author.id == authorId);
      if (!author) {
        throw new Error('Author not found');
      }
      const newBook: Book = {
        id: bookIdCounter++,
        title,
        author
      };
      books.push(newBook);
      author.books.push(newBook);
      return newBook;
    },
    updateBook: (_: any, { id, title, authorId }: { id: number; title?: string; authorId?: number }) => {
      const book = books.find(book => book.id === id);
      if (!book) {
        throw new Error('Book not found');
      }
      if (title) {
        book.title = title;
      }
      if (authorId) {
        const newAuthor = authors.find(author => author.id === authorId);
        if (!newAuthor) {
          throw new Error('Author not found');
        }
        const oldAuthor = book.author;
        book.author = newAuthor;
        oldAuthor.books = oldAuthor.books.filter(b => b.id !== book.id);
        newAuthor.books.push(book);
      }
      return book;
    },
    deleteBook: (_: any, { id }: { id: number }) => {
      const bookIndex = books.findIndex(book => book.id === id);
      if (bookIndex === -1) {
        throw new Error('Book not found');
      }
      const book = books[bookIndex];
      books.splice(bookIndex, 1);
      book.author.books = book.author.books.filter(b => b.id !== id);
      return book;
    }
  },
  Author: {
    books: (author: Author) => author.books,
  },
  Book: {
    author: (book: Book) => book.author,
  },
};
