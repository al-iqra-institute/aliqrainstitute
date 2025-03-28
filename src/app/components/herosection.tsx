import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[760px] md:h-[600px] lg:h-[703px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/logo.png"
          alt="Empowering Faith"
          fill
          className="object-cover opacity-80"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-greenCustom to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 pr-12 pl-6 md:px-16 pt-10 lg:px-24 max-w-4xl">
        <h1 className="text-white text-2xl md:text-5xl md:font-semibold font-bold leading-tight">
          Empowering Faith, Embracing Knowledge
        </h1>
        <p className="text-white hidden sm:block mt-4 text-lg md:text-xl">
          Transformative Islamic education to strengthen faith, cultivate
          purpose, and live fulfilling, meaningful lives.
        </p>
        <button className="mt-6 px-6 py-4 bg-yellowCustom hover:bg-yellowh text-white rounded-lg text-lg flex items-center gap-2">
          Explore →
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
