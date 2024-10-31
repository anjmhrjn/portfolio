import { useRef, useEffect } from "react";
import { Fireworks } from "fireworks-js";

export default function FireworksDisplay({ setShowFireworks }) {
  const fireworksOptions = {
    rocketsPoint: 50,
    speed: 10, // Speed of the fireworks
    acceleration: 1.2,
    particles: 90, // Number of particles per firework
    trace: 3, // Trace length
    explosion: 6, // Explosion intensity
    autoresize: true,
    intensity: 30, // Fireworks frequency
    friction: 0.95,
    hue: {
      min: 0,
      max: 360,
    },
    brightness: {
      min: 50,
      max: 80,
      decay: {
        min: 0.015,
        max: 0.03,
      },
    },
    delay: {
      min: 15,
      max: 15,
    },
    boundaries: {
      visible: false,
    },
    mouse: {
      click: true,
      move: false,
      max: 1,
    },
  };

  const containerRef = useRef(null);
  const stopFireworks = () => {
    setShowFireworks(false);
  };

  useEffect(() => {
    if (containerRef.current) {
      const fireworks = new Fireworks(containerRef.current, {});
      fireworks.start();

      // Cleanup when the component unmounts
      return () => fireworks.stop();
    }
  }, []);
  return (
    <div className="100vh">
      <div className="text-center">
        <p className="text-white h5">I hope you have a wonderful Tihar, Sadiksha!</p>
        <button className="btn btn-danger" onClick={() => stopFireworks()}>
          Close Fireworks
        </button>
      </div>
      <div className="">
      <div ref={containerRef} style={{position: "fixed", width: "100%"}}></div>
      </div>
      
    </div>
  );
}
