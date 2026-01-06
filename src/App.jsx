import Card from "./ReusableComponent";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Portfolio</h1>

      <Card
        title="Portfolio Website"
        description="A personal portfolio built using React"
        link="https://github.com/AH25792/JavaScriptAssignment/blob/main/Socialbio.html"
      />

      <Card
        title="Todo App"
        description="A simple todo app using React components"
        link="https://github.com/AH25792/"
      />

      <Card
        title="Bio Link Builder"
        description="Interactive social bio link builder"
        link="https://github.com/AH25792/Module-1-SE---Overview-of-IT-Industry"
      />
    </div>
  );
}

export default App;
