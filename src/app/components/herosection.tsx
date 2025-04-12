import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[950px] mt-[-160px] sm:mt-0 sm:h-[600px] lg:h-[703px] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src="/herovido.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full  object-contain md:object-cover opacity-80"
        />
      </div>

      {/* Mobile View Text */}
      <h3 className="absolute sm:hidden custom-sm-range font-bold w-80 text-xs left-9 top-[275px] text-center">
        &quot;Iqra – The First Word Revealed to the Final Messenger ﷺ&quot; اقرأ
        — Read, Learn, Rise
      </h3>

      <h3 className="absolute custom-sm-range sm:hidden font-bold w-80 text-xs left-10 top-[307px] text-center">
        پڑھو – وہ پہلا حکم جو دلِ مصطفی ﷺ 💚 پر نازل ہوا۔
      </h3>

      <div>
        {/* Main Content */}
        <div className="relative  z-10 mt-[490px] sm:mt-8 pr-6 pl-6 sm:px-16 lg:px-24 max-w-4xl">
          <h1 className="text-2xl md:text-5xl md:font-semibold font-bold leading-tight">
            Empowering Faith, Embracing Knowledge
          </h1>
          <p className="hidden sm:block mt-4 text-lg md:text-xl">
            Transformative Islamic education to strengthen faith, cultivate
            purpose, and live fulfilling, meaningful lives.
          </p>

          <Link href="/courses">
            <button className="mt-6 px-6 py-4 bg-black hover:bg-gray-900 text-white rounded-lg text-lg flex items-center gap-2">
              Explore →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
