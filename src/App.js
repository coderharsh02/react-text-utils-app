import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title='Text Utils' about='AboutApp'/>
      {/* <Navbar about='AboutApp'/> would give error in console as we have defined propType as required for title */}
      {/* <Navbar title="Text Utils" /> would use defaultProps value for about */}
    </>
  );
}

export default App;
