// src/components/ui/Background.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./Background.css";

const Background = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  const options = {
    background: {
      image: "radial-gradient(circle, #1155cc, #252951 80%)",
    },
    particles: {
      color: { value: "#00ffff" },
      links: {
        color: "#00ffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: false,
        straight: false,
        outMode: "bounce",
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: 2 },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        repulse: { distance: 75, duration: 0.4 },
      },
    },
  };

  const sparkCount = 40;
  const sparks = Array.from({ length: sparkCount }, (_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 3+2}px`,
    delay: `${Math.random() * 5}s`,
    duration: `${30 + Math.random() * 10}s`,
  }));

  return (
    <div className="background">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      {sparks.map((spark, i) => (
        <div
          key={`spark-${i}`}
          className="spark"
          style={{
            top: spark.top,
            left: spark.left,
            width: spark.size,
            height: spark.size,
            animationDelay: spark.delay,
            animationDuration: spark.duration,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
