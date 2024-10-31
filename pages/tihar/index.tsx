import { useEffect, useState } from "react";
import Simple from "../../components/tihar/first/Simple";
import Alternating from "../../components/tihar/first/Alternating";
import Starburst from "../../components/tihar/first/Starburst";
import Petals from "../../components/tihar/second/Petals";
import MainRangoli from "../../components/tihar/MainRangoli";
import FireworksDisplay from "../../components/tihar/FireworksDisplay";

export default function Rangoli() {
  const [innerLayerType, setInnerLayerType] = useState("");
  const [innerMainColor, setInnerMainColor] = useState("#ffa500");
  const [innerSecondaryColor, setInnerSecondaryColor] = useState("#ffff00");
  const [outerLayerType, setOuterLayerType] = useState("");
  const [outerMainColor, setOuterMainColor] = useState("#ffa500");
  const [outerSecondaryColor, setOuterSecondaryColor] = useState("#000");
  const [borderType, setBorderType] = useState("");
  const [fillColor, setFillColor] = useState("#ffffff");
  const [borderColor, setBorderColor] = useState("#ffffff");
  const [show, setShow] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const [lights, setLights] = useState([true, true, true, true, true, true]);

  useEffect(() => {
    // Create a timer to toggle the lights
    const interval = setInterval(() => {
      setLights(prevLights => prevLights.map(light => (Math.random() > 0.5 ? !light : light)));
    }, 2000); // Adjust blinking interval here

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const getTiharWish = () => {
    const dateToday = new Date();
    const currentYear = dateToday.getFullYear();
    const currentMonth = dateToday.getMonth();
    const currentDay = dateToday.getDate();

    if (currentYear === 2024 && currentMonth === 9 && currentDay === 30) {
      return (
        <>
          Happy Kaag Tihar!
          <br />
          <small>
            <em>May you be as clever as a crow.</em>
          </small>
        </>
      );
    } else if (currentYear === 2024 && currentMonth === 9 && currentDay === 31) {
      return (
        <>
          Happy Kukur Tihar!
          <br />
          <small>
            <em>
              May you find someone as loyal as a dog.<span className="d-none">Me</span>
            </em>
          </small>
        </>
      );
    } else if (currentYear === 2024 && currentMonth === 10 && currentDay === 1) {
      return (
        <>
          Happy Laxmi Puja!
          <br />
          <small>
            <em>May goddess Laxmi bless you with abundance wealth.</em>
          </small>
        </>
      );
    } else if (currentYear === 2024 && currentMonth === 10 && currentDay === 2) {
      return (
        <>
          Happy Mha Puja! Nhu Daya Bhintuna!
          <br />
          <small>
            <em>As you are worshipping yourself, make sure to take care of yourself as well.</em>
          </small>
        </>
      );
    } else if (currentYear === 2024 && currentMonth === 10 && currentDay === 3) {
      return (
        <>
          Happy Bhai Tika!
          <br />
          <small>
            <em>May your brother live long life so that you can get a lot of gifts.</em>
          </small>
        </>
      );
    }
  };

  const showRangoli = () => {
    setShow(true);
  };

  const clearRangoli = () => {
    setShow(false);
    setInnerLayerType("");
    setInnerMainColor("#ffa500");
    setInnerSecondaryColor("#ffff00");
    setOuterLayerType("");
    setOuterMainColor("#ffa500");
    setOuterSecondaryColor("#000");
    setBorderType("");
    setFillColor("#ffffff");
    setBorderColor("#ffffff");
  };

  const startFireworks = () => {
    setShowFireworks(true);
  };

  return (
    <div className="main-bg">
      <div className={`d-flex justify-content-center lightsContainer`}>
        <div className={"string"}>
          {lights.map((isOn, index) => (
            <div key={index} className={`bulb ${isOn ? "on" : "off"} position${index}`}></div>
          ))}
        </div>
        <div className={"string"}>
          {lights.map((isOn, index) => (
            <div key={index} className={`bulb ${isOn ? "on" : "off"} position${index}`}></div>
          ))}
        </div>
      </div>
      <h3 className="text-center text-white pt-5">{getTiharWish()}</h3>
      {showFireworks ? (
        <FireworksDisplay setShowFireworks={setShowFireworks} />
      ) : (
        <div className="container">
          <div className="row mt-3 text-white">
            <div className="col-12 col-md-4 form-group">
              <p className="font-weight-bold">Inner layer</p>
              <div className="mb-3">
                <label className="form-label">Layer Type</label>
                <select
                  className="form-control"
                  value={innerLayerType}
                  onChange={e => setInnerLayerType(e.target.value)}
                >
                  <option value={""}>Select the inner layer</option>
                  <option value={"simple"}>Simple</option>
                  <option value={"alternating"}>Alternating</option>
                  <option value={"starburst"}>Starburst</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="">Main Color</label>
                <div>
                  <input type="color" value={innerMainColor} onChange={e => setInnerMainColor(e.target.value)} />
                </div>
              </div>
              <div className="mb-3">
                <label className="">Secondary Color</label>
                <div>
                  <input
                    type="color"
                    value={innerSecondaryColor}
                    onChange={e => setInnerSecondaryColor(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 form-group">
              <p className="font-weight-bold">Outer layer</p>
              <div className="mb-3">
                <label className="form-label">Layer Type</label>
                <select
                  className="form-control"
                  value={outerLayerType}
                  onChange={e => setOuterLayerType(e.target.value)}
                >
                  <option value={""}>Select the outer layer</option>
                  <option value={"petals"}>Petals</option>
                  <option value={"hearts"}>Hearts</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="">Main Color</label>
                <div>
                  <input type="color" value={outerMainColor} onChange={e => setOuterMainColor(e.target.value)} />
                </div>
              </div>
              <div className="mb-3">
                <label className="">Secondary Color</label>
                <div>
                  <input
                    type="color"
                    value={outerSecondaryColor}
                    onChange={e => setOuterSecondaryColor(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 form-group">
              <p className="font-weight-bold">Border</p>
              <div className="mb-3">
                <label className="form-label">Border Type</label>
                <select className="form-control" value={borderType} onChange={e => setBorderType(e.target.value)}>
                  <option value={""}>Select the border type</option>
                  <option value={"none"}>None</option>
                  <option value={"simple"}>Simple</option>
                  <option value={"spikes"}>Border with spikes</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="">Fill Color</label>
                <div>
                  <input type="color" value={fillColor} onChange={e => setFillColor(e.target.value)} />
                </div>
              </div>
              <div className="mb-3">
                <label className="">Border Color</label>
                <div>
                  <input type="color" value={borderColor} onChange={e => setBorderColor(e.target.value)} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-primary mr-3 mb-3" type="button" onClick={showRangoli}>
              Show Rangoli
            </button>
            {show && (
              <button className="btn btn-success mr-3 mb-3" type="button" onClick={clearRangoli}>
                Remove Rangoli
              </button>
            )}
            <button className="btn btn-danger mb-3" type="button" onClick={startFireworks}>
              Fireworks Display
            </button>
          </div>
          <div className="py-5">
            {show && (
              <MainRangoli
                rangoliData={{
                  innerLayerType,
                  innerMainColor,
                  innerSecondaryColor,
                  outerLayerType,
                  outerMainColor,
                  outerSecondaryColor,
                  borderType,
                  fillColor,
                  borderColor,
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
