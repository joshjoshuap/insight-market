import headingImage from "../assets/heading-image.png";

export default function Heading() {
  return (
    <heading className="flex flex-col items-center text-white py-16 mx-auto">
      <h1 className="text-4xl md:text-5xl xl:text-8xl text-center font-vastShadow text-cyan mb-6">
        INSIGHT MARKET
      </h1>
      <h2 className="text-xl md:text-2xl xl:text-4xl font-josefinSans">
        Your Market price for crypto
      </h2>
      <img
        className="w-10/12"
        src={headingImage}
        alt="Crypto Icons"
      ></img>
      <p className="text-xs text-center md:text-sm font-poppins italic font-secondary">
        API based crypto market, shows price, volume and percentage changed
      </p>
    </heading>
  );
}
