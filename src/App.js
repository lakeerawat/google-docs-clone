import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Toolbox from "./Components/Toolbox";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/addDoc" element={<Toolbox />} />
          <Route path="/update/:id" element={<Toolbox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
