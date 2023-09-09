const CryptoCoin = (info) => {
  let icon = `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/${info.symbol.toLowerCase()}.svg`; // set icon url with fetched symbol

  // set color based on percent
  let change24h = info.percent_change_24h > 0 ? "text-green" : "text-red";
  let change7d = info.percent_change_7d > 0 ? "text-green" : "text-red";

  // volume minimize
  function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
      var suffixes = ["", "k", "m", "b", "t"];
      var suffixNum = Math.floor(("" + value).length / 3);
      var shortValue = "";
      for (var precision = 2; precision >= 1; precision--) {
        shortValue = parseFloat(
          (suffixNum != 0
            ? value / Math.pow(1000, suffixNum)
            : value
          ).toPrecision(precision)
        );
        var dotLessShortValue = (shortValue + "").replace(
          /[^a-zA-Z 0-9]+/g,
          ""
        );
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
    <div className="bg-black p-2 flex gap-2 rounded border-2 border-white">
      <div className="flex flex-col items-center  mx-auto p-2">
        <h1 className="xl:text-xl text-white font-bold font-josefinSans mb-2 flex items-center gap-2">
          <img
            className="bg-stone-400 rounded-full"
            src={icon}
            height={40}
            width={40}
          />
          <div>
            {info.name} ({info.symbol})
          </div>
        </h1>
        <div className="flex gap-4">
          <div className="text-center">
            <p className="text-white text-xl">{info.price_usd}</p>
            <p className="text-cyan text-sm">Price</p>
          </div>
          <div className="text-center">
            <p className={`text-xl ${change24h}`}>{info.percent_change_24h}</p>
            <p className="text-cyan text-sm">24h</p>
          </div>
          <div className="text-center">
            <p className={`text-xl ${change7d}`}>{info.percent_change_7d}</p>
            <p className="text-cyan text-sm">7d</p>
          </div>
          <div className="text-center">
            <p className="text-silver text-xl">
              {abbreviateNumber(Math.floor(volume24))}
            </p>
            <p className="text-cyan text-sm">Volume</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CryptoCard = ({ datas }) => {
  console.log(datas);
  return (
    <div className="grid grid-cols-1 w-11/12 mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {/* loop each coin into crypto card*/}
      {datas.data.map(CryptoCoin)}
    </div>
  );
};

export default CryptoCard;
