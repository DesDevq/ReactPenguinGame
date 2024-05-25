import { IPlayer, IPlayerPosition } from '../../types/IPlayer'
import { Keyboard } from '../../types/DKeyboard'
import { useEffect, useState } from 'react'

export const Player: React.FC<IPlayer> = ({ id, position, size }) =>
{
  const [currentPosition, setCurrentPosition] = useState<IPlayerPosition>({ x: position.x, y: position.y })

  const handleKeyDown = (event: KeyboardEvent) =>
  {
    switch (event.key)
    {
      case Keyboard.Down:
        setCurrentPosition((prev) => ({ ...prev, y: prev.y + 10 }))
        break

      case Keyboard.Left:
        setCurrentPosition((prev) => ({ ...prev, x: prev.x - 10 }))
        break

      case Keyboard.Right:
        setCurrentPosition((prev) => ({ ...prev, x: prev.x + 10 }))
        break

      case Keyboard.Up:
        setCurrentPosition((prev) => ({ ...prev, y: prev.y - 10 }))
        break

      default:
        break
    }
  }

  useEffect(() =>
  {
    window.addEventListener('keydown', handleKeyDown)

    return () =>
      window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <img
        className={`absolute w-[${size.width}px] h-[${size.height}px]`}
        style={{ left: currentPosition.x, top: currentPosition.y }}
        src="/public/player.png"
        width={size.width}
        height={size.height}
        alt="Player"
        key={id}
      />
    </>
  )
}