import BaseNode from "./BaseNode";


export default function APINode() {
  return (
    <BaseNode
      title="API"
      inputs={["request"]}
      outputs={["response"]}
    >
      <p style={{ fontSize: "12px" }}>External API call</p>
    </BaseNode>
  );
}
