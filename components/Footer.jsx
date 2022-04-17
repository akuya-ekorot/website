import Image from "next/image";
import LightBackground from "./LightBackground";

export default function Footer() {
  return (
    <LightBackground>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center">
          <p>Send your best regards 😅</p>
          <p>hello@akuya.co.ke</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p>Other places I hang out on the internet</p>
          <div className="flex flex-row gap-3">
            <Image
              src="/assets/twitter.png"
              alt="Twitter Logo"
              width="25px"
              height="25px"
            ></Image>
            <Image
              src="/assets/instagram.png"
              alt="instagram Logo"
              width="25px"
              height="25px"
            ></Image>
          </div>
        </div>
      </div>
    </LightBackground>
  );
}
