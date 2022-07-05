import styled from 'styled-components';
import Navbar from '../../components/first_page/navbar';
import Midlle from '../../components/first_page/middle';
import { createGlobalStyle } from 'styled-components';
import Film from '../../assets/film.mp4';
import {BsChevronDoubleDown} from 'react-icons/bs';
import Triangle from './triangle';

const Globalstyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;

const Containerfirstpage = styled.div`
  height:  100vh;
`;

const Firstpage = () => {
  return (
    <div>
      <Containerfirstpage>
        <Globalstyle/>
        <BsChevronDoubleDown style={{
          position: 'absolute',
          top: '50rem',
          left: '57.2rem',
        }}
        justifycontent="center"
        align-items="center"
        size="70px"
        color='white'/>
        <Navbar/>
        <Midlle/>
        <video src={Film} autoPlay loop muted/>
        <Triangle/>
      </Containerfirstpage>
    </div>
  );
};

export default Firstpage;
