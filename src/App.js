import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import { MUITypography } from "./Components/MUITypography";
import { MUIButton } from "./Components/MUIButon";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Vipin" />
      <Greet name="Shyam" />
      <Greet name="Alice" /> */}
      {/* <Welcome /> */}
      {/* <Hello /> */}
      {/* <MUITypography /> */}
      <MUIButton />
    </div>
  );
}

export default App;
