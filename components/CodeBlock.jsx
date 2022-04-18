import { CopyBlock, atomOneLight } from "react-code-blocks";
import Caption from "./Caption";

export default function CodeBlock({ block }) {
  return (
    <figure>
      <CopyBlock
        text={block[block.type].rich_text.map((code) => {
          return code.plain_text;
        })}
        language={block[block.type].language}
        showLineNumbers="true"
        wrapLines
        theme={atomOneLight}
      />
      <Caption block={block} />
    </figure>
  );
}
