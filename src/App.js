import logo from "./logo.svg";
// import "./App.css";
import Header from "./Header.js";
import Greeting from "./Greeting.js";
function App() {
  return (
    <div className="App">
      <Header />
      <Greeting name="Nick" />
      {Greeting({ name: "Archer" })}
    </div>
  );
}

export default App;
