import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';
import ColorContainer from './Components/ColorContainer';
import Buttons from './Components/Buttons';
import ResultNotification from './Components/ResultNotification';
import { ColorContextProvider } from "./Components/Contexts/colorContext";
// import Footer from './Components/Footer';

function App() {
  return (
    <ColorContextProvider>
    <div className='App'>
      <Navbar />
      <ColorContainer />
      <Buttons />
      <ResultNotification />
      {/* <Footer /> */}
    </div>
    </ColorContextProvider>
  );
}

export default App;
