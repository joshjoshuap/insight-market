const Header = () => {
  return (
    <header className="font-serif py-8 md:py-10 lg:py-16">
      <div className="text-neutral-100 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl underline mb-5">INSIGHT MARKET</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10">Your market price for crypto.</p>
        <a className="text-lg lg:text-xl font-semibold border-2 border-neutral-100 rounded p-2 lg:p-3 hover:bg-neutral-100 hover:text-neutral-900 transition ease-in-out" href="#market">
          View Market
        </a>
      </div>
    </header>
  );
};

export default Header;
