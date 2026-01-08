import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BigScreen from "@/pages/BigScreen";
import Home from "@/pages/Home";
import "./App.css";
import "./example.less";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/big" element={<BigScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
