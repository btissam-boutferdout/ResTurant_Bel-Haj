//

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
                  <img
                    src="src/assets/tacos.jpg"
                    alt=""
                    className="w-75 h-75 rounded"
                  />
                  <h1 className="">Tacos</h1>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <img
                    src="src/assets/cosamia.jpg"
                    alt=""
                    className="w-75 h-75  rounded"
                  />
                  <h1>Cosamia</h1>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <img
                    src="src/assets/pizaa.webp"
                    alt=""
                    className="w-75 h-75 rounded"
                  />
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
