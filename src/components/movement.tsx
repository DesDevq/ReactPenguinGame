import React, { useEffect, useState } from "react";
import { IPlayer, IPlayerPosition } from "../types/IPLayerPosition";
import "../styles.css";

export const Player: React.FC<IPlayer> = ({ id, position, size }) => {
  const [currentPosition, setCurrentPosition] = useState<IPlayerPosition>({
    x: position.x,
    y: position.y,
  });
  const activeKeys = new Set<string>();

  const handleKeyDown = (event: KeyboardEvent) => activeKeys.add(event.key);

  const handleKeyUp = (event: KeyboardEvent) => activeKeys.delete(event.key);

  useEffect(() => {
    const updatePosition = () => {
      setCurrentPosition((prev) => {
        let newPosition = { ...prev };

        if (activeKeys.has("w")) newPosition.y -= 10;
        if (activeKeys.has("a")) newPosition.x -= 10;
        if (activeKeys.has("s")) newPosition.y += 10;
        if (activeKeys.has("d")) newPosition.x += 10;

        if (position.x && position.y > container1) {
        }

        return newPosition;
      });
    };

    const intervalId = setInterval(updatePosition, 10);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <img
      style={{
        position: "absolute",
        left: currentPosition.x,
        top: currentPosition.y,
      }}
      src="/player.png"
      alt="Player"
      key={id}
      width={size?.width}
      height={size?.height}
    />
  );
};
