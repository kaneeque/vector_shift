import { Handle, Position } from "reactflow";


export default function BaseNode({
  title,
  children,
  inputs = [],
  outputs = [],
}) {
  return (
    <div className="node-container">
      {/* Node Title */}
      <div className="node-header">{title}</div>

      {/* Input Handles */}
      {inputs.map((id, index) => (
        <Handle
          key={id}
          type="target"
          position={Position.Left}
          id={id}
          style={{ top: 50 + index * 20 }}
        />
      ))}

      {/* Node Body */}
      <div className="node-body">{children}</div>

      {/* Output Handles */}
      {outputs.map((id, index) => (
        <Handle
          key={id}
          type="source"
          position={Position.Right}
          id={id}
          style={{ top: 50 + index * 20 }}
        />
      ))}
    </div>
  );
}
