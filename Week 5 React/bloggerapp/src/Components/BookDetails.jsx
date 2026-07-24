/*------------ Hands-on 13 ------------------------*/

function BookDetails() {
  const books = [
    { id: 1, name: "Java Complete Reference", author: "Herbert Schildt" },
    { id: 2, name: "Clean Code", author: "Robert C. Martin" },
    { id: 3, name: "Head First React", author: "O'Reilly" },
  ];

  return (
    <div>
      <h2>Book Details</h2>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <b>{book.name}</b> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;