import React from "react";

const CheckOutContext = React.createContext({});

export const CheckOutProvider = CheckOutContext.Provider;
export const CheckOutConsumer = CheckOutContext.Consumer;
export default CheckOutContext;
