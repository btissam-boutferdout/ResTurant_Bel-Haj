//
import { Link } from "react-router-dom";
import burgerImage from "../assets/burger1.png";

const SideBar = () => {
  return (
    <>
      <div>
        <div className="bg-black w-100 d-flex  flex-md-row justify-content-between text-light mt-0 pt-5">
          <div>
            <h1 className="text-light p-3 ms-3">
              The taste of tradition,
              <br />
              with a modern twist.
            </h1>
            <p className="w-75 p-3 d-none d-md-block ms-3">
              This website is for people who love to eat and who appreciate good
              food. With recipes that are both delicious and visually appealing,
              you're sure to find something to wow your taste buds.
            </p>
            <Link to="/Menu">
              <button className="btn btn-danger btn-md p-2 m-3">
                See Our Menu
              </button>
            </Link>
          </div>
          <div className="d-flex justify-content-center">
            <img
              src={burgerImage}
              alt="burger"
              className="w-75 align-items-end"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
