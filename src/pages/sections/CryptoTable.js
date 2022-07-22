import Image from 'next/image';

const CryptoCoin = (info) => {
  let icon = `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/${info.symbol.toLowerCase()}.svg`;
  return (
    <tr>
      <th>
        <Image className='bg-grey-light rounded-full' src={icon} width={40} height={40} alt="" />
      </th>
      <th>{info.rank}</th>
      <th>{info.symbol}</th>
      <th>{info.name}</th>
      <th>{info.price_usd}</th>
      <th>{info.percent_change_1h}</th>
      <th>{info.percent_change_24h}</th>
      <th>{info.percent_change_7d}</th>
      <th>{info.volume24}</th>
    </tr>
  );
};

const CryptoTable = (props) => {
  let coin = props.datas.data;

  return (
    <table>
      <thead>
        <tr>
          <th>Icon</th>
          <th>Rank</th>
          <th>Symbol</th>
          <th>Name</th>
          <th>Price (USD)</th>
          <th>1h Change</th>
          <th>24h Change</th>
          <th>7d Change</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>{coin.map(CryptoCoin)}</tbody>
    </table>
  );
};

export default CryptoTable;
