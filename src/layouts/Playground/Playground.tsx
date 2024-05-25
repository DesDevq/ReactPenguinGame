import { IPlayground } from '../../types/IPlayground'

export const Playground: React.FC<IPlayground> = ({ children }) =>
{
  return (
    <section className='w-screen h-screen'>
      {children}
    </section>
  )
}