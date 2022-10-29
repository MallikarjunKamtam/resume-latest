import LeftSection from "./components/left-side";
import RightSide from "./components/right-side";
import "./App.css";

function App() {
  return (
    <div className="app-main-container">
      <div className="left-main">
        <LeftSection />
      </div>
      <div className="right-main">
        <RightSide />
      </div>
    </div>
  );
}

export default App;
