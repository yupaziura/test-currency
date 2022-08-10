import './App.css';
import {useState} from 'react';


function App() {


  const [usd, setUSD] = useState(30);
  const [eur, setEUR] = useState(40);
  const [uah, setUah] = useState(1);

  const [fromCurr, setFromCurr] = useState(uah)
  const [toCurr, setToCurr] = useState(usd)

  const [inp, setInp] = useState(0);
  const [outp, setOutp] = useState(0);


  const calcFromInp = (num) => {
    setInp(num);
    setOutp(num*fromCurr/toCurr)
  }

  const calcFromOutp = (num) => {
    setOutp(num);
    setInp(num*toCurr/fromCurr)
  }

  const calcCurrFrom = (fromCurr) => {
    setFromCurr(fromCurr);
    setOutp(inp*fromCurr/toCurr)

  }
  const calcCurrTo = (toCurr) => {
    setToCurr(toCurr);
    setOutp(inp*fromCurr/toCurr)
  }
  


 
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <h1> CURRENCY</h1>
        </div>
        <div className="currency">
          <div className="currency__value">
            <h5>
              USD
            </h5>
          </div>
          <div className="currency__value">
            <h5>
              {usd}
            </h5>
          </div>
        </div>
        <div className="currency">
          <div className="currency__value">
            <h5>
              EUR
            </h5>
          </div>
          <div className="currency__value">
            <h5>
              {eur}
            </h5>
          </div>
        </div>
      </header>

      <div className="convert">
        <div className="">
              <input type="text" onChange={(e)=>{calcFromInp(e.target.value); }} value={inp} />
              <select name="" id="" defaultValue={uah} onChange={(e)=>{calcCurrFrom(e.target.value) }}>
                <option value={usd}>usd</option>
                <option value={uah}>uah</option>
                <option value={eur}>eur</option>
            </select>
            </div>

            <div className="">
              <input type="text"  value={outp} onChange={(e)=>{calcFromOutp(e.target.value)}} />
              <select name="" id="" defaultValue={usd} onChange={(e)=>{calcCurrTo(e.target.value) }}>
                <option value={usd}>usd</option>
                <option value={uah}>uah</option>
                <option value={eur}>eur</option>
              </select>
            </div>
      </div>
    </div>
  );
}

export default App;
