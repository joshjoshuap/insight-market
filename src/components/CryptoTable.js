import Image from 'next/image';

const CryptoCoin = (info) => {
  let icon = `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/${info.symbol.toLowerCase()}.svg`;

  let change24h = info.percent_change_24h > 0 ? 'text-green' : 'text-red';
  let change7d = info.percent_change_7d > 0 ? 'text-green' : 'text-red';

  return (
    <tr className="text-left">
      <th className="text-lg text-center py-5">{info.rank}</th>
      <th>
        <Image className="bg-grey-light rounded-full" src={icon} width={40} height={40} alt="" />
      </th>
      <th className="text-md font-medium text-blue">{info.symbol}</th>
      <th className="text-md font-medium">{info.name}</th>
      <th className="text-md font-medium">{info.price_usd}</th>
      <th className={`text-md text-center font-medium ${change24h}`}>{info.percent_change_24h}</th>
      <th className={`text-md text-center font-medium ${change7d}`}>{info.percent_change_7d}</th>
      <th className="text-md text-center font-medium">{info.volume24}</th>
    </tr>
  );
};

const CryptoTable = (props) => {
  let coin = props.datas.data;

  return (
    <table className="w-11/12 my-16 mx-auto">
      <thead className="border-t-2 border-b-2 border-grey">
        <tr className="text-left">
          <th className="text-2xl text-center font-medium p-2">Rank</th>
          <th className="text-2xl font-medium">Icon</th>
          <th className="text-2xl font-medium w-32">Symbol</th>
          <th className="text-2xl font-medium w-64">Name</th>
          <th className="text-2xl font-medium w-48">Price (USD)</th>
          <th className="text-2xl text-center font-medium">24h</th>
          <th className="text-2xl text-center font-medium">7d</th>
          <th className="text-2xl text-center font-medium">Volume</th>
        </tr>
      </thead>
      <tbody>{coin.map(CryptoCoin)}</tbody>
    </table>
  );
};

export default CryptoTable;
