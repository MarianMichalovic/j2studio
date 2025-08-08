import Image from "next/image";

export default function PartnerBanner() {
  return (
    <section className="w-full bg-neutral-900 py-12 px-2 sm:py-16 sm:px-4 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-2xl">
        <Image
          src="/anywebp/kramar.png"
          alt="Partner Logo"
          width={180}
          height={180}
          className="p-2 sm:p-4 shadow-none w-32  sm:w-64 object-contain"
          priority
        />
        <h2 className="text-2xl xs:text-Exl sm:text-3xl md:text-4xl font-extrabold text-white text-center leading-tight">
          Švajčiarska kvalita a nízka cena
        </h2>
        <span className="inline-block text-orange-400 px-2 sm:px-6 text-md sm:text-2xl font-semibold -mt-2 sm:-mt-4 text-center">
          Od nášho oficiálneho dodávateľa nábytku
        </span>
        <h3 className="underline text-white text-base sm:text-xl pt-4 sm:pt-8 text-center">Navštívte stránku dodávateľa</h3>
      </div>
    </section>
  );
} 