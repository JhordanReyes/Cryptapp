import axios from "axios";

const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

export const getDataCrypto = async() => {
    const { data } = await axios.get(url);
    return data.Data;
}
export const getTop1 = async() => {
    const { data } = await axios.get(url);
    return data.Data[0];
}