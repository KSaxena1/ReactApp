import React, { useState } from "react";

const CheckOut = () => {
  const [checkOutList, setCheckOutList] = useState(0);

  return (
    <div className="card">
      <div className="card-header text-center">Check Out</div>
      <div className="card-body">
        <table className="table table-bordered table-sm text-center">
          <thead className="thead-light">
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Qty</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckOut;
