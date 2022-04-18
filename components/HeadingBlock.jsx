import styleRichText from "../lib/styleRichText";

export default function HeadingBlock({ block, hType }) {
  return (
    <div>
      {block[block.type].rich_text.map((text) => {
        return hType == "h1" ? (
          <h1 key={text.index} style={styleRichText(text)} className="text-4xl">
            {text.plain_text}
          </h1>
        ) : hType == "h2" ? (
          <h2 key={text.index} style={styleRichText(text)} className="text-3xl">
            {text.plain_text}
          </h2>
        ) : (
          <h3 key={text.index} style={styleRichText(text)} className="text-2xl">
            {text.plain_text}
          </h3>
        );
      })}
    </div>
  );
}
