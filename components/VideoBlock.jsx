import ReactPlayer from "react-player";
import Caption from "./Caption";

export default function VideoBlock({ block }) {
  return (
    <figure>
      <ReactPlayer
        url={`${block[block.type][block[block.type].type]?.url}`}
        width="100%"
        height="450px"
      />
      <Caption block={block} />
    </figure>
  );
}
