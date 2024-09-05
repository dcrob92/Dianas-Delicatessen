import "./Carrusel.css";
import carruselimg1 from "./../../assets/Carrusel/banner1.jpeg"
import carruselimg2 from "../../assets/Carrusel/banner2.jpg"
import carruselimg3 from "../../assets/Carrusel/banner3.jpg"

const Carrusel =()=>{
    return (
        <section className="image-Banner">
            <img src={carruselimg1} alt="Pasteleria"/>
            <img src={carruselimg2} alt="Cocina-casera"/>
            <img src={carruselimg3} alt="Cocina"/>
        </section>
    );
};

export default Carrusel;