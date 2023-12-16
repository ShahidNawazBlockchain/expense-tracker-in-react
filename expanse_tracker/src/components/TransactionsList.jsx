import React from "react";

function TransactionsList() {
  return (
    <div className="w-full">
      <div className=" flex flex-col">
        <h1 className="text-lg text-slate-950">History</h1>
        <div className="w-full h-[1px] bg-slate-600 my-2"></div>
        <div className="w-full">
          <ul className="">
            <li className="flex justify-between mb-2 border-2 py-2 px-2 rounded-md shadow-lg">
              <span>Cash</span>
              <span>$550</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TransactionsList;
