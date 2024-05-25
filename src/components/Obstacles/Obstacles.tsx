import React, { useCallback, useEffect, useState } from 'react'
import { IObstacle } from '../../types/IObstacle'
import { Obstacle } from './Obstacle'

const newRandomObstacle = (updatePosition: (id: string, newY: number) => void): IObstacle =>
{
  const id = Math.random().toString(36).substring(7)
  const speed = Math.floor(Math.random() * 5) + 1
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  const width = Math.floor(Math.random() * 100) + 50
  const height = Math.floor(Math.random() * 100) + 50
  const position = { x: Math.floor(Math.random() * window.innerWidth), y: -height }

  return { id, speed, color, width, height, position, updatePosition }
}

export const Obstacles: React.FC = () =>
{
  const [obstacles, setObstacles] = useState<IObstacle[]>([])

  const updatePosition = useCallback((id: string, newY: number) => {
    setObstacles((prev) => (
      prev.map((obstacle) =>
        obstacle.id === id
          ? { ...obstacle, position: { ...obstacle.position, y: newY } }
          : obstacle
      )
    ))
  }, [])

  useEffect(() =>
  {
    const intervalId = setInterval(() =>
    {
      setObstacles((prev) => {
        const filteredObstacles = prev.filter((obstacle) => obstacle.position.y < window.innerHeight)
        const newObstacle = newRandomObstacle(updatePosition)

        return [...filteredObstacles, newObstacle]
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [updatePosition])

  return (
    <div className='obstacles'>
      {obstacles.map((obstacle) => (
        <Obstacle key={obstacle.id} {...obstacle} />
      ))}
    </div>
  )
}
