import React, { useContext, useState, useEffect } from "react";
import checkOutContext from "./checkOutContext";

const CheckOut = () => {
  const checkOutdata = useContext(checkOutContext);
  const [checkOutList, setCheckOutList] = useState(0);

  const initialFormState = { id: null, name: "", item: [] };
  const [user, setUser] = useState(initialFormState);

  useEffect(() => {
    setCheckOutList(checkOutdata);
  }, [checkOutdata]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleOnSubmit = event => {
    console.log(`{id: 1001, name: ${user.name}, item: ${checkOutList}}`);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="card">
        <div className="card-header text-center">
          <div className="input-group mb-3">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
            <div
              className="input-group-append"
              onClick={() => {
                const data = checkOutList;
                console.log(user.name);
                console.log(data);
              }}
            >
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
        </div>
      </div>
      <button>Add new user</button>
    </form>
  );
};

export default CheckOut;
