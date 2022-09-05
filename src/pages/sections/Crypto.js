import React, { useState, useEffect } from 'react';
import CryptoCard from '../../components/CryptoCard';

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
  if (loading) return <div className='text-red-600 text-center text-2xl font-bold'>Please Wait. Loading...</div>;

  // render CryptoTable and pass fetched api through cryptoData
  return (
    <div id="market" className="py-10">
      {<CryptoCard datas={cryptoData} />}
    </div>
  );
};

export default Crypto;
