import Image from "next/image";
import Caption from "./Caption";

export default function ImageBlock({ block }) {
  return (
    <figure>
      <div className="relative w-full h-[450px]">
        <Image
          src={block[block.type][block[block.type].type]?.url}
          alt=""
          layout="fill"
          className="object-cover"
        ></Image>
      </div>
      <Caption block={block} />
    </figure>
  );
}
