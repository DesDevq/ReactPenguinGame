import "../../src/styles.css";

interface CircleProps {
  left: number;
  color: string;
  animationDuration?: number;
  animationDelay?: number;
  size: string;
}

export const Obstacles: React.FC<CircleProps> = ({
  left,
  color,
  animationDuration,
  animationDelay,
  size,
}) => {
  return (
    <>
      <div className="CirclesContainer">
        <div
          className="circle"
          style={{
            height: `${size}`,
            width: `${size}`,
            left: `${left}px`,
            backgroundColor: color,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDelay}s`,
          }}
        ></div>
      </div>
    </>
  );
};
