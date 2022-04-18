import styleRichText from "../lib/styleRichText";

export default function Caption({ block }) {
  return (
    <figcaption className="text-sm bg-slate-100 mb-2 p-2">
      {block[block.type].caption.map((caption) => {
        return (
          <span key={caption.index} style={styleRichText(caption)}>
            {caption.plain_text}
          </span>
        );
      })}
    </figcaption>
  );
}
