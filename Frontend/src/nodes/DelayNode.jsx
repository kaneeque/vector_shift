import BaseNode from "./BaseNode";

export default function DelayNode() {
  return (
    <BaseNode
      title="Delay"
      inputs={["input"]}
      outputs={["output"]}
    >
      <p style={{ fontSize: "12px" }}>Adds execution delay</p>
    </BaseNode>
  );
}
