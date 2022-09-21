const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-200 text-neutral-900 text-lg flex flex-wrap justify-center md:gap-3 lg:gap-5 py-2 ">
      <p>&copy; Copyright {year} </p>
      <p>
        <a
          href="https://joshjoshuap.vercel.app/"
          className="border-neutral-900 border-b-4 hover:border-blue-600 hover:text-blue-600 transition-all ease-in-out duration-500"
          target="_blank"
          rel="noreferrer">
          Build By: Joshua Pautanes
        </a>
      </p>
    </footer>
  );
};

export default Footer;
