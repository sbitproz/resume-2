import './App.css';
import { ContactDetails } from './components/ContactDetails/ContactDetails';
import Header from './components/Header/Header';
import { FatSeparator, ThinSeparator } from './components/Separator/Separator';

const home = { address: '131 Elm High', email: 'd@d.com' };

function App() {
  return (
    <div className="App" id="MyID">
      <div className="Container">
        <Header />
        <FatSeparator />
        <ContactDetails details={home} />
        <ThinSeparator />
      </div>
    </div>
  );
}

export default App;
