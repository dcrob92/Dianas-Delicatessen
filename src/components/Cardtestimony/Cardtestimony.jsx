import "./Cardtestimony.css";


const Cardtestimony=({testimony})=>{
    return(
        <div>
            <img className="img-test" src={testimony?.picture} />
            <p className="text-tst">{testimony?.name}</p>
            <p className="text-tst">{testimony?.description}</p>
            
        </div>
    );
};

export default Cardtestimony;