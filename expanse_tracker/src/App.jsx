import { useState } from "react";
import {
  Header,
  Balance,
  IncomeExpensess,
  TransactionsList,
  AddTransaction,
} from "./components";

function App() {
  return (
    <>
      <div className="h-[100%] flex justify-center items-center bg-slate-400 py-3">
        <div className="bg-white w-[40%] flex flex-col justify-center items-center p-5 rounded-lg shadow-2xl">
          <Header />
          <Balance />
          <IncomeExpensess />
          <TransactionsList />
          <AddTransaction />
        </div>
      </div>
    </>
  );
}

export default App;
