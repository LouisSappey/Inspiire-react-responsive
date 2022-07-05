import styled from 'styled-components';
import Titrecontact from './title';
import Info from './info';
import { createGlobalStyle } from 'styled-components';
import Inscription from './inscription';

const Globalstyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
::placeholder {
  font-size: large;
  color: black;
}
`;

const Containersecondpage = styled.div`
  height:  100vh;
`;


const Contactpage = () => {
  return (
    <div>
      <Containersecondpage>
        <Globalstyle/>
        <Titrecontact/>
        <Info/>
        <Inscription/>
      </Containersecondpage>
    </div>
  );
};

export default Contactpage;
