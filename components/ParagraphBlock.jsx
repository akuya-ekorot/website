import styleRichText from "../lib/styleRichText";

export default function ParagraphBlock({ block }) {
  return (
    <p>
      {block[block.type].rich_text.map((text) => {
        return text.href ? (
          <a
            key={text.index}
            href={text.href}
            className="underline line"
            style={styleRichText(text)}
          >
            {text.plain_text}
          </a>
        ) : text.annotations.code ? (
          <code key={text.index} style={styleRichText(text)}>
            {text.plain_text}
          </code>
        ) : (
          <span key={text.index} style={styleRichText(text)}>
            {text.plain_text}
          </span>
        );
      })}
    </p>
  );
}
