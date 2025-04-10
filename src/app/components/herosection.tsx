import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[760px] md:h-[600px] lg:h-[703px] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src="/herovido.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain md:object-cover opacity-80"
        />
      </div>

      {/* Overlay for gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-greenCustom to-transparent z-[1]"></div> */}

      {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-transparent z-[1]"></div> */}

      <h3 className="absolute md:hidden w-80 text-xs left-9 top-40 text-center">
        "Iqra – The First Word Revealed to the Final Messenger ﷺ" (اقرأ) — Read,
        Learn, Rise
      </h3>

      <h3 className="absolute md:hidden w-80 text-xs left-10 top-48 text-center">
        پڑھو – وہ پہلا حکم جو دلِ مصطفی "ﷺ 💚پر نازل ہوا۔
      </h3>

      {/* Content */}
      <div className="relative z-10 pr-6 pl-6 md:px-16 pt-10 lg:px-24 max-w-4xl">
        <h1 className=" text-2xl md:text-5xl md:font-semibold font-bold leading-tight">
          Empowering Faith, Embracing Knowledge
        </h1>
        <p className="hidden sm:block mt-4 text-lg md:text-xl">
          Transformative Islamic education to strengthen faith, cultivate
          purpose, and live fulfilling, meaningful lives.
        </p>

        <button className="mt-6 px-6 py-4 bg-black hover:bg-gray-900 text-white rounded-lg text-lg flex items-center gap-2">
          <Link href={"/courses"}>Explore →</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
