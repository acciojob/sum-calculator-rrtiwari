
import React, { useState, useEffect } from "react";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNumber = () => {
    const number = parseInt(inputValue);
    if (!isNaN(number)) {
      setNumbers([...numbers, number]);
      setInputValue("");
    }
  };

  useEffect(() => {
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    setSum(total);
  }, [numbers]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddNumber();
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "auto" }}>
      <h2>Sum Calculator</h2>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter a number"
        style={{ padding: "5px", width: "100%", marginBottom: "10px" }}
      />
      <button onClick={handleAddNumber} style={{ padding: "5px 10px" }}>
        Add Number
      </button>
      <div style={{ marginTop: "20px" }}>
        <strong>Numbers:</strong> {numbers.join(", ")}
      </div>
      <div style={{ marginTop: "10px", fontSize: "18px" }}>
        <strong>Sum:</strong> {sum}
      </div>
    </div>
  );
}

export default App;
