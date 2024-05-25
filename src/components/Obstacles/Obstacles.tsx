import { IObstacle } from '../../types/IObstacle'
import { useEffect, useState } from 'react'
import { Obstacle } from './Obstacle'

const newRandomObstacle = (): IObstacle =>
{
  const id = Math.random().toString(36).substring(7)
  const speed = Math.floor(Math.random() * 5) + 1
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  const width = Math.floor(Math.random() * 100) + 50
  const height = Math.floor(Math.random() * 100) + 50
  const position = { x: Math.floor(Math.random() * window.innerWidth), y: -height }

  return { id, speed, color, width, height, position }
}

export const Obstacles = () =>
{
  const [obstacles, setObstacles] = useState<IObstacle[]>([])

  useEffect(() =>
  {
    const intervalId = setInterval(() =>
    {
      setObstacles((prev) =>
      {
        const newObstacle = newRandomObstacle()
        return [...prev, newObstacle]
      })
    }, 1000)

    return () =>
      clearInterval(intervalId)
  }, [])

  return (
    <div className='obstacles'>
      {obstacles.map((obstacle) => <Obstacle key={obstacle.id} {...obstacle} />)}
    </div>
  )
}