import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (number) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator) => {
    setEquation(display + operator);
    setDisplay('0');
  };

  const handleEqual = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation('');
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
        <div className="calculator">
          <div className="calculator-display">
            <div className="equation">{equation}</div>
            <div className="result">{display}</div>
          </div>

          <div className="calculator-buttons">
            <button onClick={handleClear} className="btn btn-clear">
              Clear
            </button>
            <button onClick={() => handleOperator('/')} className="btn btn-operator">
              ÷
            </button>
            <button onClick={() => handleOperator('*')} className="btn btn-operator">
              ×
            </button>

            {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="btn btn-number"
              >
                {num}
              </button>
            ))}

            <button onClick={() => handleOperator('-')} className="btn btn-operator">
              -
            </button>
            <button onClick={() => handleNumber('0')} className="btn btn-number">
              0
            </button>
            <button onClick={() => handleNumber('.')} className="btn btn-number">
              .
            </button>
            <button onClick={handleEqual} className="btn btn-equals">
              =
            </button>
            <button onClick={() => handleOperator('+')} className="btn btn-operator">
              +
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;