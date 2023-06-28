import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spline from "@splinetool/react-spline";

function App() {
  return (
    <>
      <Navbar />
      <Spline scene="https://prod.spline.design/vBcdpJvu-UpmZQZM/scene.splinecode" />
      <Footer />
    </>
  );
}

export default App;
