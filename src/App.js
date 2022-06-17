
import './index.css';
import { useState } from "react";
import { AutoLayoutVariableExample } from './bootstrap-boot.js';
import Container from 'react-bootstrap/Container';
import div from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [currentNumber, setCurrentNumber] = useState(0);
  let checkNumber = (param1, param2) => {
    if (param1 == "0") {
      setCurrentNumber(param2)
    } else {
      setCurrentNumber(param1 + param2)
    }
  }

  return (
    <div className="App">
      <h1>CALCULATOR</h1>
      <h1 className='input'>{currentNumber}</h1>
      <Container className="calculator-keys">
        <div className="custom-row">
            <div >
              <button className="operator" onClick={() => setCurrentNumber(currentNumber + "+")}>+</button>
            </div>
            <div >
              <button className="operator" onClick={() => setCurrentNumber(currentNumber + "-")}>-</button>
            </div>
            <div >
              <button className="operator" onClick={() => setCurrentNumber(currentNumber + "*")}>*</button>
            </div>
            <div>
              <button className="operator" onClick={() => setCurrentNumber(currentNumber + "/")}>/</button>
            </div>
        </div>

        <div className='custom-row'>
            <div>
              <button className="operator" onClick={() => checkNumber(currentNumber, "7")}>7</button>
            </div>
            <div>
              <button className="operator" onClick={() => checkNumber(currentNumber, "8")}>8</button>
            </div>
            <div>
              <button className="operator" onClick={() => checkNumber(currentNumber, "9")}>9</button>
            </div>
            <div>
              <button className="operator zero" onClick={() => checkNumber(currentNumber, "0")}>0</button>
            </div>

        </div>

        <div className='custom-row'>
            <div >
              <button className="operator" onClick={() => checkNumber(currentNumber, "4")}>4</button>
            </div>
            <div >
              <button className="operator" onClick={() => checkNumber(currentNumber, "5")}>5</button>
            </div>
            <div >
              <button className="operator" onClick={() => checkNumber(currentNumber, "6")}>6</button>
            </div>
            <div>
              <button className='equal operator' onClick={() => setCurrentNumber(eval(currentNumber))}>=</button>
            </div>

        </div>

        <div className='custom-row'>
            <div >
              <button className="operator" onClick={() => checkNumber(currentNumber, "1")}>1</button>
            </div>
            <div >
              <button className="operator" onClick={() => checkNumber(currentNumber, "2")}>2</button>
            </div>
            <div >
              <button className="operator" onClick={() => checkNumber(currentNumber, "3")}>3</button>
            </div>
            <div >
              <button className="operator" onClick={() => checkNumber(currentNumber, ".")}>.</button>
            </div>
          </div>
        <div className="custom-row">
            <div>
              <button className='clear operator' onClick={() => setCurrentNumber("0")}>C</button>
            </div>

        </div>

      </Container>

    </div>
  );
}

export default App;

