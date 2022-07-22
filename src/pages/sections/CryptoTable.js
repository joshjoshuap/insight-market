const CryptoCoin = (info) => {
  return (
    <tr>
      <th></th>
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
