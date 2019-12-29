import React, { useContext, useState, useEffect } from "react";
import checkOutContext from "./checkOutContext";

const CheckOut = props => {
  const checkOutdata = useContext(checkOutContext);
  const [checkOutList, setCheckOutList] = useState(0);

  const initialFormState = { id: null, name: "", item: [] };
  const [user, setUser] = useState(initialFormState);

  const initialTaxTotal = { subtotal: 0, tax: 0, total: 0 };
  const [taxTotal, setTaxTotal] = useState(initialTaxTotal);

  const calcTotal = data => {
    var subtotal = 0;
    var tax = 0;
    var total = 0;

    for (var i = 0; i < data.length; i++) {
      subtotal += data[i].price;
    }

    subtotal = Math.round(subtotal * 100) / 100;
    tax = Math.round(subtotal * 0.07 * 100) / 100;
    total = Math.round((subtotal + tax) * 100) / 100;

    setTaxTotal({ subtotal: subtotal, tax: tax, total: total });
  };

  const clearState = () => {
    setCheckOutList(0);
    setUser(initialFormState);
    setTaxTotal(initialTaxTotal);
  };

  useEffect(() => {
    setCheckOutList(checkOutdata);
    calcTotal(checkOutdata);
  }, [checkOutdata]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:4000/api/order/order", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: user.name,
        subtotal: taxTotal.subtotal,
        tax: taxTotal.tax,
        total: taxTotal.total,
        item: checkOutList
      })
    })
      .then(clearState)
      .then(props.resetCOutData());
  };

  return (
    <form onSubmit={handleOnSubmit}>
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
            <tbody>
              {checkOutList
                ? checkOutList.map(item => (
                    <tr key={item.id}>
                      <td>{item.product}</td>
                      <td>{item.qty}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
          <table className="table table-bordered table-sm text-center text-sm">
            <tbody>
              <tr key="taxtotalt">
                <td>Subtotal</td>
                <td>Tax</td>
                <td>
                  <strong>Total</strong>
                </td>
              </tr>
              <tr key="taxtotal">
                <td>{taxTotal.subtotal}</td>
                <td>{taxTotal.tax}</td>
                <td>
                  <strong>{taxTotal.total}</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="input-group mb-3">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="coffee is for"
              value={user.name}
              onChange={handleInputChange}
            />
            <div className="input-group-append" onClick={handleOnSubmit}>
              <button
                className="btn btn-sm btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckOut;
