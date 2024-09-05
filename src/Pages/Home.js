import CardtestimonyList from "../components/Cardtestimonylist/Cardtestimonylist";
import Carrusel from "../components/Carrusel/Carrusel"
import Videosweb from "../components/Videosweb/Videosweb";
import Welcome from "../components/Welcome/Welcome";
const Home=()=>{
    return(
        <>
        < Carrusel />
        < Welcome />
        < Videosweb />
        < CardtestimonyList />
        </>
    );
};

export default Home;