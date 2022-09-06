import Image from 'next/image';

const CryptoCoin = (info) => {
  let icon = `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/${info.symbol.toLowerCase()}.svg`; // set icon url with fetched symbol

  // set color based on percent
  let change24h = info.percent_change_24h > 0 ? 'text-green-600' : 'text-red-600';
  let change7d = info.percent_change_7d > 0 ? 'text-green-600' : 'text-red-600';

  // volume minimize
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
    <div className="bg-neutral-100 text-neutral-900 rounded py-5 px-3">
      <div className="flex items-center xl:px-5">
        <Image className="bg-stone-400 rounded-full" src={icon} width={40} height={40} alt="" />
        <p className="flex flex-col text-xl text-center font-semibold w-4/5 mx-auto">
          <span className="text-md font-sans md:text-lg lg:text-xl">{info.name}</span>
          <span className="text-sm">({info.symbol})</span>
        </p>
      </div>

      <div className="flex justify-between md:px-1 lg:px-5">
        <p className="flex flex-col mt-2">
          <span className="text-blue-600 text-2xl">
            {info.price_usd}
            <span className="text-xs">$</span>
          </span>
          <span className="text-sm font-semibold">Price</span>
        </p>
        <p className="flex flex-col text-right mt-2">
          <span className="text-2xl"> {abbreviateNumber(Math.floor(volume24))}</span>
          <span className="text-sm font-semibold">Volume</span>
        </p>
      </div>

      <div className="flex justify-between md:px-1 lg:px-5">
        <p className="flex flex-col mt-2">
          <span className={`text-2xl ${change24h}`}>
            {info.percent_change_24h}
            <span className="text-xs">%</span>
          </span>
          <span className="text-sm font-semibold">24h Change</span>
        </p>
        <p className="flex flex-col text-right mt-2">
          <span className={`text-2xl ${change7d}`}>
            {info.percent_change_7d}
            <span className="text-xs">%</span>
          </span>
          <span className="text-sm font-semibold">7d Change</span>
        </p>
      </div>
    </div>
  );
};

const CryptoCard = (props) => {
  let coin = props.datas.data; // pass the fetched props data
  return (
    <div className="grid grid-cols w-11/12 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {/* loop each coin into crypto card*/}
      {coin.map(CryptoCoin)}
    </div>
  );
};

export default CryptoCard;
