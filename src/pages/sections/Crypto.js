import React, { useState, useEffect } from 'react';
import CryptoTable from '../../components/CryptoTable';

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.coinlore.net/api/tickers/'); // fetching coinlore api
        const data = await res.json();
        setCryptoData(data);
        setLoading(false);
      } catch (e) {
        console.error('Error', e);
      }
    };

    fetchData();
  }, []);

  // display if fetch api not available or still fetching
  if (loading)
    return (
      <div id="market" className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );

  // render CryptoTable and pass fetched api through cryptoData
  return <div id="market" className='py-3'>{<CryptoTable datas={cryptoData} />}</div>;
};

export default Crypto;
