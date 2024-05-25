import { IObstacle, IObstaclePosition } from '../../types/IObstacle'
import { useEffect, useState } from 'react'

export const Obstacle: React.FC<IObstacle> = ({ id, position, speed, color, width, height }) =>
{
  const [currentPosition, setCurrentPosition] = useState<IObstaclePosition>(position)

  useEffect(() =>
  {
    const intervalId = setInterval(() =>
    {
      setCurrentPosition((prev) => ({ ...prev, y: prev.y + speed }))
    }, 10)

    return () =>
      clearInterval(intervalId)
  }, [speed])

  return (
    <div
      className={`absolute z-50`}
      style={{ top: currentPosition.y, left: currentPosition.x, width: `${width}px`, height: `${height}px`, backgroundColor: color }}
      id={id}
    >

    </div>
  )
}