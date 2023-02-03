import Login from "./pages/Login";
import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import OwnMemoryPage from "./pages/ownMemoryPage";
import PublicMemoriesPage from "./pages/publicMemoryCardPage";
import Signup from "./pages/signup";
import SingleMemoryPage from "./pages/singleMemory";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route path="/home/public" element={<PublicMemoriesPage />} />
          <Route path="/home/ownMemory" element={<OwnMemoryPage />} />
          <Route path="/home/singleMemoryPage" element={<SingleMemoryPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
