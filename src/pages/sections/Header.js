const Header = () => {
  return (
    <header className="text-center py-16 px-24">
      <div>
        <h1 className="text-black text-7xl underline font-semibold mb-8">Insight Market</h1>
        <p className=" text-black text-xl mb-8">Market price of crypto exchange.</p>
        <a
          className="text-xl font-medium border-2 rounded cursor-pointer p-2 hover:bg-black hover:text-white hover:border-black transition-all duration-300 ease-in"
          href="#market">
          View Market
        </a>
      </div>
    </header>
  );
};

export default Header;
