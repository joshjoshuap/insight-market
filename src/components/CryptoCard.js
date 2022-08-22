import Image from 'next/image';

const CryptoCoin = (info) => {
  let icon = `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/${info.symbol.toLowerCase()}.svg`; // set icon url with fetched symbol

  // set color based on percent
  let change24h = info.percent_change_24h > 0 ? 'text-green' : 'text-red';
  let change7d = info.percent_change_7d > 0 ? 'text-green' : 'text-red';

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
    <>
      <div className="border rounded-md py-3 px-5">
        <div className="flex justify-center">
          <Image className="bg-grey-light rounded-full" src={icon} width={70} height={70} alt="" />
        </div>
        <h1 className="text-xl text-center font-semibold text-blue-dark">
          {info.name} : {info.symbol}
        </h1>

        <div className="my-5 text-lg leading-relaxed">
          <p className="flex justify-between">
            <span>Price</span> <span className="text-right text-blue">{info.price_usd}</span>
          </p>
          <p className="flex justify-between">
            <span>Volume</span>{' '}
            <span className="text-grey">{abbreviateNumber(Math.floor(volume24))}</span>
          </p>
          <p className="flex justify-between">
            <span>7d Change</span> <span className={`${change7d}`}>{info.percent_change_7d}</span>
          </p>
          <p className="flex justify-between">
            <span>24h Change</span>{' '}
            <span className={`${change24h}`}>{info.percent_change_24h}</span>
          </p>
        </div>
      </div>
    </>
  );
};

const CryptoCard = (props) => {
  let coin = props.datas.data;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 w-11/12 py-10 mx-auto">
      {/* Loop and Rendered Specific Crypto Coin */}
      {coin.map(CryptoCoin)}
    </div>
  );
};

export default CryptoCard;
