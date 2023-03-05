import { BrowserRouter, Route, Routes } from "react-router-dom";
import FarmComponent from "./pages/Farm/farm.component";
import HomeComponent from "./pages/Home/home.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/farm" element={<FarmComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
