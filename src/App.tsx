import { Playground } from './layouts/Playground/Playground'
import { Obstacles } from './components/Obstacles/Obstacles'
import { Player } from './components/Player/Player'

export const App = () =>
{
  return (
    <>
      <Playground>
        <Player id="player1" position={{ x: 0, y: 0 }} size={{ width: 150, height: 150 }} />
        <Obstacles />
      </Playground>
    </>
  )
}