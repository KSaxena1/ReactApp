import React, { useState, useEffect } from "react";

const CoffeeList = () => {
  const [coffeeList, setCoffeeList] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/api/coffee/list")
      .then(res => res.json())
      .then(res => {
        setCoffeeList(res);
      });
  });

  return (
    <div className="card">
      <div className="card-header text-center">Coffee List</div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th scope="col">Flavor</th>
              <th scope="col">Available qty</th>
              <th scope="col">Price/Cup</th>
              <th scope="col">Add to Cart</th>
            </tr>
          </thead>
          <tbody>
            {coffeeList
              ? coffeeList.map(item => (
                  <tr key={item.coffeeId}>
                    <td>{item.coffeeName}</td>
                    <td>{item.qtyAvailForCups}</td>
                    <td>{item.pricePerCup}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoffeeList;
