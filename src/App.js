import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Utils App" about="About" />
      <TextForm heading="Enter Your Text Below" />
    </>
  );
}

export default App;
