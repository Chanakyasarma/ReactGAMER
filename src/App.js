
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Videos from "./components/Videos";
import Games from "./components/Games";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/games" element={<Games />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
