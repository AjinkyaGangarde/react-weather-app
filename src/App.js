import './App.css';
import Header from './componant/layoutComponent/Header';
import {AppContainer} from './componant/layoutComponent/AppContainer'
import Footer from './componant/layoutComponent/Footer';

function App() {
  return (
    <div className="App antialiased">      
        <Header/>
        <AppContainer/>
        <Footer/>
    </div>
  );
}

export default App;
