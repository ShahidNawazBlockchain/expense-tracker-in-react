import { createContext, useReducer } from "react";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -300 },
    { id: 1, text: "Salary", amount: 3000 },
    { id: 1, text: "Book", amount: -1000 },
    { id: 1, text: "Camera", amount: 300 },
  ],
};
