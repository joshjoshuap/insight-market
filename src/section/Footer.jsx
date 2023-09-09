export default function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col justify-center gap-1 p-5 text-xl text-center bg-silver md:flex-row">
      <p className="font-semibold text-darkblue">
        &copy; Copyright {currentYear} |{" "}
      </p>
      <a
        className="font-semibold transition-all duration-200 text-gray hover:text-blue hover:underline"
        href="https://www.joshuap.site/"
        target="_blank"
        rel="noreferrer"
      >
        Build by Joshua Pautanes
      </a>
    </footer>
  );
}
