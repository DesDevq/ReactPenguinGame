export interface IObstaclePosition
{
  x: number
  y: number
}

export interface IObstacle
{
  id: string
  speed: number
  color: string
  width: number
  height: number
  position: IObstaclePosition
  updatePosition: (id: string, newY: number) => void
}