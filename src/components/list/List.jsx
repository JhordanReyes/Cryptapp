import React from 'react'
import Elemento from './elemento/Elemento'
import "./style.css"

const List = ({cryptos}) => {
  return (
    <div className='list'>
        <h2>Tier list</h2>
        {cryptos.map((crypto) => (
            <Elemento
                key={crypto.CoinInfo.Id}
                name={crypto.CoinInfo.FullName}
                image={"https://www.cryptocompare.com/"+crypto.CoinInfo.ImageUrl}
                price={crypto.DISPLAY.USD.PRICE}
                abreviado={crypto.CoinInfo.Internal}
            />
        ))}
    </div>
  )
}

export default List