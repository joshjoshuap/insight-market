import React, { useState, useEffect } from 'react';
import CryptoCard from '../../components/CryptoCard';

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('https://api.coinlore.net/api/tickers/'); // fethcing coinlore api
  //       const data = await res.json();
  //       setCryptoData(data);
  //       setLoading(false);
  //     } catch (e) {
  //       console.error('Error', e);
  //     }
  //   };

  //   fetchData();
  // }, []);
  //localhost:3000/
  https: useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
          {
            headers: {
              'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
            },
          }
        ); // fethcing coinlore api
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
    // return <div id="market">{<CryptoCard datas={cryptoData} />}</div>;
    console.log(cryptoData);
    return (
      <>
        <h1>Done</h1>
      </>
    );
  }
};

export default Crypto;
