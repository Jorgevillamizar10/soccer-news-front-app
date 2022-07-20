import { resultsData } from '../utils/resultsData'

export const LastResults = () => {
  return (
    <section
      id='last-results'
      className='w-full h-auto bg-[#333] flex items-center justify-center py-12'
    >
      <div className='container'>
        <h2 className='text-white font-bold text-3xl pl-8 lg:pl-1 mb-5'>
          Last Results
        </h2>
        <div className='w-full grid gap-8  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-8'>
          {resultsData.map((game, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center bg-[#292929] w-[90%] sm:w-[410px] h-[150px] mx-auto'
            >
              <div className='flex items-center justify-around w-[90%] p-x'>
                <img
                  src={game.localTeam.image}
                  alt={game.localTeam.name}
                  className={`
                    ${
                      game.localTeam.name === 'Juventus' ||
                      game.localTeam.name === 'AC Milan' ||
                      game.localTeam.name === 'Nantes FC'
                        ? 'w-[40px]'
                        : 'w-[60px]'
                    }
                    object-cover
                  `}
                />
                <p className='text-[#73c3ce] font-bold text-3xl'>
                  {game.score}
                </p>
                <img
                  src={game.secondTeam.image}
                  alt={game.secondTeam.name}
                  className={`
                    ${
                      game.secondTeam.name === 'Juventus' ||
                      game.secondTeam.name === 'AC Milan' ||
                      game.secondTeam.name === 'Nantes FC'
                        ? 'w-[40px]'
                        : 'w-[60px]'
                    }
                    object-cover
                  `}
                />
              </div>
              <span className='text-white mt-2'>{game.stadium}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
