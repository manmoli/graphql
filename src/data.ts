export interface Author {
    id: number;
    name: string;
    books: Book[];
  }
  
  export interface Book {
    id: number;
    title: string;
    author: Author;
  }
  
  export const authors: Author[] = [];
  export const books: Book[] = [];