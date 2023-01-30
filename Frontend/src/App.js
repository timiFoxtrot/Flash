import { useState } from "react";
import SideBar from "./components/sidebar";
import { MemoryContext } from "./contexts/memoryContext";
function App() {
  const [state, setState] = useState('')
  console.log(state.photo)
  return (
    <MemoryContext.Provider value={{ state, setState }} >
      <div className="App">
        {state && <img src={`http://localhost:4000${state.photo}`} alt="ddd" />}
        <SideBar />
      </div>
    </MemoryContext.Provider>
  );
}

export default App;
