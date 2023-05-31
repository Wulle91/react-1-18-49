import "./App.css";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import LifeCyclesCDM from "./components/LyfeCiclesCDM";
import RenderingLists from "./components/RenderingLists";
import LifeCycleCDU from "./components/LifeCycleCDU";
import LifeCyclesCWU from "./components/LifeCyclesCWU";


function App() {
  return <div className="App">
    {/* <ConditionalRenderingClass /> */}
    {/* <RenderingLists /> */}
    {/* <LifeCyclesCDM /> */}
    {/* <LifeCycleCDU /> */}
    <LifeCyclesCWU />
    
  </div>;
}

export default App;
