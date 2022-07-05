import Contactpage from './components/contact_page/contact_page';
import Firstpage from './components/first_page/first_page';
import Mention from './components/mention/mention';
import Raison from './components/raison_etre/page_raison';
import Expertise from './components/expertises/page_expertise';
import Identités from './components/identités/page_identités';

function App() {
  return (
    <div>
      <Firstpage/>
      <Raison/>
      <Expertise/>
      <Identités/>
      <Contactpage/>
      <Mention/>
    </div>
  );
}

export default App;
