export const CardNews = ({ image, title, description, link }) => {
  return (
    <article className='w-[312px] h-[338px] bg-[#333] rounded-md cursor-pointer'>
      <a href={link} target='_blank'>
        <img
          src={image.url}
          alt={image.name}
          className='rounded-t-md h-[55%] object-cover w-full'
        />
        <div className='p-4'>
          <h3 className='text-white w-full font-bold truncate text-2xl'>
            {title}
          </h3>
          <p className='text-white w-full text-base'>{description}</p>
        </div>
      </a>
    </article>
  )
}
