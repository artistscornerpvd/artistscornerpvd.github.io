import { Link } from "react-router-dom";
import Slideshow from "./Slideshow";
import "../styles/about.css";

function HomePage() {
  return (
    <div>
      <div>
        <Slideshow />
      </div>

      <section className="forms-section" style={{paddingBottom:"2rem"}}>
        <h2>Forms📝</h2>
        <div className="forms-list">
          <div className="form">
            <p>
              <span>
                New Here?{" "}
                <Link
                  to="https://forms.gle/ivRhU23p5k1VZt8eA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Create a Seller Account!
                </Link>
              </span>
            </p>
          </div>
          <div className="form">
            <p>
              <span>
                <Link
                  to="https://forms.gle/nAkEzaGxkzrqdRfq8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Add New Listing
                </Link>{" "}
                /{" "}
                <Link
                  to="https://forms.gle/Lh1svA7T9rWGsP8H7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Update Listing
                </Link>
              </span>
            </p>
          </div>
          <div className="form">
            <p>
              <span>
                Sold an Item?{" "}
                <Link
                  to="https://forms.gle/GLzzYC6okWjEZVJv5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mark as Sold!
                </Link>
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
