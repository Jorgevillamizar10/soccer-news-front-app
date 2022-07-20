export const Navbar = () => {
  return (
    <nav className='top-0 fixed w-full h-16 bg-black border-b-[7px] border-[#73c3ce] flex items-center justify-center z-50'>
      <div className='container flex items-center justify-around h-full w-full'>
        <a
          className='text-white uppercase cursor-pointer hover:text-[#73c3ce] text-sm'
          href='#breking_news'
        >
          Breaking News
        </a>
        <a
          className='text-white uppercase cursor-pointer hover:text-[#73c3ce] text-sm'
          href='#leagues'
        >
          Leagues
        </a>
        <a
          className='text-white uppercase cursor-pointer hover:text-[#73c3ce] text-sm'
          href='#best_goals'
        >
          Best Goals
        </a>
        <img src='/assets/logo.jpeg' alt='soccer-news-logo' className='w-10' />
        <a
          className='text-white uppercase cursor-pointer hover:text-[#73c3ce] text-sm'
          href='#last-results'
        >
          Last Results
        </a>
        <a
          className='text-white uppercase cursor-pointer hover:text-[#73c3ce] text-sm'
          href='#venezuela'
        >
          Venezuela
        </a>
        <a
          className='text-white uppercase cursor-pointer hover:text-[#73c3ce] text-sm'
          href='#members'
        >
          Members
        </a>
      </div>
    </nav>
  )
}
