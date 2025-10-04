import React, { useState, useEffect } from "react";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    setSum(total);
  }, [numbers]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const number = parseInt(value);
    if (!isNaN(number)) {
      setNumbers([number]);
    } else {
      setNumbers([]);
    }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <p>Sum: {sum}</p>
    </div>
  );
}

export default App;
