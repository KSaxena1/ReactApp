import React, { useState, useEffect } from "react";

const BookList = () => {
  const [bookList, setBookList] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/api/book/list")
      .then(res => res.json())
      .then(res => {
        setBookList(res);
      });
  });

  return (
    <div className="card">
      <div className="card-header text-center">Book List</div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">qty</th>
              <th scope="col">Price</th>
              <th scope="col">Add to Cart</th>
            </tr>
          </thead>
          <tbody>
            {bookList
              ? bookList.map(item => (
                  <tr key={item.bookId}>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>{item.qtyAtHand}</td>
                    <td>{item.Price}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookList;
