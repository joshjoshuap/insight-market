import React, { useState, useEffect } from 'react';
import CryptoCard from '../../components/CryptoCard';

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.coinlore.net/api/tickers/'); // fethcing coinlore api
        const data = await res.json();
        setCryptoData(data);
        setLoading(false);
      } catch (e) {
        console.error('Error', e);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>; // display if fetch api not available or still fetching
  } else {
    // render CryptoTable and pass fetched api through cryptoData
    return <div id="market">{<CryptoCard datas={cryptoData} />}</div>;
  }
};

export default Crypto;
