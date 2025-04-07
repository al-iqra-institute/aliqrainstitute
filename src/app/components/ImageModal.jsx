import { useEffect } from "react";
import Image from "next/image";

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg p-8 w-full max-w-2xl shadow-lg relative">
  <button
    onClick={onClose}
    className="absolute top-2 right-2 text-black text-xl font-bold hover:text-red-600"
  >
    &times;
  </button>

  {/* Debug-friendly Image Container */}
  <div className="w-full h-[200px] md:h-[350px] relative bg-gray-200">
    <Image
      src="/Bank_account.jpg"
      alt="Modal Image"
      fill
      className="object-contain rounded"
    />
  </div>
</div>

    </div>
  );
}
