import "./Welcome.css";
const mensaje="Este es un espacio para aprender, vivir experiencias únicas, y sobretodo tener todo esos conocimientos ancestrales de la buena cocina, comida, postres, lo delicioso de la vida!!!";
const Welcome =()=>{
    return(
        <>
        <h1 className="titulo-bvn1">Bienvenidos a Diana's Delicatessen</h1>
        <p className="parrafo-bvn1">{mensaje}</p>
        </>
    );
}
export default Welcome;