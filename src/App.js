import './App.css';
import {useState, useEffect, useCallback, useMemo} from 'react';


function App() {


  const [usd, setUSD] = useState(37);
  const [eur, setEUR] = useState(38);
  const uah = 1;

  const [fromCurr, setFromCurr] = useState(uah)
  const [toCurr, setToCurr] = useState(usd)

  const [inp, setInp] = useState();
  const [outp, setOutp] = useState();

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
    setOutp(Math.round(num*fromCurr/toCurr * 100) /100)
  }

  const calcFromOutp = (num) => {
    setOutp(num);
    setInp(Math.round(num*toCurr/fromCurr * 100) /100)
  }

  const calcCurrFrom = (fromCurr) => {
    setFromCurr(fromCurr);
    setOutp(Math.round(inp*fromCurr/toCurr * 100) /100)

  }
  const calcCurrTo = (toCurr) => {
    setToCurr(toCurr);
    setOutp(Math.round(inp*fromCurr/toCurr * 100) /100)
  }
  


 
  return (
    <div className="container">
      <header className="App-header">
        <div className="header">
          <h1> CURRENCY CONVERTER</h1>
        </div>
        <div className="currency">
          <div className="currency__pair">
            <div className="currency__value">
              <p>
                USD
              </p>
            </div>
            <div className="currency__value">
              <p>
                {usd}
              </p>
            </div>
          </div>
          <div className="currency__pair">
            <div className="currency__value">
              <p>
                EUR
              </p>
            </div>
            <div className="currency__value">
              <p>
                {eur}
              </p>
            </div>
          </div>
        </div>
        
      </header>

      <h3 className='subtitle'>Enter some values to convert</h3>

      <div className="convert">
        <div className="convert__inputs">
              <input placeholder='0' className='convert__input' type="number" onChange={(e)=>{calcFromInp(e.target.value); }} value={inp} />
              <select className='convert__select' id="" defaultValue={uah} onChange={(e)=>{calcCurrFrom(e.target.value) }}>
                <option value={usd}>USD</option>
                <option value={uah}>UAH</option>
                <option value={eur}>EUR</option>
            </select>
            </div>

            <div className="convert__inputs">
              <input placeholder='0' className='convert__input' type="number"  value={outp} onChange={(e)=>{calcFromOutp(e.target.value)}} />
              <select className='convert__select' id="" defaultValue={usd} onChange={(e)=>{calcCurrTo(e.target.value) }}>
                <option value={usd}>USD</option>
                <option value={uah}>UAH</option>
                <option value={eur}>EUR</option>
              </select>
            </div>
      </div>
    </div>
  );
}

export default App;
