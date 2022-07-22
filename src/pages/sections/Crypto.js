import React, { useState, useEffect } from 'react';
import CryptoTable from '../../components/CryptoTable';

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.coinlore.net/api/tickers/');
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
    return <div>{<CryptoTable datas={cryptoData} />}</div>;
  }
};

export default Crypto;
