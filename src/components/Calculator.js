import { useState } from 'react';


function Calculator() {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [results, setResults] = useState(number1 + number2)

  function calculatorResults() {
    setResults(number1 + number2);
  }


  return (

    <div>
      <h1>Calculator App</h1>
      <div>
        <input
          type='number'
          value={number1}
          onChange={e => setNumber1(+e.target.value)}
        />

        <input
          type='number'
          value={number2}
          onChange={e => setNumber2(+e.target.value)}
        />

      </div>
      <button onClick={calculatorResults}>+</button>
      <h2>{results}</h2>

    </div>
  );
}

export default Calculator;