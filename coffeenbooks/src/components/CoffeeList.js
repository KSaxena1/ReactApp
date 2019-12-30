import React, { useState, useEffect } from "react";

const CoffeeList = props => {
  const [coffeeList, setCoffeeList] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/api/coffee/list")
      .then(res => res.json())
      .then(res => {
        setCoffeeList(res);
      });
  }, []);

  return (
    <div className="card">
      <div className="card-header text-center">Coffee List</div>
      <div className="card-body prodScroll">
        <table className="table table-bordered table-sm text-center">
          <thead className="thead-light">
            <tr>
              <th scope="col">Flavor</th>
              <th scope="col">Available qty</th>
              <th scope="col">Price/Cup</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {coffeeList
              ? coffeeList.map(item => (
                  <tr key={item.coffeeId}>
                    <td>{item.coffeeName}</td>
                    <td>{item.qtyAvailForCups}</td>
                    <td>{item.pricePerCup}</td>
                    <td
                      onClick={() => {
                        const data = {
                          id: item.coffeeId,
                          product: `${item.coffeeName}`,
                          qty: 1,
                          price: item.pricePerCup
                        };
                        props.addCOutData(data);
                      }}
                    >
                      <button className="btn btn-sm btn-outline-secondary">
                        Add
                      </button>
                    </td>
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
