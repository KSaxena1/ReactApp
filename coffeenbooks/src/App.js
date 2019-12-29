import React, { useState } from "react";
import "./App.css";
import CoffeeList from "./components/CoffeeList";
import BookList from "./components/BookList";
import CheckOut from "./components/CheckOut";
import CoffeeSales from "./components/CoffeeSales";
import BookSales from "./components/BookSales";
import RecentOrders from "./components/RecentOrders";
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
      <div className="row border">
        <div className="col-md-8 bg-light">
          <RecentOrders />
        </div>
        <div className="col-md-4 bg-light">
          <div className="card-group">
            <CoffeeSales />
            <BookSales />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
