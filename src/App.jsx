import "./index.css";
import "./App.css";
import img1 from "./assets/icon-supervisor.svg";
import img2 from "./assets/icon-team-builder.svg";
import img3 from "./assets/icon-karma.svg";
import img4 from "./assets/icon-calculator.svg";

function App() {
  return (
    <>
      <div>
        <h1 className="first-title"> Reliable, efficient delivery</h1>
        <h1 className="second-title"> Powered by Technology</h1>
        <p className="header-text">
          Our Artificial Intelligence powered tools use millions of project data{" "}
          <br />
          points to ensure that your project is successful
        </p>
      </div>
      <div className="all-cards">
        <div className="card-one">
          <div className="card-info">
            <h1>Supervisor</h1>
            <p>Monitors activity to identify project roadblocks</p>
          </div>
          <img className="icon" src={img1} alt="" />
        </div>
        <div className="middle-container">
          <div className="card-two">
            <div className="card-info">
              <h1>Team Builder</h1>
              <p>
                Scans our talent network to create the optimal team for your
                project
              </p>
            </div>
            <img className="icon" src={img2} alt="" />
          </div>
          <div className="card-three">
            <div className="card-info">
              <h1> Karma</h1>
              <p>Regularly evaluates our talent to ensure quality</p>
            </div>
            <img className="icon" src={img3} alt="" />
          </div>
        </div>
        <div className="card-four">
          <div className="card-info">
            <h1>Calculator</h1>
            <p>
              Uses data from past projects to provide better delivery estimates
            </p>
          </div>
          <img className="icon" src={img4} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
