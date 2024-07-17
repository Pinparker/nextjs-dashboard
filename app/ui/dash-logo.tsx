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
        src={"/images/logo.webp"}
        alt={`Logo Title picture`}
        className="mr-4 rounded-md md:block hidden -z-1"
        width={100}
        height={100}
      ></Image>
      <p className="text-[22px]">Tomato</p>
    </div>
  );
}
