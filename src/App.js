import styled from 'styled-components';
import Navbar from './components/first_page/navbar';
import Midlle from './components/first_page/middle';
// import background from './assets/image-dégradé.png';
import Film from './assets/film.mp4';
import './App.css';

const Container = styled.div`
  height:  100vh;
`;
function App() {
  return (
    <Container>
      <Navbar/>
      <Midlle/>
      <video src={Film} autoPlay loop muted/>
    </Container>
  );
}

export default App;
