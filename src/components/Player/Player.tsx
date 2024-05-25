import { IPlayer, IPlayerPosition } from '../../types/IPlayer'
import { Keyboard } from '../../types/DKeyboard'
import { useEffect, useState } from 'react'

export const Player: React.FC<IPlayer> = ({ id, position, size }) =>
{
  const [currentPosition, setCurrentPosition] = useState<IPlayerPosition>({ x: position.x, y: position.y })
  const activeKeys = new Set<string>()

  const handleKeyDown = (event: KeyboardEvent) =>
    activeKeys.add(event.key)

  const handleKeyUp = (event: KeyboardEvent) =>
    activeKeys.delete(event.key)

  useEffect(() =>
  {
    const updatePosition = () =>
    {
      setCurrentPosition((prev) =>
      {
        let newPosition = { ...prev }

        if (activeKeys.has(Keyboard.Up))
          newPosition.y -= 10

        if (activeKeys.has(Keyboard.Down))
          newPosition.y += 10

        if (activeKeys.has(Keyboard.Left))
          newPosition.x -= 10

        if (activeKeys.has(Keyboard.Right))
          newPosition.x += 10

        return newPosition
      })
    }

    const intervalId = setInterval(updatePosition, 10)

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () =>
    {
      clearInterval(intervalId)

      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <>
      <img
        className={`absolute w-[${size.width}px] h-[${size.height}px]`}
        style={{ left: currentPosition.x, top: currentPosition.y }}
        src="/player.png"
        width={size.width}
        height={size.height}
        alt="Player"
        key={id}
      />
    </>
  )
}