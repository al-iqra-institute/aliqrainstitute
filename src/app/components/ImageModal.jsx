import Image from "next/image";

export default function ImageModal({ isOpen, onClose, imageSrc }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg p-2 max-w-[90%] md:max-w-xl lg:max-w-2xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-xl font-bold hover:text-red-600"
        >
          &times;
        </button>

        {/* Image from next/image */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src={imageSrc}
            alt="Modal Image"
            fill
            className="object-contain rounded"
          />
        </div>
      </div>
    </div>
  );
}
