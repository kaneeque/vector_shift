import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await response.json();

      alert(
        `Pipeline Analysis\n\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag ? "Yes" : "No"}`
      );
    } catch (error) {
      alert("Failed to submit pipeline");
      console.error(error);
    }
  };

  return (
    <div className="submit-bar">
      <button className="submit-button" onClick={handleSubmit}>
        Submit Pipeline
      </button>
    </div>
  );
};
