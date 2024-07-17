import {
  GlobeAltIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        // src={"/images/ox5qh0W.png"}
        src={"/images/logo.webp"}
        alt={`Logo Title picture`}
        className="mr-4 rounded-md md:block hidden -z-1"
        width={180}
        height={180}
      ></Image>
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <WrenchScrewdriverIcon className="h-12 w-12 rotate-[15deg]" />

      <p className="text-[44px]">Tomato</p>
    </div>
  );
}
