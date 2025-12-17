import BaseNode from "./BaseNode";

export default function ConditionNode() {
  return (
    <BaseNode
      title="Condition"
      inputs={["condition"]}
      outputs={["true", "false"]}
    >
      <p style={{ fontSize: "12px" }}>True / False path</p>
    </BaseNode>
  );
}
