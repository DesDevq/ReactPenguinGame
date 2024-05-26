import FallingCircles from "./CirclesContainer";
import { Player } from "./components/movement";

function App() {
  return (
    <>
      <Player
        id="player1"
        position={{ x: 0, y: 0 }}
        size={{ width: 90, height: 150 }}
      />
      <FallingCircles />
    </>
  );
}

export default App;
