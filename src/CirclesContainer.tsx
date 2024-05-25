// src/FallingBalls.tsx
import React, { useEffect, useState } from "react";
import "./styles.css";
import { Obstacles } from "./obstacles";

const colors: string[] = ["red", "blue", "lime", "pink", "purple", "cyan"];

const FallingCircles: React.FC = () => {
  const [circles, setCircles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const createCircle = (index: number) => {
      const size = Math.random() * 30 + 30;
      const left = Math.random() * window.innerWidth;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const duration = Math.random() * 3 + 2;
      const delay = index * 0.3; // Spread the ball creation over time

      return (
        <Obstacles
          key={index}
          left={left}
          color={color}
          animationDuration={duration}
          animationDelay={delay}
          size={`${size}px`}
        />
      );
    };

    const newCircles = [];
    for (let i = 0; i < 25; i++) {
      newCircles.push(createCircle(i));
    }
    setCircles(newCircles);
  }, []);

  return <div className="container">{circles}</div>;
};

export default FallingCircles;
