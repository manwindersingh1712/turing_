import "./App.css";
import Companies from "./Components/Companies";
import Fold from "./Components/Fold/index";
import NewJobOffers from "./Components/NewJobOffers";

function App() {
  return (
    <div className="App">
      <Fold />
      <NewJobOffers />
      <Companies />
    </div>
  );
}

export default App;
