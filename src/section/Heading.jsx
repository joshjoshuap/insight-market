import headingImage from "../assets/heading-image.png";

export default function Heading() {
  return (
    <heading className="flex flex-col items-center bg-gray text-white py-16">
      <h1 className="text-8xl text-heading font-vastShadow text-cyan mb-6">
        INSIGHT MARKET
      </h1>
      <h2 className="text-4xl font-josefinSans">
        Your Market price for crypto
      </h2>
      <img
        className="w-fit"
        src={headingImage}
        alt="Crypto Icons"
      ></img>
      <p className="text-sm font-poppins italic font-secondary">
        API based crypto market, shows price, volume and percentage changed
      </p>
    </heading>
  );
}
