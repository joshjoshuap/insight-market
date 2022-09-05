const Header = () => {
  return (
    <header className="bg-cyan-700 py-16">
      <div className="text-stone-50 text-center">
        <h1 className="text-7xl underline mb-5">INSIGHT MARKET</h1>
        <p className="text-2xl mb-10">Your market price for crypto.</p>
        <a className="text-xl font-semibold border-2 rounded p-3 hover:bg-stone-50 hover:text-cyan-700 transition ease-in-out" href="#market">
          View Market
        </a>
      </div>
    </header>
  );
};

export default Header;
