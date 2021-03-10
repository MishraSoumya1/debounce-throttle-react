import React, { useCallback, useState, useEffect } from "react";
import _ from "lodash";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const throttled = useCallback(
    _.throttle((value) => console.log(value), 1000),
    []
  );

  const debounce = useCallback(
    _.debounce((data) => console.log(data), 1000),
    []
  );

  const handleChange = (e) => {
    throttled(e.target.value);
    setValue(e.target.value);
  };

  const handleChangeNew = (e) => {
    debounce(e.target.value);
    setValue2(e.target.value);
  };

  return (
    <div className="App">
      <h1>Debounce Throttle Demo</h1>
      <input
        type="text"
        placeholder="throttle input"
        value={value}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="debounce input"
        value={value2}
        onChange={handleChangeNew}
      />
    </div>
  );
}

export default App;
