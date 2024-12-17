import TacosImage from "../assets/tacos.jpg";
import CosamiaImage from "../assets/cosamia.jpg";
import PizzaImage from "../assets/pizaa.webp";

const Grid = () => {
  return (
    <>
      <>
        <div className="bg-body-secondary">
          <div className="d-flex justify-content-between pt-5 m-5">
            <h1>Trending Recipes</h1>
          </div>
          <div>
            <div className="container text-center">
              <div className="row">
                <div className="col-12 col-md-4 mb-3">
                  <img src={TacosImage} alt="" className="w-75 h-75 rounded" />
                  <h1 className="">Tacos</h1>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <img
                    src={CosamiaImage}
                    alt=""
                    className="w-75 h-75  rounded"
                  />
                  <h1>Cosamia</h1>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <img src={PizzaImage} alt="" className="w-75 h-75 rounded" />
                  <h1>Pizza</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Grid;
