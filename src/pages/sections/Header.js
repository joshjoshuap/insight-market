const Header = () => {
  return (
    <header className="font-sans py-8 md:py-10 lg:py-16">
      <div className="text-neutral-100 text-center">
        <h1 className="text-4xl underline mb-5 md:text-5xl lg:text-7xl ">INSIGHT MARKET</h1>
        <p className="text-lg mb-10 md:text-xl lg:text-2xl">Your market price for crypto.</p>
        <a className="text-lg font-semibold border-2 border-neutral-100 rounded p-2 lg:text-xl lg:p-3 hover:bg-neutral-100 hover:text-neutral-900 transition ease-in-out" href="#market">
          View Market
        </a>
      </div>
    </header>
  );
};

export default Header;
