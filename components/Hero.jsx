import Image from "next/image";
import LightBackground from "./LightBackground";

export default function Hero() {
  return (
    <LightBackground>
      <div className="flex flex-row gap-5 justify-center items-center">
        <Image
          src="/assets/avatar.jpg"
          alt="Portrait photo of Akuya Ekorot smiling"
          width="150px"
          height="150px"
          className="rounded-full"
        ></Image>
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-4xl font-bold">
            Hey there, I&apos;m Akuya Ekorot
          </h1>
          <p className="text-2xl">
            Welcome to my tiny corner on the internet 😊
          </p>
        </div>
      </div>
    </LightBackground>
  );
}
