const Header = () => {
  return (
    <header className="py-16 px-24">
      <div>
        <h1 className="text-black text-7xl font-semibold mb-8">Insight Market</h1>
        <p className=" text-black text-xl mb-8">
         Market price of crypto exchange.
        </p>
        <button className="text-xl font-medium p-2 border-2 rounded cursor-pointer hover:bg-black hover:text-white hover:border-black transition-all duration-300 ease-in">
          <a href="#market">View Market</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
