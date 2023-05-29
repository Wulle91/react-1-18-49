import "./App.css";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import RenderingLists from "./components/RenderingLists";

function App() {
  return <div className="App">
    {/* <ConditionalRenderingClass /> */}
    <RenderingLists />
    
  </div>;
}

export default App;
