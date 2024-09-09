import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex sm:items-center justify-center w-[100vw] min-h-[100vh]">
        <div className="bg-white w-[calc(100vw-32px)] h-fit my-[28px] rounded-[10px] overflow-hidden sm:w-[600px] sm:h-[450px] sm:flex">
            <Image src="/image-product-mobile.jpg" alt="Product Image" width={343} height={200} className="block w-[calc(100vw-32px)] sm:hidden" />
            <Image src="/image-product-desktop.jpg" alt="Product Image" width={317} height={200} className="hidden sm:block" />

            <div className="sm:w-[300px]">
                <h2 className="montserrat mx-6 mt-6 text-[12px] text-[#6C7289] tracking-[5px] font-medium sm:mt-8 sm:mx-8">PERFUME</h2>
                <h1 className="fraunces mx-6 mt-3 text-[32px] font-bold leading-[32px] text-[#1C232B] sm:ml-8 sm:mr-9 sm:mt-5">Gabrielle Essence Eau De Parfum</h1>
                <p className="montserrat mx-6 mt-4 text-[14px] text-[#6C7289] font-medium leading-[23px] sm:mx-8 sm:mt-6">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

                <div className="flex items-center mt-6 mx-6 sm:mt-7 sm:mx-8">
                    <h3 className="fraunces text-[#3D8168] text-[32px] font-bold leading-[32px]">$149.99</h3>
                    <p className="montserrat text-[#6C7289] text-[13px] line-through leading-[23px] font-medium ml-[19px]">$169.99</p>
                </div>

                <button className="w-[calc(100vw-32px-48px)] mx-6 mt-5 bg-[#3D8168] rounded-[8px] h-[48px] mb-6 flex items-center justify-center transition duration-200 ease-in-out hover:bg-[#1A4032] sm:mt-[30px] sm:w-[calc(300px-64px)] sm:mx-8">
                    <Image src="/icon-cart.svg" alt="Cart Icon" width={14} height={16} />
                    <span className="montserrat font-bold text-white text-[14px] ml-3">Add to Cart</span>
                </button>
            </div>
        </div>
    </div>
  );
}
