import logo from "./logo.svg";
// import "./App.css";
import Header from "./Header.js";
import Greeting from "./Greeting.js";
import MultiPropComponent from "./MultiPropComponent";
function App() {
  return (
    <div className="App">
      <Header />
      {Header()}
      <Greeting name="Nick" />
      {Greeting({ name: "Archer" })}
      <MultiPropComponent food="Ice Cream" color="Green" number={24} />
      {MultiPropComponent({ food: "Wings", color: "Purple", number: 2 })}
    </div>
  );
}

export default App;
