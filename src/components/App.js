import React, { useState } from "react";

function App() {
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const num = parseInt(inputValue);
    if (!isNaN(num)) {
      setSum(prev => prev + num);
      setInputValue(""); 
    }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default App;

