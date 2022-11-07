import React, { useState } from 'react'
import { useEffect } from 'react'
import { getTop1 } from '../../api/getDataCrypto'
import "./style.css"

const Card = () => {

    const [coin, setCoin] = useState({})
    const [loading, setLoading] = useState(true)

    const getCoin = async () => {
        const data = await getTop1();
        setCoin(data);
        setLoading(false);
    }
    useEffect(() => {
        getCoin();
    }, [])
    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <div className='card'>
            <div className='card__info'>
                <h2>{coin.CoinInfo.FullName}</h2>
                <p className='positivo'>+ $28,55</p>
                <p className='parrafo'>Lost Transaction</p>
                <div className='card__info-btn'>
                    <button className='btn'>top 1</button>
                    <button className='btn'>Buy {coin.CoinInfo.Internal}</button>
                </div>
            </div>
            <div className='card__price'>
                <p>{coin.DISPLAY.USD.PRICE}</p>
            </div>
        </div>
    )
}

export default Card