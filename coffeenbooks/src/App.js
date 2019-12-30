import React, { useState } from "react";
import "./App.css";
import CoffeeList from "./components/CoffeeList";
import BookList from "./components/BookList";
import CheckOut from "./components/CheckOut";
import { CheckOutProvider } from "./components/checkOutContext";

const App = () => {
  const coutdata = [];

  const [checkOutData, setcheckOutData] = useState(coutdata);

  const addCOutData = data => {
    setcheckOutData([...checkOutData, data]);
  };

  const resetCOutData = () => {
    console.log("data Reset");
    setcheckOutData(coutdata);
  };

  return (
    <div className="container">
      <div className="row border">
        <div className="col-md-7 bg-light">
          <CoffeeList addCOutData={addCOutData} />
          <BookList addCOutData={addCOutData} />
        </div>
        <CheckOutProvider value={checkOutData}>
          <div className="col-md-5 bg-light">
            <CheckOut resetCOutData={resetCOutData} />
          </div>
        </CheckOutProvider>
      </div>
    </div>
  );
};

export default App;
