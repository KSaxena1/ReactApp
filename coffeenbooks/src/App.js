import React from "react";
import "./App.css";
import CoffeeList from "./components/CoffeeList";
import BookList from "./components/BookList";
import CheckOut from "./components/CheckOut";
import CoffeeSales from "./components/CoffeeSales";
import BookSales from "./components/BookSales";
import RecentOrders from "./components/RecentOrders";

const App = () => {
  return (
    <div className="container">
      <div className="row border">
        <div className="col-md-8 bg-light">
          <CoffeeList />
          <BookList />
        </div>
        <div className="col-md-4 bg-light">
          <CheckOut />
        </div>
      </div>
      <div className="row border">
        <div className="col-md-8 bg-light">
          <RecentOrders />
        </div>
        <div className="col-md-2 bg-light">
          <CoffeeSales />
        </div>
        <div className="col-md-2 bg-light">
          <BookSales />
        </div>
      </div>
    </div>
  );
};

export default App;
