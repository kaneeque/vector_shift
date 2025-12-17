import BaseNode from "./BaseNode";

export default function MathNode() {
  return (
    <BaseNode
      title="Math"
      inputs={["a", "b"]}
      outputs={["result"]}
    >
      <p style={{ fontSize: "12px" }}>a + b calculation</p>
    </BaseNode>
  );
}
