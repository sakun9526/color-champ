import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import ColorContainer from "./Components/ColorContainer";
import Buttons from "./Components/Buttons";
import ResultNotification from "./Components/ResultNotification";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ColorContainer />
      <Buttons />
      <ResultNotification />
      <Footer />
    </div>
  );
}

export default App;
