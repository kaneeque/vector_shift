import { useState, useMemo } from "react";
import BaseNode from "./BaseNode";

const extractVariables = (text) => {
  const regex = /\{\{\s*([a-zA-Z_$][\w$]*)\s*\}\}/g;
  return [...new Set([...text.matchAll(regex)].map(m => m[1]))];
};

export default function TextNode() {
  const [text, setText] = useState("");

  // Extract variables only when text changes
  const variables = useMemo(() => extractVariables(text), [text]);

  const handleChange = (e) => {
    setText(e.target.value);

    // Auto-resize textarea height
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <BaseNode
      title="Text"
      inputs={variables}
      outputs={["output"]}
    >
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type text with {{ variables }}"
        className="node-textarea"
      />
    </BaseNode>
  );
}
