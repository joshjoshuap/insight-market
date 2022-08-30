const Header = () => {
  return (
    <header className="bg-dark text-light text-center py-5">
      <div>
        <h1 className="display-1 fw-semibold">INSIGHT MARKET</h1>
        <p className="fs-4">Market price of crypto exchange.</p>
        <a className="btn btn-outline-light btn-lg border border-2" href="#market">
          View Market
        </a>
      </div>
    </header>
  );
};

export default Header;
