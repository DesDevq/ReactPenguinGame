import { IPlayground } from '../../types/IPlayground'

export const Playground: React.FC<IPlayground> = ({ children }) =>
{
  return (
    <section className='relative w-full h-screen overflow-hidden'>
      {children}
    </section>
  )
}