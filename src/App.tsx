import { BrowserRouter, Route, Routes } from "react-router-dom";
import FarmPage from "./pages/Farm";
import HomePage from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/farm" element={<FarmPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
