export default function styleRichText(text) {
  return {
    color: `${text.annotations.color != "default" && text.annotations.color}`,
    fontWeight: `${text.annotations.bold && "bold"}`,
    textDecorationLine: `${
      text.annotations.underline && text.annotations.strikethrough
        ? "underline line-through"
        : text.annotations.strikethrough && !text.annotations.underline
        ? "line-through"
        : text.annotations.underline && !text.annotations.strikethrough
        ? "underline"
        : ""
    }`,
    fontStyle: `${text.annotations.italic && "italic"}`,
  };
}
