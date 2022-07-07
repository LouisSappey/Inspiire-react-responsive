import styled from 'styled-components';
import Titrevaleurs from './titre_valeurs';
import Slidervaleurs from './slider_valeurs';

const Containervaleurs= styled.div`
    height:  100vh;
`;

// const mottos = [
//     {id:0,value:"Fais ce que tu veux, suis tes intuitions. Mais quoi que tu fasses, fais le bien."},
//     {id:1,value:"Pivoter ce n'est pas se renier"},
//     {id:2,value:"La vérité d'un jour n'est pas celle du lendemain"},
//     {id:3,value:"La seule manière de faire du bon boulot, c'est d'aimer ce que tu fais "},
//     {id:4,value:"En vérité, le chemin importe peu, la volonté suffit à tout"},
//     {id:5,value:"Quand tout semble être contre toi, souviens-toi que l’avion décolle face au vent, et non avec lui"},
//     {id:6,value:"Il faut toujours viser la lune, car même en cas d’échec, on atterrit dans les étoiles "},
//     {id:7,value:"C’est dur d’échouer, mais c’est pire de n’avoir jamais essayé de réussir"},
//     {id:8,value:"La réussite n’est pas définitive, l’échec n’est pas fatal : c’est le courage de continuer qui importe "},
// ]

const Valeurs = () => {
    // const [wordData, setWordData]=useState(mottos[0].value)
    // const handleClick=(index)=> {
    //     console.log(index)
    //     const wordSlider=mottos[index].value;
    //     setWordData(wordSlider)
    // }
    return (
        <Containervaleurs>
            <Titrevaleurs/>
            <Slidervaleurs/>
            {/* <div style={{fontSize: '40px', fontFamily: 'Savoye LET'}}>{wordData}</div>
            <div style={{position:'absolute', textAlign:'center'}}>
                {mottos.map((data, i) =>
                <h1 onClick={() =>handleClick(i)}>.</h1>
                )}
            </div> */}
        </Containervaleurs>
    );
};

export default Valeurs;
