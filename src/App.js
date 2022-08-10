import './App.css';
import {useState, useEffect, useCallback, useMemo} from 'react';


function App() {


  const [usd, setUSD] = useState(37);
  const [eur, setEUR] = useState(38);
  const uah = 1;

  const [fromCurr, setFromCurr] = useState(uah)
  const [toCurr, setToCurr] = useState(usd)

  const [inp, setInp] = useState(0);
  const [outp, setOutp] = useState(0);

  // const request = useCallback((curr)=>{
  //   async function fetchData() {
  //     const myHeaders = new Headers();
  //     myHeaders.append("apikey", "Iy4nwrYqQQXU8thcn28N5kZaMtCdPeyU");
  
  //     const requestOptions = {
  //       method: 'GET',
  //       redirect: 'follow',
  //       headers: myHeaders
  //     };

  //     const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${curr}&from=UAH&amount=1`, requestOptions);
  //     const result = await response.text()
  //     const res = await JSON.parse(result)
  //     curr === 'USD' ?  setUSD(Math.round(1/res.result*100)/100) :  setEUR(Math.round(1/res.result * 100)/100);
      
  //   }    
  //   fetchData();
  // },[])

  // useEffect(()=>{request('USD'); setToCurr(usd)}, []);
  // useEffect(()=>{request('EUR');setToCurr(eur)}, []);



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
