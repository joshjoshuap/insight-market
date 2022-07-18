const Header = () => {
  return (
    <header className="bg-white h-auto py-16 pl-24">
      <div>
        <h1 className="text-black text-7xl mb-8">Insight Market</h1>
        <p className=" text-black text-xl w-96 mb-8">
          Be updated from trends, price, and news. Your all in one website to cover all your need as
          trader or investor
        </p>
        <button className="bg-white text-xl font-medium p-2 border-2 rounded cursor-pointer hover:bg-black hover:text-white hover:border-black transition-all duration-300 ease-in">
          <a href="#main">View Market</a>
        </button>
      </div>
      <div className="">
        
      </div>

    </header>
  );
};

export default Header;
