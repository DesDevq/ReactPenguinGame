import { useEffect, useState } from "react";

export const Movement: React.FC = () => {
  const [left, setLeft] = useState<number>(0);
  const [top, setTop] = useState<number>(0);

  const handleKeyDown = (ev: KeyboardEvent) => {
    console.log(ev.code);

    switch (ev.key) {
      case "w":
        setTop((prevTop: number) => prevTop - 15);
        break;
      case "s":
        setTop((prevTop: number) => prevTop + 15);
        break;
      case "a":
        setLeft((prevLeft: number) => prevLeft - 15);
        break;
      case "d":
        setLeft((prevLeft: number) => prevLeft + 15);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="container2">
        <img
          src="/player.png"
          className="image"
          style={{ position: "relative", top: `${top}px`, left: `${left}px` }}
        />
      </div>
    </>
  );
};
