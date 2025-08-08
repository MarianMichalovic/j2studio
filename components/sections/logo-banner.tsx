import Image from 'next/image';

const partnerLogos = [
  "/anywebp/logos/shock.webp",
  '/anywebp/logos/blanco.svg',
  '/anywebp/logos/tretie.webp',
  '/anywebp/logos/gorenje-logo.webp',
  '/anywebp/logos/asko-logo.svg',
];

export default function LogoBanner() {
  return (
    <section className="w-full py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-2">Kvalitný dodávatelia</h2>
        <div className="w-40 md:w-28 lg:w-64 h-1 bg-orange-300 ml-20 lg:ml-96 mb-6" />
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 md:mt-24 gap-8 md:gap-24">
          {partnerLogos.map((src, idx) => (
            <div key={idx} className="h-14 md:h-24 flex items-center">
              <Image
              src={src}
              alt={`Partner logo ${idx + 1}`}
              width={100}
              height={40}
              className="object-contain opacity-50 hover:opacity-100 h-8 md:h-24 w-auto filter grayscale scale-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 