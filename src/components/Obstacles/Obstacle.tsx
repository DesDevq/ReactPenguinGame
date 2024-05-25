import { IObstacle } from '../../types/IObstacle'
import { useEffect } from 'react'

export const Obstacle: React.FC<IObstacle> = ({ id, updatePosition, position, speed, color, width, height }) =>
{
  useEffect(() =>
  {
    const intervalId = setInterval(() =>
    {
      updatePosition(id, position.y + speed)
    }, 10)

    return () =>
      clearInterval(intervalId)
  }, [id, speed, position.y, updatePosition])

  return (
    <div
      className={`absolute z-50`}
      style={{ top: position.y, left: position.x, width: `${width}px`, height: `${height}px`, backgroundColor: color }}
      id={id}
    >

    </div>
  )
}