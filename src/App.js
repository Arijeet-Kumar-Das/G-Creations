import logo from "./logo.svg";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
