

import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import OwnMemoryPage from "./pages/ownMemoryPage";
import PublicMemoriesPage from "./pages/publicMemoryCardPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route path="/home/public" element={<PublicMemoriesPage />} />
          <Route path="/home/ownMemory" element={<OwnMemoryPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
