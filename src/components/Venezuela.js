import { CardNews } from './CardNews'
import { venezuelaData } from '../utils/venezuelaData'

export const Venezuela = () => {
  return (
    <div
      className='bg-[#292929] w-full h-[500px] flex items-center justify-center'
      id='venezuela'
    >
      <div className='container'>
        <h2 className='text-white font-bold text-3xl pl-1 mb-5'>Venezuela</h2>
        <div className='flex items-center justify-around mt-8'>
          {venezuelaData.map((data, index) => (
            <CardNews key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  )
}
