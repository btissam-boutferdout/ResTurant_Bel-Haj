import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTruck, faStar } from "@fortawesome/free-solid-svg-icons";

const NavbarPlus = () => {
  return (
    <div>
      <>
        <div className="container text-center pt-5 mt-5 ">
          <h1>
            Why <strong className="text-danger">Bel hajj</strong>
          </h1>
        </div>
        <div className="d-flex justify-content-around p-5 m-3 text-center">
          <div className="">
            <FontAwesomeIcon icon={faList} size="2x" />
            <h3>Easy To order</h3>
          </div>
          <div>
            <FontAwesomeIcon icon={faTruck} size="2x" />
            <h3>Fastest Delivery</h3>
          </div>
          <div>
            <FontAwesomeIcon icon={faStar} size="2x" />
            <h3>Best Quality</h3>
          </div>
        </div>
      </>
    </div>
  );
};

export default NavbarPlus;
