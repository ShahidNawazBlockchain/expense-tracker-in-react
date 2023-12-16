import React, { useState } from "react";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div className="w-full mt-3 mb-1">
      <h1>Add Transaction</h1>
      <div className="w-full h-[1px] bg-slate-600"></div>
      <div className="w-full flex flex-col py-2 gap-2">
        <label htmlFor="">Text</label>
        <input
          type="text"
          name=""
          value={text}
          onChange={(e) => setText(e.target.value)}
          id=""
          className="py-1 px-2 border-2"
          placeholder="Enter the text..."
        />
      </div>
      <div className="w-full flex flex-col py-2 gap-2">
        <label htmlFor="">Amount</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          name=""
          id=""
          className="py-1 px-2 border-2"
          placeholder="Enter the amount..."
        />
      </div>
      <button className="w-full bg-green-700 text-white text-xl font-bold py-2 rounded-2xl">
        Submit
      </button>
    </div>
  );
}

export default AddTransaction;
