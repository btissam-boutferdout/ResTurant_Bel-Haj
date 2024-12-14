const Page = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="text-center p-5 m-5 mb-0">
            <span className="text-danger">Top</span> Collection
          </h1>
          <p className="text-center fs-4 mb-5">
            All our best meals in one delicious snap
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <img
                  src="src/assets/brochette.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Brochette Viande </h5>
                  <p className="card-text">
                    Brochette Viande is a dish of skewered, marinated meat
                    grilled over an open flame. Usually made with beef, lamb, or
                    chicken, it’s seasoned with spices for a smoky, savory
                    flavor. Served with veggies, sauces, or bread, it’s perfect
                    for BBQs or street food lovers.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <img
                  src="src/assets/sbagette.jpeg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Spaghetti Sea Food</h5>
                  <p className="card-text">
                    Spaghetti Seafood is a delicious pasta dish featuring
                    spaghetti tossed with a mix of fresh seafood like shrimp,
                    mussels, and squid. Cooked in a flavorful sauce of garlic,
                    herbs, and tomatoes, it's a perfect choice for seafood
                    lovers seeking a light yet savory meal.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <img
                  src="src/assets/lasagne.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Lasagne</h5>
                  <p className="card-text">
                    Lasagne is a classic Italian dish made of layers of pasta,
                    rich meat or vegetable sauce, creamy béchamel, and melted
                    cheese. Baked to golden perfection, it’s a hearty and
                    flavorful comfort food loved worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
