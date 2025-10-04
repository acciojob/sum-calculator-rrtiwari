import React, { useState } from "react";

function App() {
  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const num = parseInt(e.target.value);
    if (!isNaN(num)) {
      setSum(prevSum => prevSum + num);
      e.target.value = "";
    }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        placeholder="Enter a number"
        onChange={handleChange}
      />
      <p>Sum: {sum}</p>
    </div>
  );
}

export default App;
