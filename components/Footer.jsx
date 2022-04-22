import Image from "next/image";
import LightBackground from "./LightBackground";
import SocialIcon from "./SocialIcon";

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
            <SocialIcon
              icon="/assets/twitter.png"
              alt="Twitter Logo"
              link="https://twitter.com/akuya_ekorot"
            />
            <SocialIcon
              icon="/assets/instagram.png"
              alt="Instagram Logo"
              link="https://www.instagram.com/akuya_ekorot"
            />
          </div>
        </div>
      </div>
    </LightBackground>
  );
}
