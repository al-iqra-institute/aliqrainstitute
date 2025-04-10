import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ImageModal({ isOpen, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const message = ` Donate For The Welfare Of The Ummah
Support The Campaign: *Save Qibla Awwal*

Stand for the honor of *Masjid Al-Aqsa*, the First Qibla of the Ummah of my beloved Prophet Muhammad ﷺ.

This is not just a cause — this is a *call from the heart* of the Ummah.

Let your donation be a *means of healing*, a *Sadqa-e-Jariyah*, and a *sign of your undying love* for the suffering Ummah.

 *Rise. Support. Give.*
Because *the Ummah needs you — now more than ever.*

 *Donation Details:*
 
 *Bank Account:*
    Pk62ABPA0010108954530013
 *JazzCash / EasyPaisa:*
     0327 2495380

 Donate via: https://www.aliqrainstitute.com
`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-5xl shadow-lg relative overflow-y-auto max-h-[95vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-black text-2xl font-bold hover:text-red-600"
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-[250px] md:h-[350px] relative rounded overflow-hidden bg-gray-200">
            <Image
              src="/Bank_account.jpg"
              alt="Donation Campaign"
              fill
              className=" rounded"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-black space-y-3 text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-700">
              Donate For The Welfare Of The Ummah
            </h2>
            <p className="text-sm sm:text-base md:text-lg">
              <strong>Support The Campaign:</strong> Save Qibla Awwal
            </p>
            <p className="text-sm sm:text-base">
              Stand For The Honor Of <strong>Masjid Al-Aqsa</strong>, The First
              Qibla Of The Ummah Of My Beloved Prophet Muhammad (Peace Be Upon
              Him).
            </p>
            <p className="text-sm sm:text-base">
              This Is Not Just A Cause — This Is A Call From The Heart Of The
              Ummah Of My Beloved.
            </p>
            <p className="text-sm sm:text-base font-medium text-gray-700">
              Let Your Donation Be A Means Of Healing, A Sadqa-E-Jariyah, And A
              Sign Of Your Undying Love For The Suffering Ummah.
            </p>
            <p className="text-sm sm:text-base font-semibold text-green-800">
              Rise. Support. Give. <br />
              Because The Ummah Needs You — Now More Than Ever.
            </p>
            <Link
              href={`https://wa.me/?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 flex items-center gap-2">Share on WhatsApp</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
