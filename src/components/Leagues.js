import { dataLeagues } from '../utils/leaguesData'

export const Leagues = () => {
  return (
    <div
      id='leagues'
      className='w-full h-auto bg-[#333] flex items-center justify-center py-12'
    >
      <div className='container'>
        <h2 className='text-white font-bold text-3xl pl-8 lg:pl-1 mb-5'>
          Leagues
        </h2>
        <div className='w-full grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8'>
          {dataLeagues.map((league, index) => (
            <a href={league.link} key={index} target='_blank' rel='noreferrer'>
              <div className='flex items-center justify-center bg-[#292929] rounded-full w-[150px] h-[150px] sm:w-[210px] sm:h-[210px] mx-auto hover:shadow-2xl hover:w-[180px] hover:h-[180px]'>
                <img
                  src={league.image}
                  alt={league.name}
                  className='w-[80px] sm:w-[110px]'
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
