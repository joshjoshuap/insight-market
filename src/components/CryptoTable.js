import Image from 'next/image';

const CryptoCoin = (info) => {
  let icon = `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/${info.symbol.toLowerCase()}.svg`; // set icon url with fetched symbol

  // set color based on percent
  let change24h = info.percent_change_24h > 0 ? 'text-success' : 'text-danger';
  let change7d = info.percent_change_7d > 0 ? 'text-success' : 'text-danger';

  // Volume Minimize
  function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
      var suffixes = ['', 'k', 'm', 'b', 't'];
      var suffixNum = Math.floor(('' + value).length / 3);
      var shortValue = '';
      for (var precision = 2; precision >= 1; precision--) {
        shortValue = parseFloat(
          (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(precision)
        );
        var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
        if (dotLessShortValue.length <= 2) {
          break;
        }
      }
      if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
      newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
  }

  let volume24 = info.volume24;

  return (
    <tr className='fs-5'>
      <td className='text-center py-4'>
        <Image className="bg-secondary rounded-circle" src={icon} width={40} height={40} alt="" />
      </td>
      <td className='py-4'>
        {info.name} : {info.symbol}
      </td>
      <td className='py-4'>{info.price_usd}</td>
      <td className='py-4'>{abbreviateNumber(Math.floor(volume24))}</td>
      <td className={`py-4 ${change7d}`}>{info.percent_change_7d}</td>
      <td className={`py-4 ${change24h}`}>{info.percent_change_24h}</td>
    </tr>
  );
};

const CryptoCard = (props) => {
  let coin = props.datas.data;
  return (
    <table className="table table-borderless table-hover w-75 border border-25 border-dark border-rounded my-5 mx-auto">
      <thead>
        <tr className="bg-dark text-light fs-4">
          <th></th>
          <th className='w-25'>Coin</th>
          <th>Price</th>
          <th>Volume</th>
          <th>7d %</th>
          <th>24h %</th>
        </tr>
      </thead>
      <tbody>{coin.map(CryptoCoin)}</tbody>
    </table>
  );
};

export default CryptoCard;
