import headingImage from "../assets/heading-image.png";

export default function Heading() {
  return (
    <heading className="flex flex-col items-center text-white py-8 sm:py-16 w-10/12 xl:w-full mx-auto">
      <h1 className="text-4xl md:text-5xl xl:text-8xl text-center font-vastShadow text-cyan mb-2 sm:mb-6">
        INSIGHT MARKET
      </h1>
      <h2 className="text-xl md:text-2xl xl:text-4xl font-josefinSans">
        Your Market price for crypto
      </h2>
      <img
        className="hidden sm:block w-46"
        src={headingImage}
        alt="Crypto Icons"
      ></img>
      <p className="text-xs text-center md:text-sm font-poppins italic font-secondary">
        API based crypto market, shows price, volume and percentage changed
      </p>
    </heading>
  );
}
