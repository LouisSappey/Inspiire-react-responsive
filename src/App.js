import Contactpage from './components/contact_page/contact_page';
import Firstpage from './components/first_page/first_page';
import Mention from './components/mention/mention';
import Raison from './components/raison_etre/page_raison';
import Expertise from './components/expertises/page_expertise';
import Identités from './components/identités/page_identités';
import Valeurs from './components/nos_valeurs/page_valeurs';
import Carriere from './components/gestion_carrière/page_carriere';
import Vieinterne from './components/vie_interne/page_interne';
import Associes from './components/associés/page_associes';

function App() {
  return (
    <div>
      <Firstpage/>
      <Raison/>
      <Expertise/>
      <Identités/>
      <Valeurs/>
      <Carriere/>
      <Vieinterne/>
      <Associes/>
      <Contactpage/>
      <Mention/>
    </div>
  );
}

export default App;
