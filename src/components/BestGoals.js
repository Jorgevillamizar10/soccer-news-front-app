export const BestGoals = () => {
  return (
    <section
      className='bg-[#292929] w-full h-[730px] py-12 flex justify-center'
      id='best_goals'
    >
      <div className='container'>
        <h2 className='text-white font-bold text-3xl pl-1 mb-5'>Best Goals</h2>
        <div className='flex items-center justify-center' id='breking_news'>
          {/* <video src='https://www.youtube.com/watch?v=bKOTKHtbM54' controls /> */}
          <iframe
            width='860'
            height='560'
            src='https://www.youtube.com/embed/bKOTKHtbM54'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </section>
  )
}
