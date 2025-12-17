import BaseNode from "./BaseNode";


export default function LoggerNode() {
  return (
    <BaseNode
      title="Logger"
      inputs={["input"]}
      outputs={[]}
    >
      <p style={{ fontSize: "12px" }}>Logs pipeline data</p>
    </BaseNode>
  );
}
