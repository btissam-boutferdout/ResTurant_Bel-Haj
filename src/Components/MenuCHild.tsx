import { Link } from "react-router-dom";

const MenuCHild = () => {
  return (
    <div>
      <>
        <main className="text-center py-4 bg-light">
          <h1 className="display-4 fw-bold">Welcome to Our Menu</h1>
          <p className="text-muted">Delicious food, made just for you!</p>
        </main>

        <section className="menu-section container py-4">
          <div className="row align-items-center bg-black text-light rounded shadow p-4">
            <div className="col-md-4 text-center">
              <img
                src="src/assets/pizzas.jpg"
                alt="Delicious Pizzas"
                className="img-fluid rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-5 text-center text-md-start">
              <h2 className="fw-bold">Pizzas</h2>
              <p className=" text-light">
                Explore our wide variety of freshly baked pizzas with the finest
                ingredients.
              </p>
            </div>
            {/*her change */}
            <div className="col-md-3 text-center text-md-end">
              <Link to="/Pizza">
                <button className="btn btn-danger btn-lg px-4 ">See All</button>
              </Link>
            </div>
          </div>
        </section>
        <section className="menu-section container py-4">
          <div className="row align-items-center bg-black rounded shadow p-4">
            <div className="col-md-4 text-center">
              <img
                src="src/assets/salades.jpeg"
                alt="Delicious Salades"
                className="img-fluid rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-5 text-center text-md-start">
              <h2 className="fw-bold text-light">Salades</h2>
              <p className=" text-light">
                Explore our wide variety of freshly baked pizzas with the finest
                ingredients.
              </p>
            </div>
            {/*her change */}
            <div className="col-md-3 text-center text-md-end">
              <Link to="/Salade">
                <button className="btn btn-danger btn-lg px-4 ">See All</button>
              </Link>
            </div>
          </div>
        </section>
        <section className="menu-section container py-4">
          <div className="row align-items-center bg-black text-light rounded shadow p-4">
            <div className="col-md-4 text-center">
              <img
                src="src/assets/paninis.jpg"
                alt="Delicious Paninis"
                className="img-fluid rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-5 text-center text-md-start">
              <h2 className="fw-bold">Paninis</h2>
              <p className=" text-light">
                Explore our wide variety of freshly baked pizzas with the finest
                ingredients.
              </p>
            </div>
            {/*her change */}
            <div className="col-md-3 text-center text-md-end">
              <Link to="/Panini">
                <button className="btn btn-danger btn-lg px-4 ">See All</button>
              </Link>
            </div>
          </div>
        </section>
        <section className="menu-section container py-4">
          <div className="row align-items-center bg-black rounded shadow p-4">
            <div className="col-md-4 text-center">
              <img
                src="src/assets/cosamia.webp"
                alt="Delicious "
                className="img-fluid rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-5 text-center text-md-start">
              <h2 className="fw-bold text-light">Cosamia</h2>
              <p className="text-light">
                Explore our wide variety of freshly baked pizzas with the finest
                ingredients.
              </p>
            </div>
            {/*her change */}
            <div className="col-md-3 text-center text-md-end">
              <Link to="/Cosamia">
                <button className="btn btn-danger btn-lg px-4 ">See All</button>
              </Link>
            </div>
          </div>
        </section>
        <section className="menu-section container py-4">
          <div className="row align-items-center bg-black text-light rounded shadow p-4">
            <div className="col-md-4 text-center">
              <img
                src="src/assets/sandwish.jpg"
                alt="Delicious Paninis"
                className="img-fluid rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-5 text-center text-md-start">
              <h2 className="fw-bold">Sandwich</h2>
              <p className=" text-light">
                Explore our wide variety of freshly baked pizzas with the finest
                ingredients.
              </p>
            </div>
            {/*her change */}
            <div className="col-md-3 text-center text-md-end">
              <Link to="/Sandwish">
                <button className="btn btn-danger btn-lg px-4 ">See All</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="menu-section container py-4">
          <div className="row align-items-center bg-black text-light rounded shadow p-4">
            <div className="col-md-4 text-center">
              <img
                src="src/assets/brochette.webp"
                alt="Delicious Pizzas"
                className="img-fluid rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-5 text-center text-md-start">
              <h2 className="fw-bold">Brochetts</h2>
              <p className=" text-light">
                Explore our wide variety of freshly baked pizzas with the finest
                ingredients.
              </p>
            </div>
            {/*her change */}
            <div className="col-md-3 text-center text-md-end">
              <Link to="/Brochette">
                <button className="btn btn-danger btn-lg px-4 ">See All</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="menu-section container py-4">
          <div className="row align-items-center bg-black text-light rounded shadow p-4">
            <div className="col-md-4 text-center">
              <img
                src="src/assets/burger.jpg"
                alt="Delicious Paninis"
                className="img-fluid rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-5 text-center text-md-start">
              <h2 className="fw-bold">Burger</h2>
              <p className=" text-light">
                Explore our wide variety of freshly baked pizzas with the finest
                ingredients.
              </p>
            </div>
            {/*her change */}
            <div className="col-md-3 text-center text-md-end">
              <Link to="/Burger">
                <button className="btn btn-danger btn-lg px-4 ">See All</button>
              </Link>
            </div>
          </div>
        </section>
        <section className="menu-section container py-4">
          <div className="row align-items-center bg-black text-light rounded shadow p-4">
            <div className="col-md-4 text-center">
              <img
                src="src/assets/tacos.jpg"
                alt="Delicious Paninis"
                className="img-fluid rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-5 text-center text-md-start">
              <h2 className="fw-bold">Tacos</h2>
              <p className=" text-light">
                Explore our wide variety of freshly baked pizzas with the finest
                ingredients.
              </p>
            </div>
            {/*her change */}
            <div className="col-md-3 text-center text-md-end">
              <Link to="/Tacos">
                <button className="btn btn-danger btn-lg px-4 ">See All</button>
              </Link>
            </div>
          </div>
        </section>
        <section className="menu-section container py-4">
          <div className="row align-items-center bg-black text-light rounded shadow p-4">
            <div className="col-md-4 text-center">
              <img
                src="src/assets/lasagne.jpg"
                alt="Delicious Paninis"
                className="img-fluid rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-5 text-center text-md-start">
              <h2 className="fw-bold">Lasagne</h2>
              <p className=" text-light">
                Explore our wide variety of freshly baked pizzas with the finest
                ingredients.
              </p>
            </div>
            {/*her change */}
            <div className="col-md-3 text-center text-md-end">
              <Link to="/Lasagne">
                <button className="btn btn-danger btn-lg px-4 ">See All</button>
              </Link>
            </div>
          </div>
        </section>
        <section className="menu-section container py-4">
          <div className="row align-items-center bg-black text-light rounded shadow p-4">
            <div className="col-md-4 text-center">
              <img
                src="src/assets/sbaghette.jpg"
                alt="Delicious Paninis"
                className="img-fluid rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-5 text-center text-md-start">
              <h2 className="fw-bold">Sbaghitti</h2>
              <p className=" text-light">
                Explore our wide variety of freshly baked pizzas with the finest
                ingredients.
              </p>
            </div>
            {/*her change */}
            <div className="col-md-3 text-center text-md-end">
              <Link to="/Spa">
                <button className="btn btn-danger btn-lg px-4 ">See All</button>
              </Link>
            </div>
          </div>
        </section>
        <section className="menu-section container py-4">
          <div className="row align-items-center bg-black text-light rounded shadow p-4">
            <div className="col-md-4 text-center">
              <img
                src="src/assets/jus.jpg"
                alt="Delicious Paninis"
                className="img-fluid rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-5 text-center text-md-start">
              <h2 className="fw-bold">Jus</h2>
              <p className=" text-light">
                Explore our wide variety of freshly baked pizzas with the finest
                ingredients.
              </p>
            </div>
            {/*her change */}
            <div className="col-md-3 text-center text-md-end">
              <Link to="/Jus">
                <button className="btn btn-danger btn-lg px-4 ">See All</button>
              </Link>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default MenuCHild;
