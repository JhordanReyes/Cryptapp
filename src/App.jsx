import { useEffect, useState } from 'react'
import {getDataCrypto} from './api/getDataCrypto'
import Card from './components/card/Card';
import Barra1 from './components/graphics/barra1/Barra1';
import Barra2 from './components/graphics/barra2/Barra2';
import Circle from './components/graphics/circle/Circle';
import List from './components/list/List';
import Nav from './components/nav/Nav'

function App() {

  const [ cryptos, setCryptos] = useState([]);
  const [ dataBarra1, setDataBarra1] = useState([]);
  const [ dataBarra2, setDataBarra2] = useState([]);

  const dataBarras = (data) => {
    setDataBarra1([])
    setDataBarra2([])
    data.map((crypto, i) => {
      if (i < 5) {
        setDataBarra1(prev => [...prev, crypto]);
      } else {
        setDataBarra2(prev => [...prev, crypto]);
      }
    });
  }

  const getCryptos = async () => {
    try {
      const data = await getDataCrypto();
      setCryptos(data);
      dataBarras(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCryptos()
  }, [])
  

  return (
    <div className="App">
      <Nav />
      <main className='main'>
        <div className='container'>
          <div className='container__div'>
            <Card/>
            <Barra1 dataBarra1={dataBarra1} />
          </div>
          <div className='container__div'>
            <List cryptos={cryptos}/>
            <div className='container__div-div'>
              <Barra2 dataBarra2={dataBarra2}/>
              <Circle /> 
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
