import "./Videosweb.css";
import video1 from "../../assets/Videosweb/cocina-desde-cero-1.mp4";
import video2 from "../../assets/Videosweb/cocina-marinar-pollo-clase1.mp4";

const mensaje1 = "Cursos y recetas que necesitas y te van a encantar!!!";
const mensaje2 =
  "Clases Personalizadas, si solo quieres apender algo en especial";
const soportvideo = "Tu navegador no soporta este video.";

const Videosweb = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col-md-6">
            <p className="section-clases">{mensaje1}</p>
            <video width="320" height="240" controls>
              <source src={video1} type="video/mp4" />
              {soportvideo}
            </video>
          </div>
          <div className="col-md-6">
            <p className="section-clases">{mensaje2}</p>
            <video width="320" height="240" controls>
              <source src={video2} type="video/mp4" />
              {soportvideo}
            </video>
          </div>
        </div>
      </div>
    </>
  );
};
export default Videosweb;
