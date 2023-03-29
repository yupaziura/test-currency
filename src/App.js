// main
import {useState, useEffect} from 'react';
import fetchData from './services/GetData';

// components
import Box from './components/Box/Box';
import Info from './components/Info/Info';
import Input from './components/Input/Input';

// stypes
import './App.css';


function App() {

  // set states
   const [usd, setUSD] = useState();
   const [eur, setEUR] = useState();
   const uah = 1;

   const [fromCurr, setFromCurr] = useState(uah)
   const [toCurr, setToCurr] = useState(usd)

   const [inp, setInp] = useState('');
   const [outp, setOutp] = useState('');



  useEffect(()=> {
    fetchData('USD')
        .then((result) => {
          setUSD(result);
          setToCurr(result);
      })
  }, []);

  useEffect(()=> {
    fetchData('EUR')
        .then((result) => {
          setEUR(result)
      })
  }, []);



  // calculations
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
        <h1 className="header"> CURRENCY CONVERTER</h1>
        
        <Box num={1}>
            <Info name={'USD'} value={usd}/>
            <Info name={'EUR'} value={eur}/>
        </Box>
      </header>

      <section className='section'>
        <h3 className='subtitle'>Enter some values to convert</h3>

        <Box num = {0}>
          <Input calcInput={calcFromInp} calcSelect={calcCurrFrom} value={inp} defaultValue={uah} usd={usd} eur={eur} uah={uah}/>
          <Input calcInput={calcFromOutp} calcSelect={calcCurrTo} value={outp} defaultValue={usd} usd={usd} eur={eur} uah={uah}/>
        </Box>
      </section>
    </div>
  );
}

export default App;
