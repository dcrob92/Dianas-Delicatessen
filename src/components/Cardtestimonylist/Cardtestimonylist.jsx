import testimonyimg1 from "../../assets/Testimony/test-img1.png";
import testimonyimg2 from "../../assets/Testimony/test-img2.png";
import testimonyimg3 from "../../assets/Testimony/test-img3.png";
import Cardtestimony from "../Cardtestimony/Cardtestimony";
import "../Cardtestimonylist/Cardtestimonylist.css";

const CardtestimonyList = () => {
  const Testimonies = [
    {
      picture: testimonyimg1,
      name: "Dan Lopez",
      description:
        "Me encantaron los platos que aprendi a hacer, gracias por la experiencia.",
    },
    {
      picture: testimonyimg2,
      name: "Diana Leon",
      description:
        "Fue atrevido y muy divertido tomar las clases personalizadas, fue increible.",
    },
    {
      picture: testimonyimg3,
      name: "John Muñoz",
      description:
        "Recomiendo al 100% las clases presenciales, y luego tomar los cursos, fue una experiencia inolvidable, Gracias.",
    },
  ];
  return (
    <section>
      <h2 className="titulo-tst-1">
        Testimonios de algunos amantes a la cocina
      </h2>
      <div className="container text-center">
        <div className="row align-items-start">
          {Testimonies.map((testimonie, index) => (
            <div key={index} className="col">
              <Cardtestimony testimony={testimonie} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardtestimonyList;
