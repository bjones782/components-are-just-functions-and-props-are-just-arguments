import Header from "./Header.js"
import Greeting from "./Greeting.js"
import LotsOfProps from "./LotsOfProps.js";

function App() {
  // logic
let myarray = [1, 2, 3, 4]
  
  return (
    <div className="App">
      <Header />
      <h2>Hey all you cool cats and kittens</h2>
      <Greeting name="Bob"/>
      <LotsOfProps pizzaTopping="pineapple" icecream="chocolate" scoops={3} array={myarray} />
    </div>
  );
}

export default App;
